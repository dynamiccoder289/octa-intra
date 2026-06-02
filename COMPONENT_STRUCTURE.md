# Component Structure Guide

## Page Layout

The main application follows this structure:

```
App.jsx
├── Header
├── main
│   ├── Hero
│   ├── Stats
│   ├── Services
│   ├── Industries
│   ├── HowItWorks
│   ├── FeaturedJobs
│   ├── WhyChooseUs
│   ├── Partners
│   ├── Testimonials
│   ├── Blog
│   └── CtaBanner
├── Footer
└── FloatingActions
```

## Component Details

### Header
**File:** `src/components/site/Header.jsx`
- Sticky navigation bar
- Logo and company name
- Desktop mega menu with dropdowns
- Mobile hamburger menu
- Utility bar with contact and language selector

**Features:**
- Scroll-based shadow
- Hover state for menu items
- Responsive mobile menu
- Mega menu with categories

### Hero
**File:** `src/components/site/Hero.jsx`
- Full-width hero section
- Background image with overlay
- Large heading with glow effect
- Call-to-action link

**Styling:**
- Custom text shadow
- Gradient overlay
- Background image from assets

### Stats
**File:** `src/components/site/Stats.jsx`
- Animated counter component
- Four statistics displayed
- IntersectionObserver for scroll-triggered animation

**Features:**
- Counter animation (0 to target value)
- Triggers when element enters viewport
- Smooth easing animation

### Services
**File:** `src/components/site/Services.jsx`
- Grid of 6 service cards
- Icon, title, description, and link
- Hover effects with elevation

**Services Displayed:**
1. Permanent Staffing
2. Contract Staffing
3. Executive Search
4. Payroll Management
5. HR Outsourcing
6. Workforce Training

### Industries
**File:** `src/components/site/Industries.jsx`
- Grid of 8 industry icons
- Circular icon containers
- Hover state with color change

**Industries:**
1. IT & Technology
2. Manufacturing
3. BFSI
4. Healthcare
5. Retail
6. Logistics
7. Construction
8. FMCG

### HowItWorks
**File:** `src/components/site/HowItWorks.jsx`
- Tab switcher (Employers/Job Seekers)
- Three-step process display
- Numbered steps with icons

**Tabs:**
- For Employers (3 steps)
- For Job Seekers (3 steps)

### FeaturedJobs
**File:** `src/components/site/FeaturedJobs.jsx`
- Grid of 6 job cards
- Job title, company, location, type, salary
- Apply button
- Badge for job type (Full-time/Contract)

**Job Information:**
- Company name
- Location
- Salary range
- Job type badge

### WhyChooseUs
**File:** `src/components/site/WhyChooseUs.jsx`
- Two-column layout
- Image with overlay stat
- Four feature points with icons

**Features:**
1. Proven Track Record
2. Pan-India Network
3. Industry Expertise
4. End-to-End Support

**Visual:**
- Large image on left
- Floating stat card (98% retention)

### Partners
**File:** `src/components/site/Partners.jsx`
- Horizontal scrolling logo marquee
- Infinite loop animation
- 10 partner names

**Partners:**
Tata, Infosys, Reliance, HDFC, Wipro, Adani, Mahindra, Bajaj, ICICI, L&T

### Testimonials
**File:** `src/components/site/Testimonials.jsx`
- Carousel with 3 testimonials
- 5-star rating display
- Navigation dots and arrows
- Author initials avatar

**Features:**
- Previous/Next buttons
- Dot indicators
- Quote styling
- Auto-cycle capability (can be added)

### Blog
**File:** `src/components/site/Blog.jsx`
- Grid of 3 blog post cards
- Category badge
- Date, title, excerpt
- Read more link

**Posts:**
1. India's gig workforce (Hiring Trends)
2. New labour codes (Compliance)
3. Tier-2 cities (Talent)

### CtaBanner
**File:** `src/components/site/CtaBanner.jsx`
- Full-width gradient banner
- Large heading with accent text
- Two CTA buttons
- Dot pattern background

**CTAs:**
- Contact Us (primary)
- Post a Job (secondary)

### Footer
**File:** `src/components/site/Footer.jsx`
- Four-column layout
- Company info with social icons
- Quick links
- Services list
- Newsletter signup
- Contact information
- Copyright and legal links

**Social Icons:**
- LinkedIn
- Twitter
- Facebook
- Instagram

### FloatingActions
**File:** `src/components/site/FloatingActions.jsx`
- WhatsApp floating button (bottom-right)
- Back-to-top button (appears on scroll)
- Cookie consent banner (dismissible)

**Features:**
- Fixed positioning
- Scroll-triggered visibility
- localStorage for cookie consent
- Smooth scroll to top

## Styling Approach

### Tailwind Utilities
All components use Tailwind CSS utility classes:
- Responsive prefixes (sm:, md:, lg:)
- State variants (hover:, focus:, group-hover:)
- Dark mode support (dark:)

### Custom Classes
Defined in tailwind.config.js:
- `bg-primary`, `text-primary`, etc.
- `shadow-card`, `shadow-elegant`
- `animate-fade-up`, `animate-marquee`
- `bg-gradient-cta`

### Color System
HSL-based color variables:
- `--primary` - Main brand color (purple)
- `--accent` - Highlight color (bright purple)
- `--muted-foreground` - Secondary text
- `--card` - Card backgrounds
- `--border` - Border colors

## Responsive Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## Icons

Using lucide-react icons:
- Semantic icon names
- Consistent sizing
- Stroke-based design

Custom SVG icons for:
- Social media (LinkedIn, Twitter, Facebook, Instagram)

## State Management

Components use React hooks:
- `useState` - Local component state
- `useEffect` - Side effects (scroll, observers)
- `useRef` - DOM references and persistent values

## Accessibility

- Semantic HTML elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus states
- Alt text for images
- Form labels

## Performance Optimizations

1. **IntersectionObserver** - For stats animation
2. **Lazy Loading** - Images with loading="lazy"
3. **CSS Transforms** - Hardware-accelerated animations
4. **Minimal Re-renders** - Optimized state updates
