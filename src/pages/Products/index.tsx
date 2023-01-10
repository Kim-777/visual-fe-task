import React from "react";
import ComfirmModal from "src/components/Modals/ComfirmModal";
import { useModal } from "src/contexts/ModalFrameContext";

const Products = () => {
  const onOk = () => {};
  const onCancel = () => {};

  const { setModal, closeModal } = useModal();

  return (
    <div>
      <button
        onClick={() => {
          setModal(
            <ComfirmModal onOk={onOk} onCancel={closeModal} title="hi" />
          );
        }}
      >
        모달 오픈!
      </button>
    </div>
  );
};

export default Products;
