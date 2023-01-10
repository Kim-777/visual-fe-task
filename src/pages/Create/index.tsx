import { useMutation } from "@tanstack/react-query";
import React from "react";
import { createProduct } from "src/apis";
import ProductForm from "src/components/Forms/ProductCreateForm";
import { useModal } from "src/contexts/ModalFrameContext";

const Create = () => {
  const {} = useModal();

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess(data, variables, context) {},
    onError() {},
  });

  return (
    <div>
      <ProductForm />
    </div>
  );
};

export default Create;
