/**
 * Import necessary dependencies
 */
import React, { useEffect, useState } from 'react'; // Import React and its hooks
import axios from 'axios'; // Import axios for making API requests

/**
 * Define the TrendingTopics component
 */
const TrendingTopics = () => {
  /**
   * Initialize state for trending topics
   */
  const [topics, setTopics] = useState([]); // Initialize topics state with an empty array

  /**
   * Use effect to set mock data for trending topics on mount
   */
  useEffect(() => {
    // Mock data for trending topics
    const mockTopics = [
      { id: 1, name: '#TrendingTopic1', summary: '', source: '', date: '' },
      { id: 1, name: '#TrendingTopic2', summary: '', source: '', date: '' },
      { id: 1, name: '#TrendingTopic3', summary: '', source: '', date: '' },
    ];

    setTopics(mockTopics); // Set topics state with mock data
  }, []); // Run effect only on mount

  /**
   * Define a function to fetch trending topics from API
   */
  const getTopics = async () => {
    try {
      // Make API request to fetch trending topics
      const response = await axios.get('https://nerd-biz-bot.vercel.app/products');
      console.log(response);
      // setProducts(response.data) // Uncomment to set products state
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Use effect to fetch trending topics from API on mount
   */
  useEffect(() => {
    getTopics(); // Call getTopics function
  }, []); // Run effect only on mount

  /**
   * Render the TrendingTopics component
   */
  return (
    <div>
      <h2>Trending Topics</h2>
      <ul class="list-unstyled">
        {
          topics.map((topic) => {
            return (
              <li class="d-flex">
                <div class="flex-shrink-0">
                  <img src="#" alt="" width="300" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h5 class="mt-0">{topic.name}</h5>
                  <p>
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default TrendingTopics; // Export the TrendingTopics component