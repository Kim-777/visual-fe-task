import React, { useId, useRef, useState } from "react";
import "./ColorsInput.scss";
import { VscClose } from "react-icons/vsc";

const Color = ({
  color,
  onDelete,
}: {
  color: string;
  onDelete: () => void;
}) => {
  return (
    <div className="color_wrapper">
      <span>{color}</span>{" "}
      <VscClose onClick={onDelete} style={{ cursor: "pointer" }} />
    </div>
  );
};

type Props = {
  colors: string[];
  onAdd: (color: string) => void;
  onDelete: (color: string) => void;
};

const ColorsInput = ({ colors, onAdd, onDelete }: Props) => {
  const [color, setColor] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  return (
    <div className="color_input_wrapper">
      <label htmlFor={inputId}>색상</label>
      <div className="colors_wrapper">
        {colors.map((color) => (
          <Color
            key={color}
            color={color}
            onDelete={() => {
              onDelete(color);
            }}
          />
        ))}

        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          ref={inputRef}
          id={inputId}
        />
        <button
          disabled={!color}
          type="button"
          className="add_btn"
          onClick={() => {
            onAdd(color);
            setColor("");
            inputRef.current?.focus();
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default ColorsInput;
