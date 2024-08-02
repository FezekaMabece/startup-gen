/**
 * Import necessary dependencies
 */
import React, { useEffect, useState } from 'eact'; // Import React and its hooks
import axios from 'axios'; // Import axios for making API requests
import moment from 'oment'; // Import moment for date formatting

/**
 * Define the current date
 */
const currentDate = new Date().toDateString();

/**
 * Define the TrendingProducts component
 */
const TrendingProducts = () => {
  /**
   * Initialize state for products
   */
  const [products, setProducts] = useState([]); // Initialize products state with an empty array

  /**
   * Define a function to fetch products from API
   */
  const getProducts = async () => {
    try {
      // Make API request to fetch products
      const response = await axios.get('https://nerd-biz-bot.vercel.app/products');
      console.log(response);
      setProducts(response.data); // Set products state with API response
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Use effect to fetch products from API on mount
   */
  useEffect(() => {
    getProducts(); // Call getProducts function
  }, []); // Run effect only on mount

  /**
   * Define categories for products
   */
  const categories = ["Kitchen", "Fashion", "Electronics", "Grocery", "Wireless", "Applications"];

  /**
   * Render the TrendingProducts component
   */
  return (
    <div>
      <h2>Trending Products</h2>
      <p className='text-muted'>*can scroll horizontally</p>
      {
        categories.map((category) => {
          let categoryCount = 0; // Initialize category count
          return (
            <div className=''>
              <h4>{category}</h4>
              <ul class="list-group list-group-horizontal position-relative overflow-auto w-100">
                {
                  products.map((product) => {
                    if (product.category === category) {
                      categoryCount += 1; // Increment category count

                      return (
                        <li
                          style={{
                            width: "400px",
                          }}
                          key={product.product_name}
                          className="list-group-item product-card m-1 col-auto"
                        >
                          <img src={product.image_url} alt={product.name} />
                          <p>{product.product_name}</p>
                          <p>Date Sourced: {moment(product.date_scraped).utc().format('YYYY-MM-DD')}</p>
                          <a href={product.source} target="_blank" rel="noopener noreferrer">Click Here To View Product</a>
                        </li>
                      );
                    }
                  })
                }
              </ul>
              <p className='text-muted'>&uarr; {categoryCount} items &uarr;</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default TrendingProducts; // Export the TrendingProducts component