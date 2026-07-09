# MyAMR Quick Start Guide

Get the MyAMR Multi-Page Application running in just a few minutes!

**By NC13 Industries Ltd.** - [https://www.myamr.co.uk](https://www.myamr.co.uk)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

## Quick Installation

### Option 1: Using Git

```bash
# Clone the repository
git clone <repository-url>
cd myamr-mpa

# Install all dependencies
npm install

# Install frontend dependencies
cd frontend && npm install
cd ..

# Install backend dependencies
cd backend && npm install
cd ..
```

### Option 2: Manual Download

1. Download the project files
2. Extract to a folder named `myamr-mpa`
3. Open terminal in the project directory
4. Run the installation commands above

## Running the Application

### Development Mode (Recommended for Development)

Open **two terminal windows**:

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
```
The backend server will start on `http://localhost:5000`

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:3000` and automatically open in your browser.

### Production Mode

**Step 1: Build the Frontend**
```bash
cd frontend
npm run build
```
This creates optimized production files in the `dist` folder.

**Step 2: Start the Backend Server**
```bash
cd backend
npm start
```
The backend will serve the built frontend on `http://localhost:5000`

## Project Structure

```
myamr-mpa/
├── backend/              # Backend server
│   ├── server.js        # Express server with API
│   └── package.json
├── frontend/             # Frontend application
│   ├── src/             # Source files
│   │   ├── App.jsx      # Main app with routes
│   │   ├── index.jsx    # Entry point
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── styles/      # CSS styles
│   │   └── test/        # Unit tests
│   ├── index.html       # HTML entry file
│   ├── vite.config.js   # Vite configuration
│   └── package.json
├── README.md            # Full documentation
└── .github/             # GitHub workflows
    └── workflows/
        └── ci-cd.yml    # CI/CD pipeline
```

## Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with hero, energy types, and advantages |
| `/modules` | Modules | Overview of all 6 MyAMR modules |
| `/how-it-works` | How MyAMR Works | 6-step workflow and system architecture |
| `/installations` | Installations | Global installations and statistics |
| `/partners` | Partners | Partner network and benefits |
| `/about` | About | Company information and history |
| `/contact` | Contact | Contact form and information |

## Common Commands

### Frontend Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |

### Backend Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start with nodemon (auto-restart) |

## Testing

Run all unit tests:
```bash
cd frontend
npm test
```

Run tests in watch mode (auto-reload on changes):
```bash
cd frontend
npm run test:watch
```

Generate test coverage report:
```bash
cd frontend
npm run test:coverage
```

## Customization

### Change the Brand Name

To change "MyAMR" to your own brand:

1. Update `frontend/src/components/Navbar.jsx` - Change the logo text
2. Update `frontend/src/components/Footer.jsx` - Change the brand name
3. Update all page files in `frontend/src/pages/` - Replace "MyAMR" with your brand
4. Update `frontend/index.html` - Change title and meta tags

### Change Contact Information

Update contact details in:
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/ContactPage.jsx`
- `backend/server.js` - Update the email in the contact form handler

### Change Colors

Edit `frontend/src/styles/main.css`:
```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  /* Change these to your brand colors */
}
```

## Troubleshooting

### Backend not starting

```bash
# Make sure you're in the backend directory
cd backend
# Check if dependencies are installed
npm install
# Start the server
npm start
```

### Frontend not starting

```bash
# Make sure you're in the frontend directory
cd frontend
# Check if dependencies are installed
npm install
# Start the development server
npm run dev
```

### API calls failing

Ensure the backend server is running on port 5000. The frontend is configured to proxy API requests to `http://localhost:5000`.

If you're running the backend on a different port, update the proxy in `frontend/vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:YOUR_PORT',
    changeOrigin: true,
  },
},
```

### Tests failing

```bash
# Install test dependencies
cd frontend
npm install
# Run tests again
npm test
```

## Deployment

### Local Deployment

Just run the production mode as described above. The backend will serve the frontend on port 5000.

### Heroku Deployment

1. Create a Heroku account
2. Install Heroku CLI
3. Create a new Heroku app
4. Add Node.js buildpack
5. Deploy:
```bash
git push heroku main
```

### Separate Frontend/Backend Deployment

**Frontend (Vercel/Netlify):**
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Update API endpoints in `ContactPage.jsx` to point to your backend URL

**Backend (Railway/Render/Heroku):**
1. Deploy the backend server
2. Note the backend URL
3. Update frontend to use this URL for API calls

## Next Steps

1. ✅ Install and run the application
2. ✅ Explore all 7 pages
3. ✅ Test the contact form
4. ✅ Run the unit tests
5. Customize the content and branding
6. Deploy to your preferred hosting
7. Set up CI/CD pipeline (already configured!)

## Need Help?

- Check the full documentation in `README.md`
- Visit our website: [https://www.myamr.co.uk](https://www.myamr.co.uk)
- Contact: info@myamr.co.uk
