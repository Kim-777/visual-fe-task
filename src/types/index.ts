export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  isDiscount: boolean;
  discountRate: number;
  createdBy: number;
  createdAt: string;
  lastEditAt: string;
  colors: string[];
  images: string[];
};
