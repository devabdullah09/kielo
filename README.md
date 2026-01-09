# Kielo - Landing Page

A single-page landing page for Kielo, embodying calm confidence, restraint, and permanence.

## Tech Stack

- **Vite** - Fast build tool and development server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0 recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with brand presence
│   ├── WhatIsKielo.tsx       # Clear explanation of Kielo
│   ├── ReservationDetails.tsx # What's being offered/reserved
│   ├── CallToAction.tsx      # Stripe Checkout button/link
│   └── Contact.tsx           # Contact information
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Global styles with Tailwind directives
```

## Brand Colors

- **Dark Charcoal**: `#1a1a1a` - Primary background/text color
- **Off-White**: `#fafafa` - Secondary background
- **Deep Violet / Northern Heather**: `#6A6F9E` - Accent color (minimal usage)

## Stripe Integration

The Stripe Checkout integration is set up as a placeholder. To integrate:

1. Update the `stripeCheckoutUrl` in `src/components/CallToAction.tsx`
2. Or replace the `handleReserve` function with your Stripe Checkout logic
3. For full Stripe integration, you may need:
   - Stripe API keys (add to `.env` file)
   - Stripe SDK installation: `npm install @stripe/stripe-js`
   - Backend API endpoint for creating checkout sessions

## Features

- ✅ Fully responsive design
- ✅ Optimized for performance
- ✅ Clean typography and generous whitespace
- ✅ Brand-consistent color palette
- ✅ Ready for Stripe Checkout integration
- ✅ Mobile-first approach

## Deployment

The project is ready to deploy to any static hosting service:

- **Vercel**: Connect your Git repository
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions or manual deployment
- **Any static host**: Upload the `dist` folder contents after running `npm run build`

## Notes

- Replace hero image placeholders with actual images from your builds
- Process hero imagery with blue/purple tones as specified
- Update contact email in `src/components/Contact.tsx`
- Configure Stripe Checkout URL in `src/components/CallToAction.tsx`
