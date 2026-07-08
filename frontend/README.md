# AVE System Frontend

React frontend for the AVE System Multi-Page Application.

## Features

- 7 main pages with comprehensive content
- Responsive design for all screen sizes
- Contact form with validation
- Modern, clean UI with smooth animations
- Easy to customize and extend

## Installation

```bash
npm install
```

## Usage

### Development
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build
```bash
npm run build
```
Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── index.js              # Entry point
├── App.js               # Main app component with routes
├── components/
│   ├── Navbar.js        # Navigation component
│   └── Footer.js        # Footer component
├── pages/
│   ├── HomePage.js      # Home page
│   ├── ModulesPage.js   # AVE Modules page
│   ├── HowItWorksPage.js # How AVE Works page
│   ├── InstallationsPage.js # Installations page
│   ├── PartnersPage.js   # Partners page
│   ├── AboutPage.js     # About page
│   └── ContactPage.js   # Contact page with form
└── styles/
    └── main.css         # All styles
```

## Customization

### Adding a New Page

1. Create a new file in `src/pages/`:
```jsx
// src/pages/NewPage.js
import React from 'react';

function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
      <p>Your content here</p>
    </div>
  );
}

export default NewPage;
```

2. Add the route in `App.js`:
```jsx
import NewPage from './pages/NewPage';

// In the Routes component
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Navbar.js`:
```jsx
<li>
  <Link to="/new-page">New Page</Link>
</li>
```

### Changing Styles

All styles are in `src/styles/main.css`. The CSS uses variables for easy theming:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --light-color: #ecf0f1;
  --dark-color: #2c3e50;
  --text-color: #333;
  --text-light: #7f8c8d;
  --white: #ffffff;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  --border-radius: 4px;
  --transition: all 0.3s ease;
}
```

### Modifying the Contact Form

The contact form is in `src/pages/ContactPage.js`. It uses axios to submit to the backend API.

To change the API endpoint:
```jsx
// Change this line
const response = await axios.post('/api/contact', formData);
// To
const response = await axios.post('https://your-api.com/contact', formData);
```

## Components

### Navbar
- Responsive navigation with mobile menu
- Active link highlighting
- Smooth transitions

### Footer
- Company information
- Quick links
- Contact details
- Social media links

## Pages Content

### HomePage
- Hero section with call-to-action
- Energy types display
- Advantages sections
- Target audiences
- Award information

### ModulesPage
- All 6 AVE modules with descriptions
- Features for each module
- Integration benefits

### HowItWorksPage
- 6-step workflow
- System architecture diagram
- Key features and benefits

### InstallationsPage
- Countries with installations
- Companies using AVE by country
- Statistics and testimonials

### PartnersPage
- Global partners list
- Partner benefits
- Partnership inquiry

### AboutPage
- Company overview
- History timeline
- Team values
- Company information
- Awards

### ContactPage
- Contact information
- Contact form with validation
- Location map placeholder
- Social media links

## Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0
- axios: ^1.6.2
- react-scripts: 5.0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Serve with Backend
The backend server is configured to serve the built frontend files. Just ensure the backend is running and it will serve the React app.

### Static Hosting
You can also host the `build` folder contents on any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

**Note:** If hosting frontend separately, update the API endpoint in `ContactPage.js` to point to your backend URL.
