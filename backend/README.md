# AVE System Backend

Node.js + Express backend server for the AVE System Multi-Page Application.

## Features

- REST API endpoints for contact form submissions
- Static file serving for React frontend in production
- CORS enabled for development
- Simple and lightweight design

## Installation

```bash
npm install
```

## Usage

### Development
```bash
npm run dev
```
Uses nodemon for automatic restarts during development.

### Production
```bash
npm start
```

## API Endpoints

### POST /api/contact
Handle contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Inc.",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your product."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We will contact you soon."
}
```

**Note:** Currently simulates email sending by logging to console. To implement real email sending:

1. Install nodemailer:
```bash
npm install nodemailer
```

2. Update the `/api/contact` route in `server.js`:
```javascript
const nodemailer = require('nodemailer');

// Configure transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

// In the route handler
app.post('/api/contact', async (req, res) => {
  const { name, email, message, company, phone } = req.body;
  
  try {
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'support-ave@geovap.cz',
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nMessage: ${message}`
    });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message.' 
    });
  }
});
```

## Environment Variables

- `PORT` - Server port (default: 5000)

## Configuration

Edit `server.js` to modify:
- CORS settings
- API endpoints
- Static file serving paths
- Error handling

## Security

For production use:
- Add rate limiting
- Add input validation
- Use HTTPS
- Implement proper authentication if needed
- Set appropriate CORS origins

## Deployment

### Heroku
1. Create a new Heroku app
2. Add Node.js buildpack
3. Set environment variables
4. Deploy:
```bash
git push heroku main
```

### Railway
1. Create a new project
2. Connect your repository
3. Deploy

### Traditional Server
1. Build the frontend and place it in the `public` folder
2. Run the server:
```bash
node server.js
```
3. Use a process manager like PM2 for production:
```bash
npm install -g pm2
pm2 start server.js --name ave-backend
pm2 save
pm2 startup
```
