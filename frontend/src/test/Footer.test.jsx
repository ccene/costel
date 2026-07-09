import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders footer content', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays company information', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    // Check for company name in footer
    expect(screen.getByText('MyAMR')).toBeInTheDocument();
  });

  it('displays quick links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /Quick Links/i })).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    expect(screen.getByRole('heading', { name: /NC13 Industries Ltd./i })).toBeInTheDocument();
  });

  it('displays social media links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    // Check for social media icons
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('displays copyright information', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/NC13 Industries Ltd./i)).toBeInTheDocument();
  });
});
