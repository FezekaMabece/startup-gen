import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const currentDate = new Date().toDateString();
const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await axios.get(' https://nerd-biz-bot.vercel.app/products')
    .then((res) => {
      console.log(res);
      setProducts(res.data)
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
      <div className="row">
        {products.map(product => (
          <div style={{
            width:"400px",

          }} key={product.product_name} className="product-card m-1 col-xl-auto col-lg-auto col-md-auto col-sm-auto col-xs-auto">
            <img src={product.image_url} alt={product.name} />
            <p>{product.product_name}</p>
            <p>Price: {product.price}</p>
            <p>Date Sourced: {moment(product.date_scraped).utc().format('YYYY-MM-DD')}</p>
            <a href={product.source} target="_blank" rel="noopener noreferrer">Click Here To View Product</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;