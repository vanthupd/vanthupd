import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import NewsPage from './components/NewsPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Danh sách sản phẩm</h1>
      <ProductList />
      <h1>Tin tức</h1>
      <NewsPage />
    </div>
  );
};

export default App;
