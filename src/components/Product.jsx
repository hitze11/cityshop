import React from "react";

function Product({ product }) {
  return (
    <div className="product-card group">
      <img
        src={product.image}
        alt={product.name}
        className="product-image group-hover:scale-150 group-hover:fixed group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
      />
      <h2 className="text-xl">{product.name}</h2>
      <p className="text-lg">{`$${product.price}`}</p>
      <p
        className={`text-sm ${
          product.available ? "text-green-600" : "text-black-600"
        }`}
      >
        {product.available ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

export default Product;
