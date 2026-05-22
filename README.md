# 🎮 ZYVORN - Free Fire Esports Clan Website

**एक आधुनिक और interactive Free Fire esports clan website**

## ✨ Features

- 🎯 Hero section with call-to-action
- 📝 Player registration form with validation
- 🔐 Login/Signup functionality
- 📱 Fully responsive mobile design
- 🌐 WhatsApp integration
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Vite

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Formspree** - Form submissions

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Zyvorn329/Zyvorn.git
cd Zyvorn

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Configuration

### Formspree Setup

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update in `GamingWebsite.jsx`:
   ```javascript
   "https://formspree.io/f/YOUR_FORM_ID"
   ```

### WhatsApp Number

Update the WhatsApp number in:
- `GamingWebsite.jsx` (line में WhatsApp links)
- वर्तमान: +91 8879292668

## 🚀 Deployment

### Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Click Deploy

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub account
3. Select repository
4. Click Deploy

## 📋 File Structure

```
Zyvorn/
├── GamingWebsite.jsx       # Main component
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🔧 Known Issues & Fixes

✅ **Fixed Issues:**
- Mobile menu now works perfectly
- Form validation added
- WhatsApp numbers consistent
- State management improved
- Responsive design optimized

## 📞 Support

**WhatsApp:** +91 8879292668

## 📄 License

Copyright © 2026 ZYVORN Esports Clan. All rights reserved.
