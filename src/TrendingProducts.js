import React, { useEffect, useState } from 'react';

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data for trending products
    const mockProducts = [
      { id: 1, name: 'Product 1', price: '$10' },
      { id: 2, name: 'Product 2', price: '$20' },
      { id: 3, name: 'Product 3', price: '$30' },
    ];

    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <h2>Trending Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingProducts;
