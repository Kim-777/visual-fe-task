import React from "react";
import "./ConfirmModal.scss";
import { BsExclamationLg } from "react-icons/bs";

type Props = {
  onOk: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  title: string;
  isJustOkBtn?: boolean;
  isGreenIcon?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ConfirmModal = ({
  onOk,
  onCancel,
  okText,
  cancelText,
  title,
  isJustOkBtn,
  isGreenIcon,
}: Props) => {
  return (
    <div className="confirm_modal_wrapper">
      <div>
        <div
          className="icon_wrapper"
          style={{
            backgroundColor: isGreenIcon
              ? "rgb(233, 255, 222)"
              : "rgb(255, 222, 222)",
          }}
        >
          <BsExclamationLg
            style={{
              color: isGreenIcon ? "green" : "red",
              width: "16px",
              height: "16px",
            }}
          />
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="btns_wrapper">
        {!isJustOkBtn && (
          <button onClick={onCancel}>{cancelText || "취소"}</button>
        )}
        <button onClick={onOk} className="ok_button">
          {okText || "확인"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
