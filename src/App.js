import React from 'react';
import './App.css';
import TrendingProducts from './TrendingProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Startup-gen</h1>
      </header>
      <main>
        <TrendingProducts />
      </main>
    </div>
  );
}

export default App;
