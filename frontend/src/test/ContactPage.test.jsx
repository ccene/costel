import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';

describe('ContactPage Component', () => {
  it('renders contact information', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument();
  });

  it('renders contact form', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('renders location map section', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /Our Location/i })).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /Connect With Us/i })).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    
    expect(container).toBeInTheDocument();
  });
});
