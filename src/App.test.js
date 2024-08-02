/**
 * Import necessary dependencies from React Testing Library
 */
import { render, screen } from '@testing-library/react';

/**
 * Import the App component to be tested
 */
import App from './App';

/**
 * Test that the "Learn React" link is rendered in the App component
 */
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Find the "Learn React" link using the text content and case-insensitive matching
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the "Learn React" link is present in the document
  expect(linkElement).toBeInTheDocument();
});