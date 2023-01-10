import { Product } from "src/types";

export const imageExtensions = {
  JPG: ".jpg",
  PNG: ".png",
  GIF: ".gif",
  BMP: ".bmp",
};

export const DEFAULT_PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: "첫번째 상품",
    description: "첫번째 상품입니다.",
    price: "1000",
    isDiscount: true,
    discountRate: "10",
    createdBy: 2,
    createdAt: "2022. 12. 25",
    colors: [],
    images: [
      { id: "1", img: "/images/default_1.jpeg", name: "귀걸이", size: 30 },
    ],
  },
  {
    id: 2,
    name: "두번째 상품",
    description: "두번째 상품입니다.",
    price: "2000",
    isDiscount: true,
    discountRate: "10",
    createdBy: 2,
    createdAt: "2022. 12. 25",
    colors: [],
    images: [
      { id: "2", img: "/images/default_2.jpeg", name: "귀걸이", size: 30 },
    ],
  },
  {
    id: 3,
    name: "세번째 상품",
    description: "세번째 상품입니다.",
    price: "3000",
    isDiscount: false,
    createdBy: 1,
    createdAt: "2022. 12. 25",
    colors: ["빨강", "파랑", "초록"],
    images: [
      { id: "1", img: "/images/default_3.jpeg", name: "귀걸이", size: 30 },
    ],
  },
  {
    id: 4,
    name: "네번째 상품",
    description: "네번째 상품입니다.",
    price: "1000",
    isDiscount: true,
    discountRate: "10",
    createdBy: 2,
    createdAt: "2022. 12. 31",
    colors: [],
    images: [
      { id: "1", img: "/images/default_4.jpeg", name: "목걸이", size: 60000 },
    ],
  },
  {
    id: 5,
    name: "다섯번째 상품",
    description: "다섯번째 상품입니다.",
    price: "1000",
    isDiscount: true,
    discountRate: "10",
    createdBy: 1,
    createdAt: "2022. 12. 25",
    colors: [],
    images: [
      { id: "1", img: "/images/default_5.jpeg", name: "목걸이", size: 30000 },
      { id: "2", img: "/images/default_6.jpeg", name: "목걸이_2", size: 30000 },
      { id: "3", img: "/images/default_7.jpeg", name: "금반지", size: 30000 },
    ],
  },
];
