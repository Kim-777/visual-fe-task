import React from "react";
import "./ComfirmModal.scss";
import { BsExclamationLg } from "react-icons/bs";

type Props = {
  onOk: () => void;
  onCancel: () => void;
  okText?: string;
  cancelText?: string;
  title: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ComfirmModal = ({ onOk, onCancel, okText, cancelText, title }: Props) => {
  return (
    <div className="confirm_modal_wrapper">
      <div>
        <div className="icon_wrapper">
          <BsExclamationLg
            style={{
              color: "red",
              width: "16px",
              height: "16px",
            }}
          />
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="btns_wrapper">
        <button onClick={onCancel}>{cancelText || "취소"}</button>
        <button onClick={onOk} className="ok_button">
          {okText || "확인"}
        </button>
      </div>
    </div>
  );
};

export default ComfirmModal;
