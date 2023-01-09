import React, { useRef, useState } from "react";
import "./ColorsInput.scss";
import { CiTrash } from "react-icons/ci";

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
      <CiTrash onClick={onDelete} style={{ cursor: "pointer" }} />
    </div>
  );
};

type Props = { colors: string[]; onAdd: (color: string) => void };

const ColorsInput = ({ colors, onAdd }: Props) => {
  const [color, setColor] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="colors_wrapper">
      {colors.map((color) => (
        <Color key={color} color={color} onDelete={() => {}} />
      ))}
      <Color color="red" onDelete={() => {}} />
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        ref={inputRef}
      />
      <button
        disabled={!color}
        type="button"
        onClick={() => {
          onAdd(color);
          setColor("");
          inputRef.current?.focus();
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default ColorsInput;
