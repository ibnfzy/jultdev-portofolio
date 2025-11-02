# Frontend

This directory contains the Vite + React frontend for the portfolio project. The setup includes TailwindCSS with a baseline theme inspired by the Phase 1 design tokens.

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## TailwindCSS Configuration

TailwindCSS is configured in `tailwind.config.js` with:

- **Dark mode** support using the `class` strategy.
- **Theme extensions** for `primary`, `secondary`, `accent`, `background`, and `foreground` colors.
- **Typography** using `Poppins` for display headings and `Inter` for body text.

Global styles are declared in `src/index.css`, which imports Tailwind layers and defines CSS variables for the light and dark themes.

## Project Structure

```
frontend/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   └── ThemeToggle.jsx
    └── contexts
        └── ThemeContext.jsx
```

## Routing & Layout

`react-router-dom` powers client-side routing across basic pages (Home, About, Contact). `Navbar` and `Footer` wrap routed content, and a reusable `ThemeToggle` component interacts with the `ThemeContext` to switch between light and dark themes.

## Backend Integration

If backend APIs are introduced, configure Vite's proxy in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
```

Update React components or hooks to call the proxied endpoints (e.g., `fetch('/api/example')`).

