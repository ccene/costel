import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    // Check for Navbar elements
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    // Check for Footer elements
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the main content area', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Home page should be rendered by default
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    expect(container).toBeInTheDocument();
  });
});
