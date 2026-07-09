# Contact Form Feature Toggle

This document describes the feature toggle implementation for the contact form functionality in the MyAMR application.

## Overview

The application now supports two scenarios for the contact page:

### Scenario 1: Frontend Only (Contact Form Disabled)
- Displays contact information (address, phone, email, business hours)
- Shows a simple email link instead of a contact form
- No backend API calls are made
- Ideal for static hosting or when backend is not available

### Scenario 2: Full Functionality (Contact Form Enabled)
- Displays contact information
- Shows a fully functional contact form with validation
- Submits form data to the backend API
- Requires backend server to be running

## Configuration

### Frontend Configuration

The feature toggle is controlled through the `APP_CONFIG` object in `/frontend/src/config.js`.

#### Method 1: Environment Variables (Recommended for Production)

Create a `.env` file in the frontend directory and set the following variables:

```env
# Enable or disable contact form
VITE_CONTACT_FORM_ENABLED=true

# Email address for the contact link (used when form is disabled)
VITE_CONTACT_EMAIL=info@myamr.co.uk

# API base URL (used when form is enabled)
VITE_API_BASE_URL=/api
```

#### Method 2: Direct Configuration

Edit `/frontend/src/config.js` and modify the `DEFAULT_CONFIG` object:

```javascript
const DEFAULT_CONFIG = {
  CONTACT_FORM_ENABLED: true,  // Set to false to disable contact form
  CONTACT_EMAIL: 'info@myamr.co.uk',
  API_BASE_URL: '/api',
  // ... other configuration
};
```

### Backend Configuration

The backend server also respects the feature toggle through environment variables:

```env
# Set to 'false' to disable the contact form API endpoint
CONTACT_FORM_ENABLED=true
```

Or start the server with the environment variable:

```bash
CONTACT_FORM_ENABLED=false npm start
```

## Usage Examples

### Scenario 1: Frontend Only (Static Hosting)

1. Set the environment variable:
   ```env
   VITE_CONTACT_FORM_ENABLED=false
   ```

2. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

3. Deploy the `dist` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

4. Users will see:
   - Contact information section
   - Email link button that opens their email client
   - Location map section

### Scenario 2: Full Application (Frontend + Backend)

1. Ensure contact form is enabled (default):
   ```env
   VITE_CONTACT_FORM_ENABLED=true
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

4. Users will see:
   - Contact information section
   - Full contact form with validation
   - Form submission to backend API
   - Location map section

## API Endpoints

### GET /api/config
Returns the current configuration:

```json
{
  "contactFormEnabled": true,
  "contactEmail": "info@myamr.co.uk"
}
```

### POST /api/contact
Handles contact form submissions (only available when `CONTACT_FORM_ENABLED=true`):

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "+1234567890",
  "message": "Hello, I have a question..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your message. We will contact you soon."
}
```

**Response (Disabled):**
```json
{
  "success": false,
  "message": "Contact form is currently disabled. Please use the email link instead."
}
```

## Testing

The test suite includes tests for both scenarios:

```bash
# Run all tests
cd frontend
npm test

# Run contact page tests specifically
npm test -- --testNamePattern="ContactPage"
```

## Customization

### Changing the Email Address

To change the email address used in the contact link:

1. Update the `CONTACT_EMAIL` in the configuration:
   ```javascript
   CONTACT_EMAIL: 'your-email@example.com'
   ```

2. Or set the environment variable:
   ```env
   VITE_CONTACT_EMAIL=your-email@example.com
   ```

### Customizing the Email Link Text

Edit the `renderEmailLink` function in `/frontend/src/pages/ContactPage.jsx`:

```javascript
const renderEmailLink = () => (
  <section className="contact-form-section">
    <h2 className="section-title">Your Custom Title</h2>
    <div className="email-link-container">
      <p className="email-link-intro">
        Your custom introduction text.
      </p>
      <a href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`} className="btn btn-primary btn-large">
        <FontAwesomeIcon icon={faEnvelope} /> Your Button Text
      </a>
    </div>
  </section>
);
```

## Deployment Scenarios

### Static Hosting (No Backend)
```bash
# Set contact form to disabled
VITE_CONTACT_FORM_ENABLED=false npm run build

# Deploy dist folder to static hosting
```

### Full Stack Deployment
```bash
# Backend (with contact form enabled)
CONTACT_FORM_ENABLED=true npm start

# Frontend (with contact form enabled)
VITE_CONTACT_FORM_ENABLED=true npm run build
```

### Mixed Mode (Frontend with Disabled Form, Backend Available)
```bash
# Backend (contact form disabled at API level)
CONTACT_FORM_ENABLED=false npm start

# Frontend (contact form disabled at UI level)
VITE_CONTACT_FORM_ENABLED=false npm run build
```

## Troubleshooting

### Contact form not appearing
- Check that `VITE_CONTACT_FORM_ENABLED` is set to `true`
- Ensure the frontend has been rebuilt after changing the configuration
- Verify that the backend server is running if using the form

### Email link not working
- Check that `VITE_CONTACT_EMAIL` is set to a valid email address
- Ensure the email client is properly configured on the user's device

### Form submission failing
- Verify that the backend server is running
- Check that `CONTACT_FORM_ENABLED` is not set to `false` on the backend
- Ensure the API base URL is correct

## Files Modified

- `/frontend/src/config.js` - Configuration file with feature toggle
- `/frontend/src/pages/ContactPage.jsx` - Contact page with conditional rendering
- `/frontend/src/styles/main.css` - Added styles for email link scenario
- `/backend/server.js` - Backend API with feature toggle support
- `/frontend/src/test/ContactPage.test.jsx` - Updated tests for both scenarios
- `/CONTACT_FORM_FEATURE_TOGGLE.md` - This documentation file
