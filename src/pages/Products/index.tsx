import React from "react";
import ConfirmModal from "src/components/Modals/ConfirmModal";
import { useModal } from "src/Contexts/ModalFrameContext";

const Products = () => {
  const onOk = () => {};
  const onCancel = () => {};

  const { setModal, closeModal } = useModal();

  return (
    <div>
      <button
        onClick={() => {
          setModal(
            <ConfirmModal onOk={onOk} onCancel={closeModal} title="hi" />
          );
        }}
      >
        모달 오픈!
      </button>
    </div>
  );
};

export default Products;
