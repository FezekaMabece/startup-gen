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


    const categories = ["Kitchen", "Fashion", "Electronics", "Grocery", "Wireless", "Applications"]

    
    

  return (
    <div>
      <h2>Trending Products</h2>
      <p className='text-muted'>*can scroll horizontally</p>
        {
          categories.map((category) => {
            let categorycount = 0;
            return (
              <div className=''>
                <h4>{category}</h4>
                <ul class="list-group list-group-horizontal position-relative overflow-auto w-100">
                
                  
                    {products.map(product => {
                      console.log(product.category == category)
                      if (product.category == category) {
                        categorycount += 1;

                        return (
                        <li  style={{
                        width:"400px",
            
                      }} key={product.product_name} className="list-group-item product-card m-1 col-auto">
                        <img src={product.image_url} alt={product.name} />
                        <p>{product.product_name}</p>
                        <p>Date Sourced: {moment(product.date_scraped).utc().format('YYYY-MM-DD')}</p>
                        <a href={product.source} target="_blank" rel="noopener noreferrer">Click Here To View Product</a>
                      </li>
                      )
                    } 
                    } 
                    )}

                </ul>
                <p className='text-muted'>&uarr; {categorycount} items &uarr;</p>

                  
              </div>
            )
          })
        }
      </div>
  );
};

export default TrendingProducts;