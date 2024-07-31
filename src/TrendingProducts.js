import React, { useEffect, useState } from 'react';

const currentDate = new Date().toDateString();
const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const mockProducts = [
      { name: 'product1', image_url: 'image1', price: '$10', scrapped_date: currentDate, url: 'Click Here To View Product' },
      { name: 'product2', image_url: 'image2', price: '$20', scrapped_date: currentDate, url: 'Click Here To View Product' },
      { name: 'product3', image_url: 'image3', price: '$30', scrapped_date: currentDate, url: 'Click Here To View Product' },
      { name: 'product4', image_url: 'image4', price: '$40', scrapped_date: currentDate, url: 'Click Here To View Product' },
      { name: 'product5', image_url: 'image5', price: '$50', scrapped_date: currentDate, url: 'Click Here To View Product' },
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div className="trending-products">
      <h2>Trending Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.name} className="product-card">
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Date: {product.scrapped_date}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">Click Here To View Product</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;