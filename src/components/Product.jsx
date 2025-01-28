import React from "react";

function Product({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h2 className="text-xl">{product.name}</h2>
      <p className="text-lg">{`$${product.price}`}</p>
      <p className={`text-sm ${product.available ? 'text-green-600' : 'text-black-600'}`}>
        {product.available ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

export default Product;
