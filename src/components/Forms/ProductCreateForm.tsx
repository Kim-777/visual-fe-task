import React, { useCallback, useState } from "react";
import { CreateProduct, Product } from "src/types";
import CheckBox from "./Items/CheckBox";
import ColorsInput from "./Items/ColorsInput";
import TextInput from "./Items/TextInput";
import "./ProductForm.scss";

type Props = {
  onSubmit: () => {};
  defaultProduct?: Product;
};

const ProductCreateForm = () => {
  const [form, setForm] = useState<CreateProduct>({
    name: "",
    description: "",
    price: "",
    isDiscount: false,
    createdBy: 1,
    colors: [],
    images: [],
  });

  const handleTextInputChange = useCallback(
    (formKey: string, value: string) => {
      // console.log("value :::: ", value);
      console.log("key ::: ", formKey);
      setForm((prev) => ({ ...prev, [formKey]: value }));
    },
    []
  );
  console.log("form :::: ", form);
  // console.log("form.isDiscount ::::", form.isDiscount);

  return (
    <form className="product_form_wrapper">
      <TextInput
        title="상품명"
        value={form.name}
        onChange={handleTextInputChange}
        formKey="name"
        placeholder="상품명을 입력하세요"
      />

      <TextInput
        title="상품 설명"
        value={form.description}
        onChange={handleTextInputChange}
        formKey="description"
        placeholder="설명을 입력하세요"
      />

      <TextInput
        title="가격"
        value={form.price}
        onChange={handleTextInputChange}
        formKey="price"
        placeholder="가격을 입력하세요(숫자만)"
        isAvailableOnlyNumber
      />

      <div>
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
      <div>
        <button>확인</button>
        <button>취소</button>
      </div>
    </form>
  );
};

export default ProductCreateForm;
