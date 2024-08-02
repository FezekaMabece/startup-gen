/**
 * Define a function to report web vitals
 * @param {Function} onPerfEntry - A callback function to handle performance entries
 */
const reportWebVitals = (onPerfEntry) => {
  /**
   * Check if onPerfEntry is a function
   */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    /**
     * Import web-vitals module dynamically
     */
    import('web-vitals').then(({ 
      getCLS, // Cumulative Layout Shift
      getFID, // First Input Delay
      getFCP, // First Contentful Paint
      getLCP, // Largest Contentful Paint
      getTTFB // Time to First Byte
    }) => {
      /**
       * Call web-vitals functions and pass onPerfEntry as a callback
       */
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Export the reportWebVitals function
 */
export default reportWebVitals;