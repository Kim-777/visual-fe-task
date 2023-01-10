import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "src/types";
import "./ProductListItem.scss";

type Props = Product & {
  onDelete: (id: number) => void;
  onEdit: (id: Product) => void;
};

const ProductListItem = ({
  images,
  id,
  name,
  description,
  price,
  isDiscount,
  discountRate,
  createdAt,
  lastEditAt,
  createdBy,
  colors,
  onDelete,
  onEdit,
}: Props) => {
  const navigate = useNavigate();

  const realPrice = isDiscount
    ? Math.floor(Number(price) * ((100 - Number(discountRate)) / 100))
    : price;

  return (
    <article
      onClick={() => {
        console.log("onClick");
        navigate(`/products/${id}`);
      }}
      className="main_product_list_item_wrapper"
    >
      {images?.[0].img && <img src={images[0].img} width={100} height={100} />}
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        {isDiscount ? (
          <li>
            <span
              style={{
                color: "rgb(98, 0, 240)",
                fontWeight: 700,
                marginRight: "4px",
              }}
            >
              {discountRate}%
            </span>{" "}
            <span>{realPrice.toLocaleString()}원</span>
          </li>
        ) : (
          <li>{price.toLocaleString()}원</li>
        )}
        {colors.length > 0 && <li>대표 컬러: {colors?.[0]}</li>}
        <li>생성날짜 : {createdAt}</li>
        {lastEditAt && <li>최종 수정날짜 : {lastEditAt}</li>}
        {createdBy === 1 && (
          <li className="method_btns">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit({
                  images,
                  id,
                  name,
                  description,
                  price,
                  isDiscount,
                  discountRate,
                  createdAt,
                  lastEditAt,
                  createdBy,
                  colors,
                });
              }}
            >
              수정
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
            >
              삭제
            </button>
          </li>
        )}
      </ul>
    </article>
  );
};

export default React.memo(ProductListItem);
