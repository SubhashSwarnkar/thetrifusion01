# TheTriFusion

A comprehensive software house platform built with ReactJS and TailwindCSS, featuring portfolio showcase, service pages, pricing calculators, AI-powered project estimation, and template marketplace with Razorpay integration.

## Features

### Pages
- **Home** - Landing page with services, portfolio, and quick access to tools
- **Services** - Overview and individual service pages (Web Dev, Mobile Dev, UI/UX, Graphic Design, Digital Marketing, Branding, RPA)
- **Portfolio** - Showcase of completed projects with filtering
- **Pricing** - Pricing plans and integrated calculator
- **About** - Company story, values, and team information
- **Contact** - Contact form and information
- **Templates** - Template marketplace with industry-based selection

### Advanced Tools
- **Price Calculator** - Get instant price estimates based on industry, project type, and timeline
- **AI Project Estimator** - AI-powered project estimation using OpenAI
- **Visual Page Planner** - Interactive tool to plan website structure
- **Timeline Calculator** - Estimate project delivery timelines
- **Template Selector** - Industry-based template browsing

### E-commerce
- **Template Marketplace** - Browse and purchase website templates
- **Razorpay Integration** - Secure payment processing
- **Template Details** - Detailed template information with demo links

## Tech Stack

- [**ReactJS**](https://github.com/facebook/create-react-app) - Frontend framework
- [**TailwindCSS**](https://tailwindcss.com/) - Utility-first CSS framework
- [**React Router**](https://reactrouter.com/) - Routing
- [**PostCSS**](https://postcss.org/) - CSS processing

## Libraries

- [**OpenAI**](https://openai.com/) - AI-powered project estimation
- [**Razorpay**](https://razorpay.com/) - Payment gateway integration
- [**EmailJS**](https://www.emailjs.com/) - Send email from JavaScript
- [**HeadlessUI**](https://github.com/tailwindlabs/headlessui) - UI components
- [**React Awesome Reveal**](https://www.react-reveal.com/) - Scroll animations
- [**React Tabs**](https://www.npmjs.com/package/react-tabs) - Tab component
- [**React Toastify**](https://www.npmjs.com/package/react-toastify) - Toast notifications
- [**Swiper**](https://swiperjs.com/) - Carousel/Slider
- [**Chart.js**](https://www.chartjs.org/) - Data visualization
- [**Framer Motion**](https://www.framer.com/motion/) - Advanced animations
- [**DnD Kit**](https://dndkit.com/) - Drag and drop functionality

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/thetrifusion01.git
cd thetrifusion01
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Edit `.env` and add your API keys:
- `REACT_APP_OPENAI_API_KEY` - Your OpenAI API key
- `REACT_APP_RAZORPAY_KEY_ID` - Your Razorpay key ID
- `REACT_APP_RAZORPAY_KEY_SECRET` - Your Razorpay key secret (backend only)
- `REACT_APP_API_URL` - Your backend API URL (for payment verification)

4. Start development server
```bash
npm start
```

5. Build for production
```bash
npm run build
```

## Project Structure

```
src/
  components/        # Reusable components
    payment/        # Payment components
  data/             # Data files (services, templates, pricing)
  elements/         # Basic UI elements
  pages/            # Page components
  parts/            # Section components
  utils/            # Utility functions
  assets/           # Images, CSS, etc.
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Environment Variables

See `.env.example` for required environment variables.

## Deployment

The project is configured for deployment on Vercel, Netlify, or any static hosting service.

## License

Private - All rights reserved

## Contact

- Email: TheTrifusion@gmail.com
- Location: Bhilwara, Rajasthan, India
- Instagram: [@thetrifusion](https://www.instagram.com/thetrifusion/)
- LinkedIn: [TheTriFusion](https://www.linkedin.com/company/the-trifusion/)
