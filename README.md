# Founder Resources

Founder Resources is a curated collection of essential knowledge for early-stage startup founders. This web application provides a simple, clean interface to access top resources across various aspects of building a startup.

## Features

- Curated list of 12 high-quality resources for startup founders
- Category-based filtering (Getting Started, Growth, Funding)
- Responsive design for desktop and mobile devices
- Clean, professional UI with a green and grey color scheme

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/leandertimengel/founder-resources.git
   cd founder-resources
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app directory containing pages and layouts
- `components/` - React components used throughout the application
- `public/` - Static assets like images and fonts

## Customization

To add or modify resources, edit the `articles` array in `components/ArticleList.tsx`. To change categories, update the `categories` array in the same file.

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform created by the creators of Next.js. Simply connect your GitHub repository to Vercel, and it will automatically deploy your application with each push to the main branch.
