import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../context/cartSlice";
const product = [
  { id: 1, name: "pr1" },
  { id: 2, name: "pr2" },
  { id: 3, name: "pr3" },
  { id: 4, name: "pr4" },
];
const ProductList = () => {
  const dispatch = useDispatch();

  const handleClickAdd = ( id) => {
    const newItem = product.find((pr)=>pr.id===id);
    dispatch(addToCart(newItem));
  };
  const handleClickRemove = ( id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
        <h2>Add-to-cart this products:</h2>
        {product.map((pr, index) => {
          return (
            <div className="d-flex justify-content-center">
            <div className="card">
              <div key={pr.id} className="card-body">
                <button
                  type="button"
                  className="btn btn-primary my-2"
                  onClick={(e) => handleClickAdd(pr.id)}
                  value={pr.id}
                  key={index}
                >
                  Add-to-cart : {pr.id} : {pr.name}
                </button>
              </div>
            </div><div className="card">
                <div key={pr.id} className="card-body">
                  <button
                    type="button"
                    className="btn btn-danger my-2"
                    onClick={(e) => handleClickRemove(pr.id)}
                    value={pr.id}
                    key={index + 100}
                  >
                    Remove-from-cart : {pr.id} : {pr.name}
                  </button>
                </div>
              </div> 
      </div>
          );
        })}
    </div>
  );
};

export default ProductList;
