import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Mock data for trending topics
    const mockTopics = [
      { id: 1, name: '#TrendingTopic1', summary: '', source: '', date:'' },
      { id: 1, name: '#TrendingTopic2', summary: '', source: '', date:'' },
      { id: 1, name: '#TrendingTopic3', summary: '', source: '', date:'' },
    ];

    setTopics(mockTopics);
  }, []);

  const getTopics = async () => {
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
    getTopics()
  }, []);

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
            )
          })
        }
      </ul>
      
    </div>
  );
};

export default TrendingTopics;
