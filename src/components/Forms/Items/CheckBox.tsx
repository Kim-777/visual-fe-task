import React from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import "./CheckBox.scss";
import cn from "classnames";

type Props = { checked: boolean; onChange: (checked: boolean) => void };

const CheckBox = ({ checked, onChange }: Props) => {
  return (
    <label className="checkbox_wrapper">
      <span>할인율 적용</span>
      <div className={cn("check_circle_wrapper", { active: checked })}>
        <div className="check_circle" />
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
    </label>
  );
};

export default CheckBox;
