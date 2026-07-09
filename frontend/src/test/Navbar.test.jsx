import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Check for main navigation links
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const modulesLink = screen.getByRole('link', { name: /Modules/i });
    const howItWorksLink = screen.getByRole('link', { name: /How MyAMR Works/i });
    const installationsLink = screen.getByRole('link', { name: /Installations/i });
    const partnersLink = screen.getByRole('link', { name: /Partners/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(modulesLink).toBeInTheDocument();
    expect(howItWorksLink).toBeInTheDocument();
    expect(installationsLink).toBeInTheDocument();
    expect(partnersLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('renders MyAMR logo', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Check for the logo link
    const logoLink = screen.getByRole('link', { name: /MyAMR/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('has correct link hrefs', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toHaveAttribute('href', '/');
    
    const modulesLink = screen.getByRole('link', { name: /Modules/i });
    expect(modulesLink).toHaveAttribute('href', '/modules');
    
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders mobile menu button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Check for mobile menu toggle button
    const mobileMenuButton = screen.getByRole('button');
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
