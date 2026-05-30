# PRD — cads-ui

## 1. Ringkasan

cads-ui adalah produk komponen UI premium berbasis React + Tailwind + motion, dengan model **copy-paste first** ala shadcn.

Tujuan utama:
- Jual komponen spesifik, bukan UI library generik
- Bantu developer bikin UI terasa premium lebih cepat
- Fokus pada motion, micro-interaction, dan visual feel modern

Contoh komponen awal:
- Morph Modal
- Floating Island Navbar
- Magnifier Dock
- Spotlight Card
- Animated Pricing Card

---

## 2. Problem

Banyak developer bisa bikin aplikasi jalan, tapi hasil UI sering:
- terasa biasa
- kurang polished
- butuh waktu lama untuk bikin animasi halus
- sulit membuat interaksi premium dari nol

Pilihan saat ini juga punya gap:
- UI library umum terlalu generic
- package komponen sering sulit dikustom
- animasi premium biasanya tersebar di berbagai repo, tweet, atau snippet
- banyak solusi bagus, tapi tidak dikemas spesifik untuk landing page, portfolio, dan SaaS kecil

---

## 3. Opportunity

Sudah ada demand untuk:
- animated components
- shadcn-style open code components
- Tailwind-friendly snippets
- komponen visual premium untuk landing page dan marketing site

Kompetitor utama:
- Magic UI
- Aceternity UI
- Animate UI
- Smooth UI

Celah positioning:
- fokus pada **premium motion components**
- bukan kumpulan komponen random
- bukan design system enterprise
- dibuat untuk developer yang ingin UI cepat terlihat mahal

---

## 4. Product Vision

**"Premium motion components for React developers who want beautiful UI fast."**

cads-ui harus terasa:
- modern
- visual-first
- mudah diambil per komponen
- source code terbuka untuk buyer/user
- mudah dimodifikasi sesuai project

---

## 5. Target User

### Primary
- Frontend developer
- Indie hacker
- Freelancer web developer
- Agency kecil
- Builder landing page / portfolio

### Secondary
- Startup kecil yang butuh marketing site cepat
- Content creator/dev educator yang butuh demo visual menarik

### Karakter user
- Pakai React / Next.js
- Nyaman dengan Tailwind
- Tidak mau lock-in ke library besar
- Lebih suka ambil source code daripada install package berat
- Mau bayar kalau komponen menghemat waktu dan menaikkan kualitas visual

---

## 6. Positioning

### Bukan
- UI framework enterprise
- Komponen dashboard CRUD berat
- Design system corporate yang kompleks
- Clone shadcn tanpa diferensiasi

### Adalah
- Shadcn-style component registry
- Free basic UI components untuk adoption
- Premium motion components untuk monetisasi
- Copy-paste component kit untuk React + Tailwind
- Premium UI blocks untuk landing page, portfolio, SaaS, agency site

---

## 7. Goals

### Business Goals
- Validasi bahwa komponen premium bisa dijual
- Dapat user awal dari GitHub, X, dan komunitas frontend
- Ubah trafik gratis jadi pembelian pack premium

### Product Goals
- Punya MVP 5–10 komponen berkualitas tinggi
- Semua komponen mudah dipakai dan dimodifikasi
- Dokumentasi dan preview jelas

### Success Metrics
- 100+ GitHub stars awal
- 20+ email waitlist / leads awal
- 5+ buyer pertama
- 3 komponen awal dipakai user di project nyata
- Conversion free ke paid bisa diuji

---

## 8. MVP Scope

### Komponen MVP

#### Free Core
1. Button
2. Badge
3. Card
4. Input
5. Textarea
6. Basic Dialog

#### Pro Motion
1. Morph Modal
2. Floating Island Navbar
3. Magnifier Dock
4. Color Orbit Card
5. Animated Pricing Card
6. Spotlight Card

### Deliverables MVP
- Landing page
- Halaman docs per komponen
- Preview/live demo
- Copy-paste code per komponen
- Panduan install dependency
- Props / customization examples
- Dark mode support
- Responsive behavior

### Out of Scope for MVP
- Figma kit
- Vue/Svelte version
- Dashboard admin components
- Theme builder
- Visual editor
- Marketplace multi-vendor

---

## 9. Core Product Requirements

### 9.1 Distribution Model
Produk harus mendukung model ala shadcn:
- user bisa copy-paste source code
- idealnya ada command add per komponen di fase berikutnya
- package install tidak jadi dependency utama untuk semua komponen

Tahap awal cukup:
- docs + source code
- struktur folder jelas
- dependency list per komponen

Tahap berikutnya:
- `npx cads-ui add morph-modal`
- `npx cads-ui add floating-island-navbar`
- `npx cads-ui add magnifier-dock`

### 9.2 Developer Experience
Setiap komponen harus:
- pakai TypeScript
- cocok untuk React / Next.js
- pakai Tailwind CSS
- gunakan motion library yang umum
- mudah rename class, ubah colors, spacing, radius, timing
- tidak over-abstracted

### 9.3 Quality Bar
Setiap komponen wajib:
- visual polished
- animasi smooth
- keyboard/focus states masuk akal
- mobile behavior jelas
- dark mode aman
- dokumentasi penggunaan singkat

### 9.4 Docs
Setiap halaman docs minimal punya:
- nama komponen
- preview
- use case
- install steps
- dependencies
- code snippet
- props/customization
- accessibility notes

---

## 10. Feature Requirements per Component

### A. Morph Modal
**Use case:** CTA, signup modal, feature preview, gallery modal

