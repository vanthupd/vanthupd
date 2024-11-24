import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Giá: {product.price} VNĐ</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductCard;
