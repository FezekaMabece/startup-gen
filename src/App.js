/**
 * Import React library
 */
import React from 'react';

/**
 * Import App component styles
 */
import './App.css';

/**
 * Import TrendingProducts component
 */
import TrendingProducts from './TrendingProducts';

/**
 * App component
 */
function App() {
  /**
   * Render the App component
   */
  return (
    <div className="App">
      /**
       * Header section
       */
      <header className="App-header">
        <h1>StartupGen</h1>
      </header>
      /**
       * Main content section
       */
      <main>
        /**
         * Render the TrendingProducts component
         */
        <TrendingProducts />
      </main>
    </div>
  );
}

/**
 * Export the App component as the default export
 */
export default App;