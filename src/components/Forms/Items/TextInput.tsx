import React, { useId } from "react";
import "./TextInput.scss";

type Props = {
  onChange: (key: string, value: string) => void;
  value: string;
  title: string;
  formKey: string;
  placeholder: string;
  isAvailableOnlyNumber?: boolean;
};

const TextInput = ({
  title,
  value,
  onChange,
  formKey,
  placeholder,
  isAvailableOnlyNumber,
}: Props) => {
  const inputId = useId();

  // console.log("value ::: ", value);

  return (
    <div className="text_input_wrapper">
      <label htmlFor={inputId}>{title}</label>
      <input
        id={inputId}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          if (isAvailableOnlyNumber) {
            onChange(formKey, (e.target.value || "").replace(/[^0-9]/g, ""));
            return;
          }
          onChange(formKey, e.target.value);
        }}
      />
    </div>
  );
};

export default React.memo(TextInput);
