import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

describe('HomePage Component', () => {
  it('renders the hero section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /MyAMR/i })).toBeInTheDocument();
  });

  it('renders energy types icons', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    
    // Check for energy type names
    expect(screen.getByText('Gas')).toBeInTheDocument();
    expect(screen.getByText('Power')).toBeInTheDocument();
    expect(screen.getByText('Heat')).toBeInTheDocument();
  });

  it('renders main advantages section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /Main Advantages/i })).toBeInTheDocument();
  });

  it('renders target audiences section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /The MyAMR System Is Designed For/i })).toBeInTheDocument();
  });

  it('renders award section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    
    // Check for award content
    expect(screen.getByText(/Microsoft Industry Awards 2008/i)).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    
    expect(container).toBeInTheDocument();
  });
});
