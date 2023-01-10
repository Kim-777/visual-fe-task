import React, { useCallback, useState } from "react";
import { CreateProduct } from "src/types";
import CheckBox from "./Items/CheckBox";
import ColorsInput from "./Items/ColorsInput";
import TextInput from "./Items/TextInput";
import { useImages } from "src/hooks/useImages";
import "./ProductForm.scss";
import ImagesInput from "./Items/ImagesInput";

type Props = {
  onSubmit: (product: CreateProduct) => void;
  // defaultProduct?: Product;
  isCreating: boolean;
};

const ProductCreateForm = ({ onSubmit, isCreating }: Props) => {
  const [form, setForm] = useState<Omit<CreateProduct, "images">>({
    name: "",
    description: "",
    price: "",
    isDiscount: false,
    createdBy: 1,
    colors: [],
  });

  const { images, inputRef, addImages, deleteImage } = useImages();

  const handleTextInputChange = useCallback(
    (formKey: string, value: string) => {
      setForm((prev) => ({ ...prev, [formKey]: value }));
    },
    []
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onSubmit({ ...form, images });
  };

  const cantSubmit =
    !form.name || !form.description || !form.price || !images.length;

  return (
    <form className="product_form_wrapper" onSubmit={handleSubmit}>
      <fieldset disabled={isCreating}>
        <TextInput
          title="상품명"
          value={form.name}
          onChange={handleTextInputChange}
          formKey="name"
          placeholder="상품명을 입력하세요"
          isEssential
        />

        <TextInput
          title="상품 설명"
          value={form.description}
          onChange={handleTextInputChange}
          formKey="description"
          placeholder="설명을 입력하세요"
          isEssential
        />

        <TextInput
          title="가격"
          value={form.price}
          onChange={handleTextInputChange}
          formKey="price"
          placeholder="가격을 입력하세요(숫자만)"
          isAvailableOnlyNumber
          isEssential
        />

        <div style={{ marginTop: "20px" }}>
          <CheckBox
            checked={form.isDiscount}
            onChange={(checked) => {
              setForm((prev) => ({ ...prev, isDiscount: checked }));
            }}
          />
        </div>
        {form.isDiscount && (
          <TextInput
            title="할인율"
            value={form.discountRate || ""}
            onChange={handleTextInputChange}
            formKey="discountRate"
            placeholder="할인율을 입력하세요(숫자만)"
            isAvailableOnlyNumber
          />
        )}

        <ColorsInput
          colors={form.colors}
          onAdd={(color) => {
            if (form.colors.findIndex((item) => item === color) > -1) return;

            setForm((prev) => ({ ...prev, colors: prev.colors.concat(color) }));
          }}
          onDelete={(color) => {
            setForm((prev) => ({
              ...prev,
              colors: prev.colors.filter((item) => item !== color),
            }));
          }}
        />
        <ImagesInput
          images={images}
          inputRef={inputRef}
          addImages={addImages}
          deleteImage={deleteImage}
        />
      </fieldset>
      <div className="product_create_form_method_btns_wrapper">
        <button disabled={cantSubmit || isCreating} type="submit">
          확인
        </button>
        <button type="button">취소</button>
      </div>
    </form>
  );
};

export default ProductCreateForm;
