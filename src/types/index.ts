export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  isDiscount: boolean;
  discountRate?: string;
  createdBy: number;
  createdAt: string;
  lastEditAt: string;
  colors: string[];
  images: string[];
};

export type CreateProduct = Omit<Product, "id" | "createdAt" | "lastEditAt">;
