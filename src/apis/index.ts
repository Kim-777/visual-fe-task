import dayjs from "dayjs";
import { CreateProduct } from "src/types";

export const DEFAUL_PRODUCTS_MOCK = [];
let productId = 11;
const waitFn = (time?: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), time ?? 2000);
  });

export const getProducts = async () => {};

export const createProduct = async (product: CreateProduct) => {
  const newProduct = {
    ...product,
    id: productId++,
    createdBy: 1,
    createdAt: dayjs().format("YYYY. MM. DD"),
  };

  console.log("start!");
  await waitFn();
  console.log("end!");

  return newProduct;
};

export const modifyProduct = async () => {};

export const deleteProduct = async () => {};
