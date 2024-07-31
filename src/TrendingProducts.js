import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data for trending products
    const mockProducts = [
      { id: 1, name: 'Product 1', image: '' , price: '$10', source : '', date: '' },
      { id: 1, name: 'Product 2', image: '' , price: '$20', source : '', date: '' },
      { id: 1, name: 'Product 3', image: '' , price: '$30', source : '', date: '' },

    ];

    setProducts(mockProducts);
  }, []);

  const getProducts = async () => {
    await axios.get(' https://nerd-biz-bot.vercel.app/products')
    .then((res) => {
      console.log(res);
      // setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h2>Trending Products</h2>
      <ul class="list-unstyled">
        {
          products.map((product) => {
            return (
              <li class="d-flex">
          <div class="flex-shrink-0">
            <img src={product.image} alt="" width="300" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 class="mt-0">{product.name}</h5>
            <p>
              This is some content from a media component. You can replace
              this with any content and adjust it as needed.
            </p>
            <p className='blockquote-footer'>{product.price}</p>
            <a href={product.source}>source</a>
          </div>
        </li>
            )
          })
        }
        
       
      </ul>
      
    </div>
  );
};

export default TrendingProducts;
