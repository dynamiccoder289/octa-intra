# Header Mega Menu UI Guide

## Overview
The Header component features a sophisticated mega menu dropdown system that appears on hover for desktop users.

## Desktop Mega Menu Structure

### Layout
```
┌─────────────────────────────────────────────────────┐
│  Left Sidebar (220px)   │  Right Content (1fr)      │
│  ┌──────────────────┐   │  ┌─────────┬─────────┐   │
│  │  GRADIENT BG     │   │  │ Item 1  │ Item 3  │   │
│  │  - Category tag  │   │  │ Title   │ Title   │   │
│  │  - Heading       │   │  │ Desc    │ Desc    │   │
│  │  - Blurb text    │   │  ├─────────┼─────────┤   │
│  └──────────────────┘   │  │ Item 2  │ Item 4  │   │
│                          │  │ Title   │ Title   │   │
│                          │  │ Desc    │ Desc    │   │
│                          │  └─────────┴─────────┘   │
└─────────────────────────────────────────────────────┘
         640px total width
```

### Components

#### 1. Left Sidebar (Gradient Panel)
- **Background**: Purple gradient (`bg-gradient-cta`)
- **Width**: 220px fixed
- **Content**:
  - Category tag (uppercase, accent color)
  - Main heading (bold, large)
  - Descriptive blurb (small text, white/80 opacity)
- **Purpose**: Provides context for the menu items

#### 2. Right Content Area
- **Layout**: 2-column grid
- **Gap**: Minimal spacing (gap-1)
- **Content**: Menu items with:
  - Title (semibold, dark)
  - Description (small, muted)
- **Hover Effect**: Light purple background (`bg-primary-soft`)

## Menu Items Configuration

### 1. Find a Job
**Heading**: For Job Seekers  
**Blurb**: Discover roles, get noticed by top employers and grow your career.

**Items** (4 items, 2x2 grid):
- Job Search → Browse thousands of live openings
- Upload Resume → Get matched with recruiters instantly
- Career Advice → Interview tips, CV templates & guides
- Job Alerts → Personalised roles, straight to your inbox

### 2. Find Talent
**Heading**: For Employers  
**Blurb**: Workforce solutions tailored to your hiring goals.

**Items** (4 items, 2x2 grid):
- Hire Employees → Permanent & contract placements
- Workforce Solutions → Flexible, scalable manpower models
- Staffing Services → Volume hiring & temp staffing
- RPO → End-to-end recruitment outsourcing

### 3. Industries
**Heading**: Industry Expertise  
**Blurb**: Deep specialisation across India's fastest-growing sectors.

**Items** (5 items, 2 cols + 1):
- IT & Technology → Engineers, product & data talent
- Healthcare → Clinical, nursing & allied health
- Finance & Banking → BFSI, fintech & advisory
- Manufacturing → Plant, shop-floor & engineering
- Retail & E-commerce → Store ops, supply chain & CX

### 4. About Us
**Heading**: About Hirelink  
**Blurb**: Two decades of trust, talent and transformation.

**Items** (5 items, 2 cols + 1):
- Our Story → Mission, vision & journey since 2005
- Leadership → Meet the people steering Hirelink
- Awards → Recognition from industry & clients
- CSR → Building inclusive opportunity at scale
- Press → News, media coverage & releases

## Interaction Behavior

### Desktop (lg: breakpoint and above)
1. **Hover State**: Mouse enters nav item
   - Chevron rotates 180°
   - Mega menu fades in (`animate-fade-up`)
   - Menu positioned below nav item, centered

2. **Active State**: Mouse over mega menu
   - Menu remains visible
   - Items show hover state (purple background)

3. **Exit State**: Mouse leaves nav area
   - All menus close
   - State resets

### Mobile (below lg: breakpoint)
1. **Hamburger Menu**: Click to open
2. **Accordion Style**: 
   - `<details>` elements for expandable sections
   - Chevron rotates when open
   - Items shown in vertical list
3. **Bottom Actions**:
   - Login button (outlined)
   - Find Jobs button (filled, accent color)

## Styling Details

### Colors
- **Gradient**: Purple (`#667eea`) to darker purple (`#764ba2`)
- **Accent**: Bright purple for hover states
- **Text**: White on gradient, dark on white background
- **Borders**: Subtle gray borders

### Animations
- **Fade Up**: 0.3s ease-out animation when menu appears
- **Chevron Rotate**: Smooth 180° rotation on hover/open
- **Color Transitions**: Smooth color changes on hover

### Shadows
- **Mega Menu**: `shadow-elegant` - Soft, elevated shadow
- **Header**: `shadow-card` - Appears when scrolled

### Z-Index
- **Header**: `z-50` (sticky positioning)
- **Mega Menu**: Inherits from header, appears above content

## Responsive Breakpoints

### Desktop Navigation (lg: 1024px+)
- Full mega menu dropdowns
- Horizontal nav items
- Utility bar visible

### Tablet/Mobile (< 1024px)
- Hamburger menu icon
- Full-screen mobile menu
- Accordion-style dropdowns
- Utility bar hidden

## Accessibility Features

✅ **Keyboard Navigation**: Links and buttons are keyboard accessible  
✅ **Focus States**: Visible focus indicators  
✅ **ARIA Labels**: Proper labeling for icons  
✅ **Semantic HTML**: `<nav>`, `<header>`, proper heading hierarchy  
✅ **Mobile-Friendly**: Touch-friendly tap targets

## Code Structure

```jsx
// State management
const [hovered, setHovered] = useState(null);  // Tracks which menu is open

// Hover handlers
onMouseEnter={() => setHovered(item.label)}    // Open menu
onMouseLeave={() => setHovered(null)}          // Close all menus

// Conditional rendering
{item.mega && hovered === item.label && (      // Show if has menu & is hovered
  <div className="absolute...">                 // Mega menu dropdown
    {/* Menu content */}
  </div>
)}
```

## Visual Examples

### Menu States

**Default State** (no hover):
```
Home | Find a Job ▼ | Find Talent ▼ | Industries ▼ | About Us ▼ | Contact | 🔍 Search
```

**Hover State** (Find a Job):
```
Home | Find a Job ▼ | Find Talent ▼ | Industries ▼ | About Us ▼ | Contact | 🔍 Search
     └─────────────────────────────┐
     │ FOR JOB SEEKERS             │
     │ Mega menu appears here...   │
     └─────────────────────────────┘
```

## Customization Tips

### Adding New Menu Items
1. Add to `navItems` array in Header.jsx
2. Include `mega` object with heading, blurb, and items
3. Grid automatically adjusts to 2 columns

### Changing Colors
- Gradient: Update `bg-gradient-cta` in tailwind.config.js
- Hover state: Modify `hover:bg-primary-soft` class
- Text colors: Adjust color variables in index.css

### Adjusting Width
- Default: `w-[640px]`
- For wider menus: Change to `w-[720px]` or larger
- Sidebar ratio: Change `grid-cols-[220px_1fr]`

### Animation Speed
- Fade-in: Modify `animate-fade-up` duration in tailwind.config.js
- Transitions: Change `transition-all` duration

## Performance Notes

- ✅ Menu renders only on hover (conditional rendering)
- ✅ No unnecessary re-renders (proper state management)
- ✅ Smooth CSS transitions (GPU accelerated)
- ✅ Lightweight (no external dependencies)
