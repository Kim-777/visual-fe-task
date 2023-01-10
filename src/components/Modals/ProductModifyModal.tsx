import React, { useCallback, useState } from "react";
import { useImages } from "src/hooks/useImages";
import { Product } from "src/types";
import CheckBox from "../Forms/Items/CheckBox";
import ColorsInput from "../Forms/Items/ColorsInput";
import ImagesInput from "../Forms/Items/ImagesInput";
import TextInput from "../Forms/Items/TextInput";
import "./ProductModifyModal.scss";

type Props = {
  product: Product;
  onSave: (product: Product) => Promise<void>;
  onCancel: () => void;
};

const ProductModifyModal = ({ product, onSave, onCancel }: Props) => {
  const [modifiedProduct, setModifiedProduct] = useState<Product>(product);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const { images, inputRef, addImages, deleteImage } = useImages(
    product.images
  );

  const handleTextInputChange = useCallback(
    (formKey: string, value: string) => {
      setModifiedProduct((prev) => ({ ...prev, [formKey]: value }));
    },
    []
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    if (isSaving) return;
    e.preventDefault();
    setIsSaving(true);
    await onSave({ ...modifiedProduct, images });
    setIsSaving(false);
  };

  const cantSubmit =
    !modifiedProduct.name ||
    !modifiedProduct.description ||
    !modifiedProduct.price ||
    !images.length ||
    (modifiedProduct.isDiscount &&
      (!modifiedProduct.discountRate || modifiedProduct.discountRate === "0"));

  return (
    <div className="product_modify_modal_wrapper">
      <form onSubmit={onSubmit}>
        <fieldset disabled={isSaving}>
          <TextInput
            title="상품명"
            value={modifiedProduct.name}
            onChange={handleTextInputChange}
            formKey="name"
            placeholder="상품명을 입력하세요"
            isEssential
          />

          <TextInput
            title="상품 설명"
            value={modifiedProduct.description}
            onChange={handleTextInputChange}
            formKey="description"
            placeholder="설명을 입력하세요"
            isEssential
          />

          <TextInput
            title="가격"
            value={modifiedProduct.price}
            onChange={handleTextInputChange}
            formKey="price"
            placeholder="가격을 입력하세요(숫자만)"
            isAvailableOnlyNumber
            isEssential
          />

          <div style={{ marginTop: "20px" }}>
            <CheckBox
              checked={modifiedProduct.isDiscount}
              onChange={(checked) => {
                setModifiedProduct((prev) => ({
                  ...prev,
                  discountRate: "",
                  isDiscount: checked,
                }));
              }}
            />
          </div>
          {modifiedProduct.isDiscount && (
            <TextInput
              title="할인율"
              value={modifiedProduct.discountRate || ""}
              onChange={handleTextInputChange}
              formKey="discountRate"
              placeholder="할인율을 입력하세요(1~99의 숫자)"
              isAvailableOnlyNumber
              isEssential
              maxNum={99}
            />
          )}

          <ColorsInput
            colors={modifiedProduct.colors}
            onAdd={(color) => {
              if (
                modifiedProduct.colors.findIndex((item) => item === color) > -1
              )
                return;

              setModifiedProduct((prev) => ({
                ...prev,
                colors: prev.colors.concat(color),
              }));
            }}
            onDelete={(color) => {
              setModifiedProduct((prev) => ({
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
        <div className="btns_wrapper">
          <button type="button" onClick={onCancel}>
            취소
          </button>

          <button disabled={cantSubmit} type="submit" className="ok_button">
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductModifyModal;
