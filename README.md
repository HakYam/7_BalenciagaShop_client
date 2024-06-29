# Balenciaga Shop Client

This repository contains the client-side code for the Balenciaga Shop web application. It is built using React and Vite, with various components and pages to provide a seamless shopping experience. The application includes features such as product browsing and shopping cart management.

## Backend
The backend is built with Strapi. You can find the repository and admin dashboard here:
- [Backend Repository](https://github.com/HakYam/strapi-railway.app)
- [Admin Dashboard](https://strapi-production-5ac1.up.railway.app/admin/)

## Features
- **Product Browsing**: View a list of products, filter by categories, and sort by price.
- **Product Details**: Detailed view of each product with images, descriptions, and pricing.
- **Shopping Cart**: Add, remove, and update product quantities in the cart.
- **Checkout**: Proceed to checkout with a summary of selected products.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tools and Frameworks Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Redux**: A predictable state container for JavaScript apps.
- **Redux Persist**: A library to persist and rehydrate a Redux store.
- **React Router**: A collection of navigational components for React applications.
- **Bootstrap**: A popular CSS framework for building responsive, mobile-first sites.
- **SCSS**: A CSS preprocessor for writing more maintainable and scalable stylesheets.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Material-UI Icons**: React components for Material Design icons.
- **Vercel**: A platform for frontend developers to deploy websites and web applications.

## Project Structure
7_BalenciagaShop_client/
├── public/                   # Public assets
│   ├── img/                  # Images
│   ├── vite.svg              # Vite logo
├── src/                      # Source files
│   ├── assets/               # Static assets
│   ├── components/           # Reusable components
│   │   ├── Card/             # Product card component
│   │   ├── Cart/             # Shopping cart component
│   │   ├── Categories/       # Categories component
│   │   ├── Contact/          # Contact component
│   │   ├── FeaturedProducts/ # Featured products component
│   │   ├── Footer/           # Footer component
│   │   ├── Layout.jsx        # Layout component
│   │   ├── Navbar/           # Navbar component
│   │   ├── Slider/           # Slider component
│   ├── hooks/                # Custom hooks
│   ├── pages/                # Page components
│   │   ├── Home/             # Home page
│   │   ├── product/          # Product detail page
│   │   ├── products/         # Products listing page
│   ├── redux/                # Redux state management
│   │   ├── cartReducer.js    # Cart reducer
│   │   ├── store.js          # Redux store configuration
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles
│   ├── App.css               # Application styles
├── .eslintrc.cjs             # ESLint configuration
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Locked versions of dependencies
├── vite.config.js            # Vite configuration
└── vercel.json               # Vercel deployment configuration
