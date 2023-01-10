import React, { useId } from "react";
import "./TextInput.scss";

type Props = {
  onChange: (key: string, value: string) => void;
  value: string;
  title: string;
  formKey: string;
  placeholder: string;
  isAvailableOnlyNumber?: boolean;
  isEssential?: boolean;
  maxNum?: number;
};

const TextInput = ({
  title,
  value,
  onChange,
  formKey,
  placeholder,
  isAvailableOnlyNumber,
  isEssential,
  maxNum,
}: Props) => {
  const inputId = useId();

  // console.log("value ::: ", value);

  return (
    <div className="text_input_wrapper">
      <label htmlFor={inputId}>
        {title}
        {isEssential && <em style={{ color: "red" }}> *</em>}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          if (isAvailableOnlyNumber) {
            const num = (e.target.value || "").replace(/[^0-9]/g, "");
            if (maxNum && Number(num) > maxNum) {
              return;
            }
            onChange(formKey, num);
            return;
          }
          onChange(formKey, e.target.value);
        }}
      />
    </div>
  );
};

export default React.memo(TextInput);
