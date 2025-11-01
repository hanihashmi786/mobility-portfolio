# Arabic Portfolio Website - Mobile Oil Change Service

A modern, fully responsive single-page portfolio website for a mobile oil change service business, built with React, TypeScript, and SCSS modules.

## Features

- **Fully Bilingual**: Arabic (RTL) and English (LTR) with dynamic language switching
- **Modern Design**: Pixel-perfect implementation matching provided designs
- **Smooth Animations**: Framer Motion for elegant page transitions and scroll animations
- **Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Performance**: Lazy loading, code splitting, and optimized assets
- **SEO Optimized**: Meta tags, semantic HTML, and proper accessibility
- **Clean Architecture**: Atomic design structure with reusable components

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS Modules** - Styling with CSS modules
- **Framer Motion** - Animations
- **React Scroll** - Smooth scrolling navigation

## Project Structure

\`\`\`
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── ProgressCircle/
│   │   ├── ScrollToTop/
│   │   └── Loading/
│   └── layout/          # Layout components
│       ├── Header/
│       ├── Footer/
│       └── Section/
├── sections/            # Page sections
│   ├── Hero/
│   ├── About/
│   ├── Costs/
│   ├── Pricing/
│   ├── Advantages/
│   ├── Marketing/
│   ├── Investment/
│   └── Contact/
├── context/             # React context
│   └── LanguageContext.tsx
├── hooks/               # Custom hooks
│   ├── useScrollSpy.ts
│   └── useIntersectionObserver.ts
├── styles/              # Global styles
│   ├── variables.scss
│   ├── mixins.scss
│   └── global.scss
├── types/               # TypeScript types
│   └── index.ts
├── utils/               # Utilities
│   └── translations.ts
├── App.tsx
└── main.tsx
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

4. Preview production build:
\`\`\`bash
npm run preview
\`\`\`

## Key Features Explained

### Bilingual Support

The app supports Arabic (RTL) and English (LTR) with a single click. The language context manages the current language state and updates the document direction and content dynamically.

### Responsive Design

Using mobile-first approach with SCSS mixins for consistent breakpoints:
- Small: 640px
- Medium: 768px
- Large: 1024px
- XL: 1280px
- 2XL: 1536px

### Animations

All animations are powered by Framer Motion with:
- Scroll-triggered animations
- Hover effects
- Smooth page transitions
- Optimized performance

### Performance Optimizations

- Lazy loading of sections
- Image optimization with proper formats
- Code splitting
- CSS modules for scoped styles
- Minimal bundle size

## Customization

### Colors

Edit `src/styles/variables.scss` to customize the color palette:

\`\`\`scss
$color-primary: #5BA8C8;
$color-secondary: #F0F8FB;
// ... more colors
\`\`\`

### Typography

Font families and sizes are defined in `src/styles/variables.scss`:

\`\`\`scss
$font-family-primary: 'Cairo', sans-serif;
$font-size-base: 1rem;
// ... more typography settings
\`\`\`

### Content

Update translations in `src/utils/translations.ts` to modify text content for both languages.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or support, contact: info@mobiliti.sa
