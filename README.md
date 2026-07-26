# Personal Website

Portfolio berbasis Next.js App Router, Tailwind CSS, dan asset lokal.

## Menjalankan project

1. Install dependency dengan `npm install`.
2. Taruh foto profil di `public/images/profile/me.jpg`.
3. Taruh gambar project di `public/images/projects/` sesuai nama dalam `src/data/portfolio.js`.
4. Jalankan development server dengan `npm run dev`.

Buka `http://localhost:3000`. Data portfolio dibaca dari `src/data/portfolio.js`, tanpa koneksi database.


## Scripts

- `npm run dev` — menjalankan Next.js development server.
- `npm run build` — membuat production build.
- `npm start` — menjalankan production server.
- `npm run lint` — memeriksa kode dengan ESLint.
