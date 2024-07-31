import React from 'react';
import './App.css';
import TrendingProducts from './TrendingProducts';
import TrendingTopics from './TrendingTopics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Startup-gen</h1>
      </header>
      <main>
        <TrendingProducts />
        <TrendingTopics />
      </main>
    </div>
  );
}

export default App;
