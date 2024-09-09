import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../context/cartSlice";
import ProductCart from "./ProductCart";
const product = [
  { id: 1, name: "pr1" },
  { id: 2, name: "pr2" },
  { id: 3, name: "pr3" },
  { id: 4, name: "pr4" },
];
const ProductList = () => {
  const dispatch = useDispatch();

  const handleClickAdd = (id) => {
    const newItem = product.find((pr) => pr.id === id);
    dispatch(addToCart(newItem));
  };
  const handleClickRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <h2>Add-to-cart this products:</h2>
      {product.map((pr, index) => {
        return (
          <div className="d-flex justify-content-center" key={index}>
            <ProductCart
              product={pr}
              onAdd={() => {
                handleClickAdd(pr.id);
              }}
              onRemove={() => {
                handleClickRemove(pr.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
