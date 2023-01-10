import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { deleteProduct, getProducts } from "src/apis";
import ProductListItem from "src/components/Items/ProductListItem";
import ConfirmModal from "src/components/Modals/ConfirmModal";
import { useModal } from "src/Contexts/ModalFrameContext";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import "./products.scss";

const Products = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);

  const { setModal, closeModal } = useModal();

  const productsInfiniteQuery = useInfiniteQuery(
    ["products", "infinite"],
    async ({ pageParam }) => {
      const result = await getProducts(pageParam ?? 0);

      return result;
    },
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isNext) return undefined;

        return lastPage.pageNow + 1;
      },
    }
  );

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess(data, variables, context) {
      productsInfiniteQuery.refetch();
      closeModal();
    },
    onError() {},
  });

  const onDelete = useCallback((id: number) => {
    setModal(
      <ConfirmModal
        title="상품을 삭제하시겠습니까?"
        onOk={() => {
          deleteMutation.mutate(id);
        }}
        onCancel={closeModal}
      />
    );
  }, []);

  const onEdit = useCallback((id: number) => {
    console.log("edit!");
  }, []);

  useIntersectionObserver({
    targetRef,
    onIntersect: productsInfiniteQuery.fetchNextPage,
    enabled: productsInfiniteQuery.hasNextPage,
    ready: !productsInfiniteQuery.isFetching,
  });

  return (
    <div className="main_products_wrapper">
      <section>
        {productsInfiniteQuery.data?.pages.map((page) =>
          page.data.map((item) => (
            <ProductListItem
              key={item.id}
              {...item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
        <div ref={targetRef} />
      </section>
    </div>
  );
};

export default Products;
