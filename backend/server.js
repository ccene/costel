const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Feature toggle configuration from environment variables
// Set CONTACT_FORM_ENABLED=false to disable the contact form API endpoint
const CONTACT_FORM_ENABLED = process.env.CONTACT_FORM_ENABLED !== 'false';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API Routes
app.post('/api/contact', (req, res) => {
  // Check if contact form is enabled
  if (!CONTACT_FORM_ENABLED) {
    return res.status(403).json({
      success: false,
      message: 'Contact form is currently disabled. Please use the email link instead.'
    });
  }

  const { name, email, message, company, phone } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required fields.'
    });
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }
  
  console.log('Contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Company: ${company || 'Not provided'}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log(`Message: ${message}`);
  
  // Simulate email sending - log to console
  console.log('\n--- Email would be sent to: info@myamr.co.uk ---\n');
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will contact you soon.' 
  });
});

// API endpoint to get configuration (for frontend to check if form is enabled)
app.get('/api/config', (req, res) => {
  res.json({
    contactFormEnabled: CONTACT_FORM_ENABLED,
    contactEmail: 'info@myamr.co.uk'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`MyAMR Server running on port ${PORT}`);
  console.log(`Contact form API endpoint: ${CONTACT_FORM_ENABLED ? 'ENABLED' : 'DISABLED'}`);
});
