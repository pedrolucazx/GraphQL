import { IProduct } from "../types/interfaces";

export const Product = {
  discountPrice({ discount, price }: IProduct) {
    return discount ? price * (1 - discount) : price;
  },
};
