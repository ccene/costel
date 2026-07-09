# Deploying MyAMR Website on GoDaddy

This guide provides step-by-step instructions for deploying the MyAMR Multi-Page Application (Node.js + Express backend + React frontend) on GoDaddy shared hosting or VPS.

## Prerequisites

- GoDaddy hosting account (Shared Hosting with cPanel or VPS)
- Domain name pointing to your GoDaddy hosting
- Node.js installed on your server (for VPS) or access to SSH (for cPanel)
- Git installed on your local machine
- Basic familiarity with command line

---

## Option 1: Deploying to GoDaddy cPanel Shared Hosting

**Note:** GoDaddy's standard shared hosting does NOT support Node.js natively. You have two approaches:

### Approach A: Use GoDaddy's Node.js App (Recommended for cPanel)

GoDaddy cPanel now supports Node.js applications through the "Setup Node.js App" feature.

#### Step 1: Prepare Your Application

1. **Build your frontend for production:**
   ```bash
   cd frontend
   npm run build
   ```
   This creates a `dist/` folder with static files.

2. **Modify backend to serve static files:**
   Update `backend/server.js` to serve the built frontend:
   ```javascript
   // Add this near the top, after other app.use() middleware
   app.use(express.static('dist'));
   
   // Add this before your API routes
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
   });
   ```

3. **Install production dependencies only:**
   ```bash
   cd backend
   npm install --production
   ```

#### Step 2: Upload Files via cPanel

1. **Compress your project:**
   ```bash
   # From the root of your project
   tar -czvf myamr-deploy.tar.gz backend/ frontend/dist/ package.json
   ```

2. **Upload via cPanel File Manager:**
   - Log in to your GoDaddy cPanel
   - Go to **File Manager** > **public_html**
   - Upload the `myamr-deploy.tar.gz` file
   - Extract it in the File Manager

3. **Move files to correct location:**
   - Move all backend files to `public_html/`
   - Ensure `package.json` is in `public_html/`
   - The `dist/` folder should be in `public_html/`

#### Step 3: Set Up Node.js App in cPanel

1. In cPanel, find **"Setup Node.js App"** (under Software section)
2. Click **Create Application**
3. Fill in the details:
   - **Application root:** `/home/yourusername/public_html`
   - **Application URL:** `https://yourdomain.com`
   - **Application startup file:** `server.js`
   - **Environment variables:** (leave empty or add as needed)
4. Click **Create**
5. Wait for the application to install (may take a few minutes)

#### Step 4: Start the Application

1. In the Node.js App manager, click **Run JS Script**
2. Select your application and click **Run**
3. Your site should now be live at `https://yourdomain.com`

#### Step 5: Set Up Process Manager (Optional)

To ensure your app stays running:
1. In cPanel, go to **"Cron Jobs"**
2. Add a cron job to check and restart your app periodically:
   ```bash
   */5 * * * * /usr/bin/node /home/yourusername/public_html/server.js >> /home/yourusername/node.log 2>&1
   ```

---

### Approach B: Use Static Hosting + External Backend

If Node.js isn't available, host the frontend statically and use an external backend.

#### Step 1: Build Frontend Only

```bash
cd frontend
npm run build
```

#### Step 2: Update API Endpoints

In your frontend code, update all API calls to point to your external backend:
```javascript
// Change from:
axios.post('/api/contact', data)
// To:
axios.post('https://your-backend-api.com/api/contact', data)
```

#### Step 3: Upload to GoDaddy

1. Upload the entire `dist/` folder contents to `public_html/` via cPanel File Manager
2. Your site will be live at `https://yourdomain.com`

#### Step 4: Deploy Backend Elsewhere

Deploy your Node.js backend to:
- Heroku (free tier)
- Render.com (free tier)
- Railway.app (free tier)
- AWS Lambda
- DigitalOcean Droplet

---

## Option 2: Deploying to GoDaddy VPS (Full Control)

For GoDaddy VPS or dedicated server, you have full root access.

### Step 1: Connect to Your VPS

```bash
ssh username@your-server-ip
```

### Step 2: Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (v20 LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install npm (comes with Node.js)
node -v  # Verify installation (should show v20.x.x)
npm -v   # Verify npm

# Install PM2 (process manager)
sudo npm install -g pm2

# Install build tools
sudo apt install -y build-essential

# Install Nginx (web server)
sudo apt install -y nginx
```

### Step 3: Clone Your Repository

```bash
# Install git
sudo apt install -y git

# Clone your repository
cd /var/www
sudo git clone https://github.com/ccene/costel.git myamr
cd myamr

