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
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
