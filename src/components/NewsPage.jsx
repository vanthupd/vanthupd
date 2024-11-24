import React from 'react';
import news from '../data/news';

const NewsPage = () => {
  return (
    <div className="news-page">
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