**Requirements:**
- open/close animation smooth
- support trigger button
- backdrop fade
- content scale/morph feel
- ESC to close
- click outside to close
- responsive width
- dark mode

### B. Floating Island Navbar
**Use case:** landing page nav, portfolio nav, section switcher

**Requirements:**
- sticky/floating feel
- active item highlight
- compact premium rounded shell
- smooth hover/active animation
- mobile fallback
- optional CTA button

### C. Magnifier Dock
**Use case:** social links, quick actions, portfolio launcher

**Requirements:**
- hover magnify effect
- smooth scale interpolation
- icon tooltip optional
- keyboard accessible
- mobile fallback without broken interaction
- configurable icon size and spacing

### D. Spotlight Card
**Requirements:**
- cursor-follow highlight
- safe fallback on touch devices
- no janky repaint

### E. Animated Pricing Card
**Requirements:**
- hover emphasis
- featured tier highlight
- CTA motion subtle, not distracting

---

## 11. UX Principles

- **Copy-paste first** — user owns source code
- **Looks premium by default** — tidak perlu styling banyak agar bagus
- **Simple integration** — tidak bikin setup ribet
- **Specific > generic** — komponen punya tujuan visual jelas
- **Motion with restraint** — animasi terasa mahal, bukan norak

---

## 12. Naming Principles

Hindari nama yang terlalu dekat dengan brand pihak lain.

### Hindari
- Apple Dynamic Island Navbar
- Apple Dock Icons

### Gunakan
- Floating Island Navbar
- Magnifier Dock
- Morph Modal
- Elastic Social Dock
- Expandable Pill Navigation

---

## 13. Monetization

### Model
**Free + Pro**

### Free
- Basic UI components gratis
- 3–5 animated teaser components bisa dipertimbangkan
- repo publik untuk traction dan trust
- docs tetap tersedia
- tujuan utama: adoption, GitHub stars, trust

### Pro
- premium animated components
- advanced motion blocks
- full component pack
- source code access
- lifetime updates untuk periode awal
- tujuan utama: revenue dari komponen yang sulit dibuat cepat dan terlihat premium

### Pricing Hypothesis
- Early access: $9–$19
- Pro pack: $29–$49
- Lifetime bundle: $79–$149

Harga lokal bisa diuji terpisah bila target Indonesia ingin dikejar.

---

## 14. Go-to-Market

Channel awal:
- GitHub
- X / Twitter
- LinkedIn
- Reddit (`r/reactjs`, `r/nextjs`, `r/webdev`)
- TikTok / Reels dev showcase
- Product Hunt setelah lebih matang

Konten promosi terbaik:
- short demo video
- before/after UI comparison
- code snippet preview
- “build this premium navbar in minutes” angle

---

## 15. Validation Plan

Mulai dari 3 komponen paling kuat:
- Floating Island Navbar
- Morph Modal
- Magnifier Dock

### Validasi awal dianggap positif jika:
- ada stars dan forks dari GitHub
- ada save/share dari video demo
- ada user minta komponen tambahan
- ada email/signup/waitlist
- ada pembelian awal atau DM intent to buy

---

## 16. Risks

### Risk 1 — kompetitor sudah banyak
Mitigasi:
- fokus ke niche motion premium
- prioritaskan kualitas visual dan docs
- jual outcome, bukan cuma file komponen

### Risk 2 — dianggap mudah ditiru
Mitigasi:
- bangun brand, docs, preview, consistency
- release rutin
- punya bundle dan polish yang lebih tinggi

### Risk 3 — terlalu luas dari awal
Mitigasi:
- batasi MVP ke 5 komponen
- hindari dashboard/UI umum

### Risk 4 — legal/branding confusion
Mitigasi:
- jangan pakai nama brand pihak ketiga
- cukup gunakan deskripsi “inspired by premium OS-like interactions” bila perlu

---

## 17. Roadmap

### Phase 0 — Foundation
- landing page jelas
- docs dengan sidebar
- live preview per komponen
- positioning Free Core + Pro Motion

### Phase 1 — Free Core MVP
- Button
- Badge
- Card
- Input
- Textarea
- Basic Dialog
- semua gratis dan copy-paste friendly

### Phase 2 — Pro Motion Pack
- 5–10 animated components
- polish motion dan visual quality
- pricing / early access CTA
- demo video/GIF per komponen utama

### Phase 3 — Registry / CLI
- metadata registry
- add command per komponen
- versioning
- free components bisa di-add langsung
- pro components diarahkan ke access/purchase flow

### Phase 4 — Blocks
- hero sections
- pricing sections
- testimonials
- nav/footer bundles
- premium landing page sections

---

## 18. Technical Stack

Direkomendasikan:
- React
- Next.js
- TypeScript
- Tailwind CSS
- Motion / Framer Motion
- shadcn-compatible structure

Prinsip teknis:
- source code clear
- dependency minimal
- mudah diambil per komponen
- no heavy runtime wrapper kalau tidak perlu

---

## 19. Launch Criteria

MVP siap launch jika:
- 3 komponen utama selesai
- docs bisa dipahami user baru
- preview live stabil
- semua komponen responsive
- dark mode aman
- dependency/install steps tidak membingungkan

---

## 20. One-Line Product Thesis

**cads-ui menyediakan basic components gratis ala shadcn dan menjual premium motion components yang bisa langsung diambil, dikustom, dan dipakai developer untuk membuat UI terasa mahal tanpa mulai dari nol.**
