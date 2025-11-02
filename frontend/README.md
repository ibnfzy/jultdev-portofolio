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

## Home Page Experience

The custom `Home` page (`src/pages/Home.jsx`) menampilkan tiga blok utama:

- **Hero** dengan animasi mesin tik menggunakan [`react-simple-typewriter`](https://www.npmjs.com/package/react-simple-typewriter) serta CTA menuju halaman kontak.
- **Highlight Teknologi** berupa grid responsif berisi teknologi favorit, masing-masing dengan animasi masuk dari [`framer-motion`](https://www.framer.com/motion/).
- **Tentang Saya** yang memadukan ringkasan profil, daftar keahlian kunci, dan avatar bergaya kartu.

Setiap section dibungkus `motion.section`/`motion.div` untuk memunculkan efek scroll reveal. Utility Tailwind mengatur layout agar tetap nyaman pada berbagai ukuran layar.

### Kustomisasi

1. **Ubah konten hero** dengan menyesuaikan teks, daftar kata `Typewriter`, serta tautan CTA di bagian awal komponen.
2. **Modifikasi highlight teknologi** dengan mengubah array `techHighlights`. Tambahkan atau hapus item sesuai kebutuhan Anda.
3. **Perbarui ringkasan profil** di section "Tentang Saya", termasuk avatar, poin-poin kekuatan, dan tautan ke halaman lain.

Tambahkan dependensi animasi dengan menjalankan:

```bash
npm install
```

perintah tersebut akan mengunduh `framer-motion` dan `react-simple-typewriter` yang tercantum di `package.json`.

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

