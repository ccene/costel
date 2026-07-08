# Quick Start Guide

Get the AVE System MPA running in just a few minutes!

## 🚀 Fast Setup

### 1. Install Dependencies

Open two terminal windows and run:

**Terminal 1 (Backend):**
```bash
cd /workspace/ave-system-mpa/backend
npm install
npm start
```

**Terminal 2 (Frontend):**
```bash
cd /workspace/ave-system-mpa/frontend
npm install
npm start
```

### 2. Access the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

## 📁 Project Structure

```
ave-system-mpa/
├── backend/
│   ├── server.js          # Express server
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js         # Routes
│   │   ├── index.js       # Entry point
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── ModulesPage.js
│   │   │   ├── HowItWorksPage.js
│   │   │   ├── InstallationsPage.js
│   │   │   ├── PartnersPage.js
│   │   │   ├── AboutPage.js
│   │   │   └── ContactPage.js
│   │   └── styles/
│   │       └── main.css
│   └── package.json
└── README.md
```

## 🎯 Available Pages

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
1. Create file in `frontend/src/pages/`
2. Add route in `frontend/src/App.js`
3. Add link in `frontend/src/components/Navbar.js`

## 📦 Deployment Options

### Option A: Local Development (Recommended for Testing)
```bash
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm start
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
2. Host `frontend/build` folder on Netlify/Vercel
3. Deploy backend to Railway/Render/Heroku
4. Update API endpoint in `ContactPage.js`

## 🎨 Design Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, modern UI
- ✅ Smooth animations and transitions
- ✅ Font Awesome icons
- ✅ Professional color scheme
- ✅ Consistent styling across all pages

## 📞 Support

For issues or questions:
- Check the README files in each folder
- Review the code comments
- The contact form logs to console for development

## 🔍 Troubleshooting

**Frontend won't start?**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
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
- Frontend proxy is configured in `frontend/package.json`

**Contact form not working?**
- Check backend console for errors
- Verify backend server is running
- Test API endpoint: `curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Hello"}'`
