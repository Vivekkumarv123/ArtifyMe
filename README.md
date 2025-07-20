# ArtifyMe Interior Master

ArtifyMe Interior Master is a modern React application for interior design inspiration and service management. The project started as a static template and was transformed into a dynamic, feature-rich web app with robust state management and user experience enhancements.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
This application enables users to:
- Browse and search interior products
- Manage a shopping cart and order history
- Book appointments
- Read blog articles
- Authenticate and manage sessions
- Contact the team via a dedicated form

## Features
- **Authentication:** Signup, login, and password recovery using localStorage for session management
- **Product Catalog:** Search, view, and add products to cart
- **Cart & Orders:** Persistent cart and order history via localStorage
- **Appointment Booking:** Schedule appointments with the team
- **Blog:** Read articles and design tips
- **Contact:** Submit inquiries via a contact form
- **Responsive Design:** Optimized for desktop and mobile

## Tech Stack
- React (Functional Components, Hooks)
- React Router
- CSS Modules
- LocalStorage for client-side persistence

## Getting Started
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Interior-master
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
- `src/` - Source code
  - `auth/` - Authentication logic and context
  - `product/` - Product catalog and cart logic
  - `appointment/` - Appointment booking
  - `blog/` & `blogDetails/` - Blog features
  - `contact/` - Contact form
  - `headerFooter/` - Layout components
  - `profile/`, `order/`, `project/`, etc. - Additional features
- `public/` - Static assets

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
