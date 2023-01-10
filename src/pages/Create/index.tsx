import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createProduct } from "src/apis";
import ProductForm from "src/components/Forms/ProductCreateForm";
import ConfirmModal from "src/components/Modals/ConfirmModal";
import { useModal } from "src/context/ModalFrameContext";

const Create = () => {
  const { closeModal, setModal } = useModal();
  const navigate = useNavigate();

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess() {
      setModal(
        <ConfirmModal
          onOk={() => {
            closeModal();
            navigate("/");
          }}
          title="상품이 등록되었습니다."
          isJustOkBtn
          isGreenIcon
        />
      );
    },
    onError() {},
  });

  return (
    <div>
      <ProductForm
        onSubmit={createProductMutation.mutate}
        isCreating={createProductMutation.isLoading}
      />
    </div>
  );
};

export default Create;
