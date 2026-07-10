/**
 * Application Configuration
 * This file contains feature toggles and configuration options for the MyAMR application
 * 
 * Configuration can be set in two ways:
 * 1. Environment variables (recommended for production)
 * 2. Directly in this file (for development)
 * 
 * Environment Variables:
 * - VITE_CONTACT_FORM_ENABLED: Set to 'false' to disable contact form (default: true)
 * - VITE_CONTACT_EMAIL: Email address for contact link (default: 'info@myamr.co.uk')
 * - VITE_API_BASE_URL: API base URL (default: '/api')
 */

// Type for business hours
interface BusinessHours {
  weekdays: string;
  weekends: string;
}

// Type for application configuration
interface AppConfig {
  CONTACT_FORM_ENABLED: boolean;
  CONTACT_EMAIL: string;
  API_BASE_URL: string;
  COMPANY_NAME: string;
  COMPANY_ADDRESS: string;
  COMPANY_PHONE: string;
  COMPANY_EMAIL: string;
  BUSINESS_HOURS: BusinessHours;
}

// Declare import.meta.env for Vite
interface ImportMetaEnv {
  VITE_CONTACT_FORM_ENABLED?: string;
  VITE_CONTACT_EMAIL?: string;
  VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

// Get configuration from environment variables (Vite uses VITE_ prefix)
const getConfigFromEnv = (): Partial<AppConfig> => {
  return {
    CONTACT_FORM_ENABLED: (import.meta as ImportMeta).env.VITE_CONTACT_FORM_ENABLED !== 'false',
    CONTACT_EMAIL: (import.meta as ImportMeta).env.VITE_CONTACT_EMAIL || 'info@myamr.co.uk',
    API_BASE_URL: (import.meta as ImportMeta).env.VITE_API_BASE_URL || '/api'
  };
};

// Default configuration (used when environment variables are not set)
const DEFAULT_CONFIG: AppConfig = {
  // Feature toggle for contact form
  // When true: Full contact form with backend integration
  // When false: Simple email link only (frontend-only mode)
  CONTACT_FORM_ENABLED: true,
  
  // Email address for contact link (used when CONTACT_FORM_ENABLED is false)
  CONTACT_EMAIL: 'info@myamr.co.uk',
  
  // API base URL (used when CONTACT_FORM_ENABLED is true)
  API_BASE_URL: '/api',
  
  // Company information
  COMPANY_NAME: 'NC13 Industries Ltd.',
  COMPANY_ADDRESS: 'United Kingdom',
  COMPANY_PHONE: '+44 (0) 1234 567890',
  COMPANY_EMAIL: 'info@myamr.co.uk',
  
  // Business hours
  BUSINESS_HOURS: {
    weekdays: 'Monday - Friday: 9:00 AM - 5:00 PM',
    weekends: 'Saturday - Sunday: Closed'
  }
};

// Merge environment configuration with defaults
const envConfig = getConfigFromEnv();

export const APP_CONFIG: AppConfig = {
  ...DEFAULT_CONFIG,
  ...envConfig
};

export default APP_CONFIG;
