import { render, screen } from '@testing-library/react';
import App from './App';


// test spec
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Unit Testing!/i);
  expect(linkElement).toBeInTheDocument();
});
