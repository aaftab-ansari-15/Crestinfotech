import React from "react";

const ProductCart = ({ product, onAdd, onRemove }) => {
  return (
    <div className="card mx-2">
      <div className="card-body d-flex justify-content-between">
        <button type="button" className="btn btn-primary my-2" onClick={onAdd}>
          Add-to-cart : {product.id} : {product.name}
        </button>
        <button
          type="button"
          className="btn btn-danger my-2"
          onClick={onRemove}
        >
          Remove-from-cart : {product.id} : {product.name}
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
