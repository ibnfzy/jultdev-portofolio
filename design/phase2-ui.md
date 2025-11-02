# Phase 2 UI Specification

Dokumen ini memaparkan desain akhir untuk halaman utama (homepage) dan halaman turunan About, Skills, Projects, Services, serta Contact berdasarkan arahan pada `docs/phase1-requirements.md`. Fokus utama berada pada konsistensi visual, kesiapan implementasi light & dark mode, serta detail komponen untuk setiap section.

## Foundation

### Palet Warna
| Token | Mode Terang | Mode Gelap | Penggunaan |
|-------|-------------|------------|------------|
| `primary` | #0A1F44 | #7FB6FF | Headline, tombol utama, ikon penting |
| `accent` | #1ABC9C | #3FD1B6 | Tombol sekunder, highlight link, badge |
| `highlight` | #F1C40F | #F8E16C | Elemen penekanan (underline, status aktif) |
| `background-base` | #F7F9FC | #0D1526 | Latar utama |
| `background-elevated` | #FFFFFF | #162134 | Kartu, panel |
| `text-primary` | #1C1C1C | #E8EEF8 | Body text |
| `text-muted` | #5E6A81 | #A8B8D6 | Caption, meta |
| `divider` | #E1E6F0 | #26324A | Garis pemisah, border |
| `surface-glow` | linear-gradient(135deg,#1ABC9C33,#F1C40F26) | linear-gradient(135deg,#1ABC9C26,#F1C40F1F) | Aksen dekoratif hero, CTA |

### Tipografi
- Heading utama: **Poppins** semi-bold
  - H1 56px / 64px, letter-spacing -1%, uppercase opsional
  - H2 40px / 48px, letter-spacing -0.5%
- Body text: **Inter** regular
  - Body large 18px / 28px
  - Body default 16px / 26px
  - Caption 14px / 22px
- Monospace aksen (kode/stack): **JetBrains Mono** 14px / 20px

### Spacing & Grid
- Grid desktop: 12 kolom, gutter 24px, max-width konten 1200px.
- Spasi vertikal antar section: 120px (desktop), 96px (tablet), 72px (mobile).
- Radius sudut umum: 16px pada kartu & tombol.
- Shadow ringan pada mode terang: `0 12px 32px -16px rgba(10,31,68,0.25)`; mode gelap gunakan `0 16px 40px -18px rgba(12,22,40,0.45)`.

### Navigasi Global & Footer
- Navbar sticky dengan tinggi 72px (desktop), 64px (mobile). Logo kiri, menu tengah, CTA "Hire Me" kanan.
- Scroll progress indicator tipis (#1ABC9C) di atas navbar.
- Footer dua kolom: kiri (logo, deskripsi singkat), kanan (menu cepat & sosial). Warna background `primary` (terang) atau `background-elevated` (gelap) dengan teks kontras.

## Homepage

### Struktur Layout
1. **Hero**: Full viewport tinggi minimal 80vh dengan background `surface-glow`, overlay mesh gradient halus. Konten kiri (headline, subheadline, CTA), kanan ilustrasi/ foto.
2. **About Preview**: Dua kolom—potret & badge pengalaman di kiri, ringkasan bio dan tombol "Baca selengkapnya" di kanan.
3. **Skills Highlight**: Grid 3 kolom kartu kategori (Frontend, Backend, Tooling) dengan ikon.
4. **Featured Projects**: Carousel 3 kartu (desktop) atau stack (mobile) dengan navigasi panah & indicator.
5. **Services Snapshot**: Tiga kartu vertikal dengan ikon line-art, CTA "Lihat paket detail".
6. **Testimonials**: Slider kutipan 2 kolom, avatar klien bundar 64px.
7. **Contact CTA**: Panel call-to-action dengan overlay gradient dan form singkat (nama, email, pesan) + link sosial.

### Komponen Kunci

#### Hero Section
- **Headline**: Poppins H1 `text-primary` / `primary` (gelap). Animasi fade-up 400ms.
- **CTA Buttons**:
  - Primary: background `primary`, teks putih; hover terang: `#123063`, focus outline 2px `accent`. Mode gelap: background `accent`, teks `#0D1526`.
  - Secondary (ghost): border 2px `accent`, teks `accent`; hover isi `accent` 12% opacity (terang) atau 24% (gelap).
- **Social Icons Row**: Ukuran 40px, padding 12px, state hover ubah background `accent` 16%.

#### About Preview Card
- **Profile Badge**: Foto lingkaran 120px dengan ring gradient `accent`. Hover (desktop) menaikkan 8px.
- **Timeline Chips**: Chip horizontal (JetBrains Mono) misal "7+ yrs", background `background-elevated`.
- **CTA**: Link teks dengan arrow ikon; underline animasi slide dari kiri.

#### Project Card
- **Thumbnail**: Rasio 16:9, border radius 16px, overlay gradient saat hover (terang: `rgba(10,31,68,0.4)`, gelap: `rgba(10,31,68,0.6)`).
- **Stack Pills**: Monospace, background `background-elevated`, border `divider`.
- **Meta Row**: Ikon GitHub/live, state hover ubah ikon ke `accent`, tooltip 12px.
- **Carousel Controls**: Tombol bundar 48px, icon arrow, disable state 40% opacity.

#### Services Card
- **Icon Container**: 56px square, background `accent` 20% (terang) / 32% (gelap).
- **Title**: Poppins 24px, align kiri.
- **List**: Bullet custom menggunakan dot `accent`.
- **CTA Footer**: Link "Pelajari lebih lanjut" dengan chevron.

#### Contact Panel
- **Form Fields**: 2 kolom di desktop, 1 kolom di mobile; border 1px `divider`, focus border `accent` + shadow.
- **Submit Button**: Sama dengan CTA primary.
- **Social Bar**: Ikon bundar 48px, tooltip label.

## About Page

### Layout
- Hero ringkas dengan foto besar kiri, bio detail kanan.
- **Mission Statement** blockquote dengan background `background-elevated` dan border kiri `accent` 4px.
- **Experience Timeline**: Vertical timeline 3-5 entries, bullet `accent`, connector `divider`. Tahun (Poppins 20px), deskripsi (Inter 16px).
- **Values Grid**: 3 kartu horizontal, icon line-art.

### Komponen Tambahan
- **Timeline Node**: Hover menonjolkan card (shadow). Mode gelap: latar `#111A2B`.
- **Quote Card**: italic body, icon quote `primary`/`accent`.

## Skills Page

### Layout
- Section hero dengan headline & copy.
- **Tech Stack Matrix**: Tabel 4 kolom (Kategori, Tools, Level, Pengalaman). Level memakai bar horizontal 0–100% (primary).
- **Certification Carousel**: Kartu logo 160x80, border halus.

### Komponen
- **Stack Badge**: Pill 32px tinggi, background `accent` 18%.
- **Progress Bar**: Background `divider`, fill `primary` (terang) / `accent` (gelap).

## Projects Page

### Layout
- Filter bar sticky (tags, dropdown sort).
- Masonry grid 2-3 kolom (responsif) dengan kartu proyek.
- Detail modal: overlay blur, panel 960px.

### Komponen
- **Filter Chip**: Default background transparan border `divider`, hover isi `accent` 16%, aktif background `accent` penuh.
- **Project Modal**: Header berisi judul, stack, CTA; body memuat detail, gallery slider.
- **Pagination**: Numbered pill, active `primary` (terang) / `accent` (gelap).

## Services Page

### Layout
- Hero + subheadline dengan gambar abstrak.
- **Pricing Tiers**: 3 kartu (Starter, Growth, Enterprise) dengan toggle bulanan/tahunan.
- FAQ accordion 6 item.

### Komponen
- **Tier Card**: Border 2px `divider`, highlight plan populer dengan outline `accent` dan badge di pojok.
- **Toggle Switch**: Background `divider`, knob `primary`, state aktif latar `accent`.
- **Accordion**: Header 56px, ikon plus/minus transisi.

## Contact Page

### Layout
- Header dengan CTA langsung.
- Dua kolom: kiri form lanjutan (subject, budget, timeline), kanan info kantor, peta statik.
- Section FAQ kecil.

### Komponen
- **Form Field Advanced**: Dropdown custom, date picker placeholder.
- **Card Info**: Ikon 48px, background `accent` 16%, copy Inter 16px.
- **Map Placeholder**: Rasio 3:2, overlay callout.

## Mode Gelap Spesifik
- Latar belakang global `#070E1A`.
- Border diganti semi-transparan `rgba(255,255,255,0.08)`.
- Shadow digantikan dengan outline glow `0 0 0 1px rgba(127,182,255,0.35)` untuk kartu utama.
- Hover state meningkatkan brightness ikon 20%.

## Interaksi & Animasi
- Scroll reveal menggunakan fade + translate 24px.
- Button ripple halus (duration 250ms) opsional.
- Carousel transisi 400ms ease-in-out.
- Accordion expand/collapse 300ms, easing `cubic-bezier(0.4, 0, 0.2, 1)`.

## Asset Library
- **Ikon Sosial**: `https://simpleicons.org` (GitHub, LinkedIn, Twitter/X).
- **Ilustrasi Hero**: `https://undraw.co/illustrations` – pilih tema teknologi (placeholder `undraw_dev_focus.png`).
- **Service Line Icons**: Feather Icons (`https://feathericons.com`): `code`, `layers`, `shield`.
- **Timeline Icons**: Tabler Icons (`https://tabler-icons.io`): `rocket`, `briefcase`, `award`.
- **Testimonial Avatars**: Generated dari `https://ui-avatars.com`.
- **Map Image**: Placeholder `design/assets/contact-map.png` (perlu diekspor dari map embed).
- **Typography Files**: Google Fonts (Poppins, Inter, JetBrains Mono).

> Kebutuhan asset belum tersedia secara lokal. Jika frame Figma atau PNG telah dibuat, simpan ke `design/assets/` dan tambahkan referensi berikut:
> - Figma file: `https://www.figma.com/file/...` (belum tersedia).
> - Export hero frame: `design/assets/home-hero.png`.

