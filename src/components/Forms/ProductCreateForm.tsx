import React, { useState } from "react";
import { CreateProduct, Product } from "src/types";
import CheckBox from "./Items/CheckBox";
import ColorsInput from "./Items/ColorsInput";
import "./ProductForm.scss";

type Props = {
  onSubmit: () => {};
  defaultProduct?: Product;
};

const ProductCreateForm = () => {
  const [form, setForm] = useState<CreateProduct>({
    name: "",
    description: "",
    price: 0,
    isDiscount: false,
    createdBy: 1,
    colors: [],
    images: [],
  });

  console.log("form.isDiscount ::::", form.isDiscount);

  return (
    <form className="product_form_wrapper">
      <div>
        <label htmlFor="name">상품명</label>
        <input id="name" />
      </div>
      <div>
        <label htmlFor="description">설명</label>
        <input id="description" />
      </div>
      <div>
        <label htmlFor="price">가격</label>
        <input id="price" />
      </div>
      <div>
        <CheckBox
          checked={form.isDiscount}
          onChange={(checked) => {
            setForm((prev) => ({ ...prev, isDiscount: checked }));
          }}
        />
      </div>
      <div>
        <label>할인율</label>
        <input />
      </div>
      <ColorsInput
        colors={form.colors}
        onAdd={(color) => {
          if (form.colors.findIndex((item) => item === color) > -1) return;

          setForm((prev) => ({ ...prev, colors: prev.colors.concat(color) }));
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
