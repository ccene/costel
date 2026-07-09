# AVE System - Multi-Page Application (MPA)

A comprehensive Multi-Page Application based on the AVE System website, built with Node.js + Express backend and React frontend with Vite.

## Features

- **7 Main Pages**: Home, Modules, How AVE Works, Installations, Partners, About, Contact
- **Responsive Design**: Mobile-friendly layout
- **Contact Form**: Functional form with validation and simulated email sending
- **Modern UI**: Clean, professional design with smooth animations
- **Easy to Maintain**: Well-structured codebase with clear separation of concerns
- **Fast Builds**: Vite for lightning-fast development and production builds
- **Unit Tests**: Comprehensive test coverage with Vitest
- **CI/CD Pipeline**: GitHub Actions for automated testing and deployment

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: React 18 + React Router v6 + Vite
- **Testing**: Vitest + @testing-library/react
- **Styling**: Custom CSS with CSS variables
- **HTTP Client**: Axios for API calls
- **Icons**: Font Awesome 6
- **CI/CD**: GitHub Actions

## Project Structure

```
ave-system-mpa/
├──── backend/
│   ├──── package.json
│   ├──── server.js          # Express server with contact API
│   └──── README.md
├──── frontend/
│   ├──── index.html         # Entry HTML file
│   ├──── package.json
│   ├──── vite.config.js     # Vite configuration
│   ├──── vitest.config.js   # Vitest configuration
│   ├──── src/
│   │   ├──── index.jsx      # React entry point
│   │   ├──── App.jsx        # Main app with routes
│   │   ├──── components/
│   │   │   ├──── Navbar.jsx # Responsive navigation
│   │   │   └──── Footer.jsx # Site footer
│   │   ├──── pages/
│   │   │   ├──── HomePage.jsx        # Main landing page
│   │   │   ├──── ModulesPage.jsx     # AVE modules overview
│   │   │   ├──── HowItWorksPage.jsx  # Workflow explanation
│   │   │   ├──── InstallationsPage.jsx # Global installations
│   │   │   ├──── PartnersPage.jsx    # Partners & distributors
│   │   │   ├──── AboutPage.jsx       # Company information
│   │   │   └──── ContactPage.jsx     # Contact form & info
│   │   ├──── styles/
│   │   │   └──── main.css   # All styles
│   │   └──── test/
│   │       ├──── setup.js   # Test setup
│   │       ├──── App.test.jsx
│   │       ├──── Navbar.test.jsx
│   │       ├──── Footer.test.jsx
│   │       ├──── HomePage.test.jsx
│   │       └──── ContactPage.test.jsx
│   └──── README.md
├──── .github/
│   └──── workflows/
│       └──── ci-cd.yml      # CI/CD pipeline configuration
├──── README.md             # Main documentation
├──── QUICKSTART.md         # Quick start guide
├──── PROJECT_SUMMARY.md    # Project summary
└──── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository** (if not already cloned):
   ```bash
   git clone <repository-url>
   cd ave-system-mpa
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend development server** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```
   The app will open in your browser at `http://localhost:3000`

#### Production Mode

1. **Build the frontend**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```
   The server will serve the built React app on `http://localhost:5000`

## Available Scripts

### Frontend (Vite)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm test` | Run unit tests once |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

### Backend

| Script | Description |
|--------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |

## API Endpoints

- **POST /api/contact** - Handle contact form submissions
  - Request body: `{ name, email, company, phone, message }`
  - Response: `{ success: true, message: "Thank you for your message..." }`
  - Note: Currently simulates email sending by logging to console

## Testing

### Running Tests

