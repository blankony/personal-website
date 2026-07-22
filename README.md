# Personal Website

Portfolio berbasis Next.js App Router, Tailwind CSS, dan PostgreSQL.

## Menjalankan project

1. Install dependency dengan `npm install`.
2. Salin `.env.example` menjadi `.env.local`, lalu sesuaikan `DATABASE_URL`. Aktifkan `DATABASE_SSL=true` jika provider PostgreSQL mewajibkan SSL.
3. Buat database PostgreSQL dan jalankan `npm run db:setup`.
4. Jalankan development server dengan `npm run dev`.

Buka `http://localhost:3000`. Jika `DATABASE_URL` belum tersedia, halaman tetap memakai data fallback bawaan agar UI bisa dikembangkan tanpa database lokal.

## Scripts

- `npm run dev` — menjalankan Next.js development server.
- `npm run build` — membuat production build.
- `npm start` — menjalankan production server.
- `npm run lint` — memeriksa kode dengan ESLint.
- `npm run db:setup` — membuat tabel dan seed data PostgreSQL.
