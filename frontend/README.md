# AVE System Frontend

React frontend for the AVE System Multi-Page Application, built with Vite.

## Features

- 7 main pages with comprehensive content
- Responsive design for all screen sizes
- Contact form with validation
- Modern, clean UI with smooth animations
- Easy to customize and extend
- **Vite**: Lightning-fast development and builds
- **Vitest**: Comprehensive unit testing

## Tech Stack

- **Build Tool**: Vite 5
- **Framework**: React 18
- **Router**: React Router v6
- **Testing**: Vitest + @testing-library/react
- **HTTP Client**: Axios
- **Styling**: Custom CSS with variables
- **Icons**: Font Awesome 6 (via CDN)

## Installation

```bash
npm install
```

## Usage

### Development
```bash
npm run dev
```
Runs the app in development mode with Vite. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Features:
- Hot Module Replacement (HMR)
- Instant server start
- Fast rebuilds

### Production Build
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

## Testing

### Run Tests Once
```bash
npm test
```
Runs all unit tests with Vitest.

### Run Tests in Watch Mode
```bash
npm run test:watch
```
Runs tests and watches for file changes.

### Run Tests with Coverage
```bash
npm run test:coverage
```
Runs tests and generates coverage report.

### Test Files

The project includes unit tests for:

- `src/test/App.test.jsx` - Main app component and routing
- `src/test/Navbar.test.jsx` - Navigation component
- `src/test/Footer.test.jsx` - Footer component
- `src/test/HomePage.test.jsx` - Home page component
- `src/test/ContactPage.test.jsx` - Contact page component

### Test Configuration

- **Test Runner**: Vitest
- **Environment**: JSDOM
- **Assertions**: @testing-library/jest-dom
- **React Testing**: @testing-library/react
- **Setup File**: `src/test/setup.js`
- **Configuration**: `vitest.config.js`

## Project Structure

```
src/
├──── index.jsx              # Entry point
├──── App.jsx               # Main app component with routes
├──── components/
│   ├──── Navbar.jsx        # Navigation component
│   └──── Footer.jsx        # Footer component
├──── pages/
│   ├──── HomePage.jsx      # Home page
│   ├──── ModulesPage.jsx   # AVE Modules page
│   ├──── HowItWorksPage.jsx # How AVE Works page
│   ├──── InstallationsPage.jsx # Installations page
│   ├──── PartnersPage.jsx   # Partners page
│   ├──── AboutPage.jsx     # About page
│   └──── ContactPage.jsx   # Contact page with form
├──── styles/
│   └──── main.css         # All styles
└──── test/
    ├──── setup.js         # Test setup
    ├──── App.test.jsx
    ├──── Navbar.test.jsx
    ├──── Footer.test.jsx
    ├──── HomePage.test.jsx
    └──── ContactPage.test.jsx
```

## Customization

### Adding a New Page

1. Create a new file in `src/pages/`:
```jsx
// src/pages/NewPage.jsx
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

2. Add the route in `App.jsx`:
```jsx
import NewPage from './pages/NewPage';

// In the Routes component
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Navbar.jsx`:
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

The contact form is in `src/pages/ContactPage.jsx`. It uses axios to submit to the backend API.

To change the API endpoint:
```jsx
// Change this line
const response = await axios.post('/api/contact', formData);
// To
const response = await axios.post('https://your-api.com/contact', formData);
```

## Vite Configuration

The Vite configuration is in `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
```

### Development Server

- **Port**: 3000 (configurable)
- **Proxy**: API requests to `/api` are proxied to `http://localhost:5000`
- **HMR**: Hot Module Replacement enabled

### Production Build

- **Output**: `dist/` folder
- **Optimized**: Code splitting, minification, and compression
- **Compatible**: Works with any static hosting

## Components

### Navbar
- Responsive navigation with mobile menu
- Active link highlighting
- Smooth transitions
- Toggle button for mobile

### Footer
- Company information
- Quick links
- Contact details
- Social media links
- Copyright information

## Pages Content

### HomePage
- Hero section with call-to-action
- Energy types display (Gas, Power, Heat, Water, IoT, Vehicles)
- Advantages sections (Main and Other)
- Target audiences (Distribution Companies, Energy Traders, Power Engineers, Energy Consumers)
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

### Production Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0
- axios: ^1.6.2

### Development Dependencies

- vite: ^5.0.10
- @vitejs/plugin-react: ^4.2.1
- vitest: ^4.1.10
- @vitest/coverage-v8: ^4.1.10
- jsdom: ^29.1.1
- @testing-library/react: ^16.3.2
- @testing-library/jest-dom: ^6.9.1

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

This creates a `dist` folder with optimized production files.

### Serve with Backend
The backend server is configured to serve the built frontend files. Just ensure the backend is running and it will serve the React app.

### Static Hosting
You can also host the `dist` folder contents on any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

**Note:** If hosting frontend separately, update the API endpoint in `ContactPage.jsx` to point to your backend URL.

### Environment Variables

Create a `.env` file in the frontend directory for environment-specific configuration:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Then update your API calls to use:
```javascript
const API_BASE = import.meta.env.VITE_API_BASE_URL;
```

## CI/CD Integration

The project includes a GitHub Actions workflow (`.github/workflows/ci-cd.yml`) that:

1. Runs on every push and pull request
2. Installs dependencies
3. Runs unit tests
4. Builds the frontend
5. Checks code quality
6. Deploys to GitHub Pages (on main branch)

## Migration from Create React App

This project was migrated from Create React App (react-scripts) to Vite. Key changes:

- **Build Tool**: react-scripts → Vite
- **File Extensions**: .js → .jsx (for JSX support)
- **Entry Point**: public/index.html → index.html (root)
- **Scripts**: start/build/test → dev/build/test
- **Configuration**: No eject needed, simple vite.config.js

### Benefits of Vite Migration

- ⚡ **Faster Development**: Instant server start
- ⚡ **Faster Builds**: Production builds in seconds
- ⚡ **Better DX**: Improved error messages
- ⚡ **Modern**: ES modules natively
- ⚡ **Flexible**: Easy to configure and extend
