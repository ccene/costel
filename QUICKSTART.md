# Quick Start Guide

Get the AVE System MPA running in just a few minutes!

## 🚀 Fast Setup

### 1. Install Dependencies

Open two terminal windows and run:

**Terminal 1 (Backend):**
```bash
cd backend
npm install
npm start
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm install
npm run dev
```

### 2. Access the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

## 📁 Project Structure

```
ave-system-mpa/
├──── backend/
│   ├──── server.js          # Express server
│   └──── package.json
├──── frontend/
│   ├──── index.html         # Entry HTML
│   ├──── package.json
│   ├──── vite.config.js     # Vite config
│   ├──── vitest.config.js   # Test config
│   └──── src/
│       ├──── index.jsx      # Entry point
│       ├──── App.jsx        # Routes
│       ├──── components/
│       │   ├──── Navbar.jsx
│       │   └──── Footer.jsx
│       ├──── pages/
│       │   ├──── HomePage.jsx
│       │   ├──── ModulesPage.jsx
│       │   ├──── HowItWorksPage.jsx
│       │   ├──── InstallationsPage.jsx
│       │   ├──── PartnersPage.jsx
│       │   ├──── AboutPage.jsx
│       │   └──── ContactPage.jsx
│       ├──── styles/
│       │   └──── main.css
│       └──── test/
│           ├──── setup.js
│           ├──── App.test.jsx
│           ├──── Navbar.test.jsx
│           ├──── Footer.test.jsx
│           ├──── HomePage.test.jsx
│           └──── ContactPage.test.jsx
├──── .github/
│   └──── workflows/
│       └──── ci-cd.yml      # CI/CD pipeline
├──── README.md
├──── QUICKSTART.md
└──── PROJECT_SUMMARY.md
```

## 🌐 Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with overview |
| `/modules` | Modules | All 6 AVE system modules |
| `/how-it-works` | How AVE Works | Workflow and system explanation |
| `/installations` | Installations | Global installations and companies |
| `/partners` | Partners | Global network of partners |
| `/about` | About | Company information and history |
| `/contact` | Contact | Contact form and information |

## 🔧 Common Tasks

### Test Contact Form
1. Go to [http://localhost:3000/contact](http://localhost:3000/contact)
2. Fill out the form
3. Check the backend console - you'll see the submission logged

### Change Colors
Edit `frontend/src/styles/main.css`:
```css
:root {
  --primary-color: #2c3e50;    /* Change this */
  --secondary-color: #3498db;  /* Change this */
  --accent-color: #e74c3c;    /* Change this */
}
```

### Add New Page
1. Create file in `frontend/src/pages/` (e.g., `NewPage.jsx`)
2. Add route in `frontend/src/App.jsx`
3. Add link in `frontend/src/components/Navbar.jsx`

### Run Tests
```bash
cd frontend
npm test
```

Or in watch mode:
```bash
npm run test:watch
```

With coverage:
```bash
npm run test:coverage
```

## 📊 Deployment Options

### Option A: Local Development (Recommended for Testing)
```bash
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm run dev
```

### Option B: Production Build
```bash
# Build frontend
cd frontend && npm run build

# Start backend (serves frontend too)
cd backend && npm start
```

### Option C: Separate Hosting
1. Build frontend: `cd frontend && npm run build`
2. Host `frontend/dist` folder on Netlify/Vercel
3. Deploy backend to Railway/Render/Heroku
4. Update API endpoint in `ContactPage.jsx`

### Option D: GitHub Pages (Frontend Only)
1. Push to main branch
2. CI/CD pipeline will build and deploy to GitHub Pages
3. Backend API calls will need to be proxied or use a separate backend service

## 🎨 Design Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, modern UI
- ✅ Smooth animations and transitions
- ✅ Font Awesome icons
- ✅ Professional color scheme
- ✅ Consistent styling across all pages
- ✅ Vite for fast builds and HMR
- ✅ Unit tests with Vitest
- ✅ CI/CD pipeline with GitHub Actions

## 📋 Available Scripts

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |

### Backend

| Command | Description |
|---------|-------------|
| `npm start` | Start production server (port 5000) |
| `npm run dev` | Start with nodemon (auto-restart) |

## 🐛 Troubleshooting

**Frontend won't start?**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Backend won't start?**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm start
```

**CORS issues?**
- Ensure backend is running on port 5000
- Frontend proxy is configured in `frontend/vite.config.js`

**Contact form not working?**
- Check backend console for errors
- Verify backend server is running
- Test API endpoint: `curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Hello"}'`

**Tests failing?**
- Ensure all dependencies are installed: `npm install`
- Run tests with verbose output: `npm run test:watch`
- Check test files in `frontend/src/test/`

## 📚 Documentation

- **Main Documentation**: [README.md](./README.md)
- **Frontend Documentation**: [frontend/README.md](./frontend/README.md)
- **Project Summary**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
- **CI/CD Pipeline**: [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml)

## 🚀 Next Steps

1. ✅ Clone and install dependencies
2. ✅ Start backend and frontend servers
3. ✅ Access the app at http://localhost:3000
4. ✅ Explore all 7 pages
5. ✅ Test the contact form
6. ✅ Run the unit tests
7. ✅ Customize as needed
8. ✅ Deploy to production
