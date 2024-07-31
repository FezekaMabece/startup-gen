import React, { useEffect, useState } from 'react';

const TrendingTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Mock data for trending topics
    const mockTopics = [
      { id: 1, name: '#TrendingTopic1' },
      { id: 2, name: '#TrendingTopic2' },
      { id: 3, name: '#TrendingTopic3' },
    ];

    setTopics(mockTopics);
  }, []);

  return (
    <div>
      <h2>Trending Topics</h2>
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

export default TrendingTopics;
