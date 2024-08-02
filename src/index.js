/**
 * Import necessary dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Create a root element for the React app
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the App component in strict mode
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Report web vitals to measure performance
 * @param {Function} onPerfEntry - A callback function to handle performance entries
 */
reportWebVitals();