# Set proper permissions
sudo chown -R $USER:$USER /var/www/myamr
```

### Step 4: Set Up Backend

```bash
cd /var/www/myamr/backend
npm install --production
```

### Step 5: Set Up Frontend

```bash
cd /var/www/myamr/frontend
npm install
npm run build
```

### Step 6: Configure Backend to Serve Frontend

Update `backend/server.js`:
```javascript
const path = require('path');
// ... existing code ...

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});
```

### Step 7: Configure Environment Variables

Create a `.env` file in the backend folder:
```bash
PORT=5000
NODE_ENV=production
```

### Step 8: Set Up PM2 Process Manager

```bash
# From /var/www/myamr/backend
pm2 start server.js --name myamr-backend
pm2 save
pm2 startup
```

This ensures your app restarts on server reboot.

### Step 9: Configure Nginx as Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/myamr
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        proxy_pass http://localhost:5000;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/myamr /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

### Step 10: Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

Your site will now be available at `https://yourdomain.com`

### Step 11: Configure Firewall

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

---

## Option 3: Deploying to GoDaddy Managed WordPress Hosting

**Not Recommended** - GoDaddy Managed WordPress hosting is designed for PHP/WordPress and does not support Node.js applications. Use Option 1 or 2 instead.

---

## Post-Deployment Checklist

1. **Test all pages** - Navigate through all 7 pages to ensure routing works
2. **Test contact form** - Submit a test message to verify the API works
3. **Check mobile responsiveness** - Test on various screen sizes
4. **Verify SSL** - Ensure your site loads with HTTPS (green padlock)
5. **Set up monitoring** - Use PM2 monitoring or similar
6. **Configure backups** - Set up regular backups of your application

---

## Troubleshooting

### Common Issues

**1. 500 Internal Server Error**
- Check Node.js app logs: `pm2 logs myamr-backend`
- Verify all dependencies are installed: `npm install --production`
- Check file permissions: `chmod -R 755 /var/www/myamr`

**2. 404 Not Found on Page Refresh**
- Ensure your backend is configured to serve `index.html` for all routes
- Verify the `dist/` folder path is correct in your server.js

**3. Mixed Content Warnings**
- Ensure all URLs use HTTPS
- Update any hardcoded HTTP URLs in your frontend code

**4. Contact Form Not Working**
- Check the `/api/contact` endpoint is accessible
- Verify CORS settings if frontend and backend are on different domains
- Check server logs for errors

**5. GoDaddy cPanel Node.js App Not Starting**
- Verify the startup file is `server.js`
- Check that `package.json` is in the root directory
- Ensure all required modules are in `node_modules/`

### Log Locations

- **PM2 logs:** `pm2 logs` or `pm2 logs myamr-backend`
- **Nginx error logs:** `/var/log/nginx/error.log`
- **Node.js app logs:** `/var/www/myamr/backend/logs/` (if configured)

---

## Updating Your Deployment

### For cPanel Deployment:

1. Make changes locally and test
2. Rebuild frontend: `cd frontend && npm run build`
3. Compress and upload via cPanel File Manager
4. Restart Node.js app in cPanel

### For VPS Deployment:

```bash
cd /var/www/myamr

# Pull latest changes
git pull origin main

# Update dependencies
cd backend && npm install --production
cd ../frontend && npm install && npm run build

# Restart PM2
pm2 restart myamr-backend
```

---

## Performance Optimization

1. **Enable Gzip compression** in Nginx:
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

2. **Enable browser caching** for static assets

3. **Use a CDN** for static assets (Cloudflare, AWS CloudFront)

4. **Optimize images** before uploading

5. **Minify CSS/JS** (Vite does this automatically in production builds)

---

## Security Best Practices

1. **Keep Node.js updated** to the latest LTS version
2. **Use HTTPS everywhere** (Let's Encrypt provides free certificates)
3. **Set strong passwords** for all accounts
4. **Regularly update dependencies:**
   ```bash
   npm audit fix
   npm update
   ```
5. **Use environment variables** for sensitive data (never hardcode secrets)
6. **Set up a firewall** (UFW on Linux)
7. **Disable root SSH login** and use key-based authentication
8. **Regular backups** of your application and database

---

## Additional Resources

- [GoDaddy cPanel Documentation](https://www.godaddy.com/help/cpanel-hosting-12345)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

---

## Support

For deployment issues specific to MyAMR:
- Email: info@myamr.co.uk
- Website: https://www.myamr.co.uk

For GoDaddy hosting support:
- GoDaddy Support: https://www.godaddy.com/help/contact
- Phone: Check your GoDaddy account for local support numbers
