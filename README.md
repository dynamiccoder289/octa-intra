# Hirelink - Job Board & Recruitment Website

A modern, responsive job board and recruitment website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern Stack**: React 18 + Vite 5 + Tailwind CSS 3
- ✅ **Fully Responsive**: Mobile-first design
- ✅ **Mega Menu Navigation**: Sophisticated dropdown menus
- ✅ **Animated Components**: Smooth transitions and effects
- ✅ **Dark Mode Ready**: CSS variables for easy theming
- ✅ **SEO Optimized**: Meta tags and semantic HTML
- ✅ **Performance**: Fast build times and optimized assets

## 📦 Tech Stack

- **React** 18.3.1 - UI library
- **Vite** 5.4.1 - Build tool and dev server
- **Tailwind CSS** 3.4.10 - Utility-first CSS framework
- **Lucide React** 1.17.0 - Icon library
- **PostCSS** 8.4.41 - CSS processing
- **Autoprefixer** 10.4.20 - CSS vendor prefixing

## 🎨 Components

### Site Components
- **Header** - Sticky navigation with mega menu dropdowns
- **Hero** - Full-width hero section with background image
- **Stats** - Animated statistics counter
- **Services** - 6 service cards with icons
- **Industries** - 8 industry sectors showcase
- **HowItWorks** - Tabbed process flow
- **FeaturedJobs** - Job listings with filter
- **WhyChooseUs** - Feature section with image
- **Partners** - Infinite scroll logo marquee
- **Testimonials** - Customer testimonial slider
- **Blog** - Latest blog posts grid
- **CtaBanner** - Call-to-action section
- **Footer** - Footer with links and newsletter
- **FloatingActions** - WhatsApp & back-to-top buttons

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ or 20.19+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build

```bash
# Create production build
npm run build
```

### Preview

```bash
# Preview production build
npm run preview
```

### Lint

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
web-site-jobs/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media
│   │   ├── hero-portrait.jpg
│   │   ├── why-choose.jpg
│   │   └── octo-intra-logo.png
│   ├── components/
│   │   ├── site/          # Page components (JSX)
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── FeaturedJobs.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── CtaBanner.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── FloatingActions.jsx
│   │   └── ui/            # Reusable UI components
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
│   └── App.css            # App-specific styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── jsconfig.json          # JavaScript configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#667eea)
- **Accent**: Bright purple (#ff00ff range)
- **Muted**: Gray shades
- **Background**: White / Dark

### Typography
- **Font**: System fonts (system-ui, Segoe UI, Roboto)
- **Headings**: Bold, tight tracking
- **Body**: 16-18px base size

### Spacing
- Uses Tailwind's 4px-based spacing scale
- Consistent padding: 20px mobile, 28px desktop

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔧 Configuration

### Path Aliases
The project uses `@/` alias for cleaner imports:

```javascript
// Instead of
import { Header } from '../../components/site/Header'

// Use
import { Header } from '@/components/site/Header'
```

### Environment Variables
Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=your_api_url
VITE_APP_NAME=Hirelink
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Hamburger menu for mobile
- Mega menu dropdowns for desktop
- Touch-friendly buttons and links
- Optimized images for different screen sizes

## ⚡ Performance

- **Build Time**: ~3.5s
- **Bundle Size**: 
  - CSS: 57.51 kB (10.16 kB gzipped)
  - JS: 194.32 kB (58.86 kB gzipped)
- **Lighthouse Score**: 90+ (target)

## 🎯 Key Features Explained

### Mega Menu Navigation
The header features sophisticated mega menu dropdowns that appear on hover:
- Two-column layout with gradient sidebar
- Category heading and description
- Grid of menu items with descriptions
- See `HEADER_MENU_GUIDE.md` for details

### Animated Stats Counter
Stats section uses IntersectionObserver to trigger counter animations when scrolled into view:
- Smooth number counting animation
- Triggers only once per page load
- No external animation libraries needed

### Infinite Logo Marquee
Partner logos scroll infinitely using CSS animations:
- Pure CSS implementation
- No JavaScript required
- Smooth, performant animation

## 📚 Documentation

- `CONVERSION_SUMMARY.md` - TSX to JSX conversion details
- `COMPONENT_STRUCTURE.md` - Component architecture guide
- `HEADER_MENU_GUIDE.md` - Navigation menu documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Credits

- **Icons**: [Lucide React](https://lucide.dev/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [React](https://react.dev/)

## 📞 Support

For support, email hello@hirelink.in or contact us through the website.

## 🔄 Version History

- **v1.0.0** (Current)
  - Initial release
  - Converted from TypeScript to JavaScript
  - Full feature set implemented
  - Production-ready build

---

Built with ❤️ by Octo-Intra Solutions Pvt Ltd