```bash
# Run all tests once
cd frontend
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

The project includes unit tests for:
- App component (routing)
- Navbar component
- Footer component
- HomePage component
- ContactPage component

### CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Test Job**: Runs on every push and pull request
  - Installs dependencies
  - Runs unit tests
  - Builds frontend for verification
  - Checks backend health

- **Build and Deploy Job**: Runs on merge to main
  - Builds production frontend
  - Uploads build artifacts
  - Deploys to GitHub Pages (optional)

- **Code Quality Job**: Checks for vulnerabilities and linting

## Customization

### Changing the Contact Form Email

To change where contact form submissions are sent:

1. Open `backend/server.js`
2. Modify the `/api/contact` route to use your preferred email service
3. Install additional dependencies (e.g., `nodemailer` for SMTP)

### Adding New Pages

1. Create a new file in `frontend/src/pages/` (e.g., `NewPage.jsx`)
2. Import and add the route in `frontend/src/App.jsx`
3. Add navigation link in `frontend/src/components/Navbar.jsx`

### Styling

All styles are in `frontend/src/styles/main.css`. The CSS uses variables for easy theming:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  /* ... */
}
```

## Pages Overview

### Home Page
- Hero section with call-to-action buttons
- Energy types (Gas, Power, Heat, Water, IoT, Vehicles)
- Main advantages and other advantages
- Target audiences (Distribution Companies, Energy Traders, Power Engineers, Energy Consumers)
- Award section

### Modules Page
- Overview of all 6 AVE modules
- Detailed description and features for each module
- Integration benefits

### How AVE Works Page
- 6-step workflow explanation
- System architecture diagram
- Key features and benefits

### Installations Page
- List of countries with AVE installations
- Companies using AVE system by country
- Statistics and testimonials

### Partners Page
- Global network of partners and distributors
- Partner benefits
- Partnership inquiry section

### About Page
- Company overview and vision
- Company history timeline
- Team values
- Company information and awards

### Contact Page
- Contact information (address, phone, email, hours)
- Contact form with validation
- Location map placeholder
- Social media links

## Deployment

### Option 1: Deploy to Heroku

1. Create a Heroku account and install CLI
2. Create a new Heroku app
3. Add Node.js buildpack
4. Set environment variables if needed
5. Push to Heroku:
   ```bash
   git push heroku main
   ```

### Option 2: Deploy to Vercel/Netlify (Frontend) + Railway/Render (Backend)

1. Deploy frontend to Vercel or Netlify
2. Deploy backend to Railway or Render
3. Update API endpoints in frontend to point to your backend URL

### Option 3: Traditional Hosting

1. Build the frontend: `npm run build`
2. Copy the `dist` folder contents to your web server
3. Deploy the backend to your server
4. Configure your web server to proxy API requests to the backend

### Option 4: GitHub Pages (Frontend Only)

1. Build the frontend: `npm run build`
2. The CI/CD pipeline can automatically deploy to GitHub Pages
3. Note: Backend API calls will need to be proxied or use a separate backend service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Project Benefits

### Vite Migration Benefits

- **Faster Development**: Instant server start and hot module replacement
- **Faster Builds**: Production builds complete in seconds
- **Modern Tooling**: Uses ES modules natively
- **Better DX**: Improved error messages and debugging

### Testing Benefits

- **Fast Tests**: Vitest runs tests in parallel
- **JSDOM Environment**: Real browser-like testing
- **Coverage Reports**: Built-in coverage with @vitest/coverage-v8
- **Watch Mode**: Automatic test re-runs on file changes

### CI/CD Benefits

- **Automated Testing**: All tests run on every push and PR
- **Build Verification**: Ensures production builds work
- **Code Quality**: Vulnerability scanning and linting
- **Deployment Ready**: Artifacts prepared for deployment

## License

This project is created for demonstration purposes. The original AVE System is developed by GEOVAP, spol. s r.o.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- React: [React.js](https://reactjs.org/)
- Express: [Express.js](https://expressjs.com/)
- Vite: [Vite.js](https://vitejs.dev/)
- Vitest: [Vitest](https://vitest.dev/)
- Testing Library: [Testing Library](https://testing-library.com/)

## Support

For questions or issues, please refer to the original AVE System website: [https://www.ave-system.com](https://www.ave-system.com)
