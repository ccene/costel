# AVE System - Multi-Page Application (MPA)

A comprehensive Multi-Page Application based on the AVE System website, built with Node.js + Express backend and React frontend.

## Features

- **7 Main Pages**: Home, Modules, How AVE Works, Installations, Partners, About, Contact
- **Responsive Design**: Mobile-friendly layout
- **Contact Form**: Functional form with validation and simulated email sending
- **Modern UI**: Clean, professional design with smooth animations
- **Easy to Maintain**: Well-structured codebase with clear separation of concerns

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: React 18 + React Router v6
- **Styling**: Custom CSS with CSS variables
- **HTTP Client**: Axios for API calls
- **Icons**: Font Awesome 6

## Project Structure

```
ave-system-mpa/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── node_modules/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js
│   │   ├── App.js
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

## Getting Started

### Prerequisites

- Node.js (v16 or later)
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
   npm start
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

## API Endpoints

- **POST /api/contact** - Handle contact form submissions
  - Request body: `{ name, email, company, phone, message }`
  - Response: `{ success: true, message: "Thank you for your message..." }`
  - Note: Currently simulates email sending by logging to console

## Customization

### Changing the Contact Form Email

To change where contact form submissions are sent:

1. Open `backend/server.js`
2. Modify the `/api/contact` route to use your preferred email service
3. Install additional dependencies (e.g., `nodemailer` for SMTP)

### Adding New Pages

1. Create a new file in `frontend/src/pages/` (e.g., `NewPage.js`)
2. Import and add the route in `frontend/src/App.js`
3. Add navigation link in `frontend/src/components/Navbar.js`

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
2. Copy the `build` folder contents to your web server
3. Deploy the backend to your server
4. Configure your web server to proxy API requests to the backend

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is created for demonstration purposes. The original AVE System is developed by GEOVAP, spol. s r.o.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- React: [React.js](https://reactjs.org/)
- Express: [Express.js](https://expressjs.com/)

## Support

For questions or issues, please refer to the original AVE System website: [https://www.ave-system.com](https://www.ave-system.com)
