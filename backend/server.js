const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message, company, phone } = req.body;
  
  console.log('Contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Company: ${company}`);
  console.log(`Phone: ${phone}`);
  console.log(`Message: ${message}`);
  
  // Simulate email sending - log to console
  console.log('\n--- Email would be sent to: support-ave@geovap.cz ---\n');
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will contact you soon.' 
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
