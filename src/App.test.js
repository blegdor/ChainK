// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainK title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainK/i);
    expect(titleElement).toBeInTheDocument();
});
