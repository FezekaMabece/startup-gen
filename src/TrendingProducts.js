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
      <ul class="list-unstyled">
        <li class="d-flex">
          <div class="flex-shrink-0">
            <img src="#" alt="" width="300" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="mt-0">Media heading</h5>
            <p>
              This is some content from a media component. You can replace
              this with any content and adjust it as needed.
            </p>
          </div>
        </li>
        <li class="d-flex">
          <div class="flex-shrink-0">
            <img src="#" alt="" width="" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="mt-0">Media heading</h5>
            <p>
              This is some content from a media component. You can
              replace this with any content and adjust it as needed.
            </p>
          </div>
        </li>
        <li class="d-flex">
          <div class="flex-shrink-0">
            <img src="#" alt="" width="" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="mt-0">Media heading</h5>
            <p>
              This is some content from a media component. You can
              replace this with any content and adjust it as needed.
            </p>
          </div>
        </li>
      </ul>
      
    </div>
  );
};

export default TrendingProducts;
