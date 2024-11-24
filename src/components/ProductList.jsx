import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

const ProductList = () => {
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);

  return (
    <div>
      <div className="filter">
        <button onClick={() => setCategory('all')}>Tất cả</button>
        <button onClick={() => setCategory('iPhone')}>iPhone</button>
        <button onClick={() => setCategory('Samsung')}>Samsung</button>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
