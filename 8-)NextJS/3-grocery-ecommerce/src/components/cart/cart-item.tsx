import { Product } from "@/types";
import { FC } from "react";

interface Props {
  item: {
    grocery: Product;
    name: string;
    price: number;
    quantity: number;
    _id: string;
  };
}

const CartItem: FC<Props> = ({ item }) => {
  return <div>CartItem</div>;
};

export default CartItem;
