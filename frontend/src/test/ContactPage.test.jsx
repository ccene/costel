import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import { APP_CONFIG } from '../config';

// Mock axios for form submission tests
vi.mock('axios', () => ({
  default: {
    post: vi.fn()
  }
}));

describe('ContactPage Component', () => {
  
  describe('When contact form is enabled (default)', () => {
    beforeEach(() => {
      // Ensure contact form is enabled for these tests
      APP_CONFIG.CONTACT_FORM_ENABLED = true;
    });

    it('renders contact information', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(screen.getByRole('heading', { name: /Contact Information/i })).toBeInTheDocument();
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

    it('renders without crashing', () => {
      const { container } = render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(container).toBeInTheDocument();
    });

    it('shows validation errors when form is submitted empty', async () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      const submitButton = screen.getByRole('button', { name: /Send Message/i });
      fireEvent.click(submitButton);
      
      expect(await screen.findByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  describe('When contact form is disabled', () => {
    beforeEach(() => {
      // Temporarily disable contact form for these tests
      APP_CONFIG.CONTACT_FORM_ENABLED = false;
    });

    afterEach(() => {
      // Reset to default after tests
      APP_CONFIG.CONTACT_FORM_ENABLED = true;
    });

    it('renders email link instead of contact form', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      // Should not render form elements
      expect(screen.queryByLabelText(/Name/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/Message/i)).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /Send Message/i })).not.toBeInTheDocument();
      
      // Should render email link
      expect(screen.getByRole('heading', { name: /Get In Touch/i })).toBeInTheDocument();
      expect(screen.getByText(/Email Us at/)).toBeInTheDocument();
    });

    it('renders email link with correct href', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      const emailLink = screen.getByText(/Email Us at/);
      expect(emailLink).toHaveAttribute('href', `mailto:${APP_CONFIG.CONTACT_EMAIL}`);
    });

    it('renders helpful text for email link scenario', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/We'd love to hear from you/)).toBeInTheDocument();
      expect(screen.getByText(/Click the button above to open your email client/)).toBeInTheDocument();
    });

    it('still renders contact information section', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(screen.getByRole('heading', { name: /Contact Information/i })).toBeInTheDocument();
      // Use more specific selectors to avoid conflicts
      expect(screen.getByText('Address')).toBeInTheDocument();
      expect(screen.getByText('Phone')).toBeInTheDocument();
      expect(screen.getByText('Business Hours')).toBeInTheDocument();
    });

    it('still renders location map section', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(screen.getByRole('heading', { name: /Our Location/i })).toBeInTheDocument();
    });
  });

  describe('Configuration integration', () => {
    it('uses configuration values for company information', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(screen.getByText(APP_CONFIG.COMPANY_NAME)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.COMPANY_ADDRESS)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.COMPANY_PHONE)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.COMPANY_EMAIL)).toBeInTheDocument();
    });

    it('displays business hours from configuration', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      
      expect(screen.getByText(APP_CONFIG.BUSINESS_HOURS.weekdays)).toBeInTheDocument();
      expect(screen.getByText(APP_CONFIG.BUSINESS_HOURS.weekends)).toBeInTheDocument();
    });
  });
});
