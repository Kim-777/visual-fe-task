import dayjs from "dayjs";
import { DEFAULT_PRODUCTS_MOCK } from "src/constants";
import { CreateProduct, ListReturn, Product } from "src/types";

let productId = 6;
const waitFn = (time?: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), time ?? 1000);
  });
const Limit = 5;

export const getProducts = async (page: number) => {
  const data = DEFAULT_PRODUCTS_MOCK.slice(page * Limit, (page + 1) * Limit);

  const isNext =
    DEFAULT_PRODUCTS_MOCK.length > (page + 1) * Limit ? true : false;

  const result: ListReturn<Product> = {
    isNext,
    pageNow: page,
    data,
  };

  waitFn(1000);

  return result;
};

export const createProduct = async (product: CreateProduct) => {
  const newProduct = {
    ...product,
    id: productId++,
    createdBy: 1,
    createdAt: dayjs().format("YYYY. MM. DD"),
  };

  DEFAULT_PRODUCTS_MOCK.unshift(newProduct);

  await waitFn();

  return newProduct;
};

export const modifyProduct = async (product: Product) => {
  const foundIndex = DEFAULT_PRODUCTS_MOCK.findIndex(
    (item) => item.id === product.id
  );

  if (foundIndex > -1) {
    DEFAULT_PRODUCTS_MOCK.splice(foundIndex, 1, {
      ...product,
      lastEditAt: dayjs().format("YYYY. MM. DD"),
    });
  }

  await waitFn(1000);

  return true;
};

export const deleteProduct = async (id: number) => {
  const foundIndex = DEFAULT_PRODUCTS_MOCK.findIndex((item) => item.id === id);

  if (foundIndex > -1) {
    DEFAULT_PRODUCTS_MOCK.splice(foundIndex, 1);
    return true;
  }

  throw new Error("아이템이 없습니다.");
};
