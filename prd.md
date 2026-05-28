# PRD — CadsUI

**CadsUI** adalah premium motion UI component kit untuk React, Tailwind, dan shadcn/ui.

## 1. Ringkasan Produk

**CadsUI** adalah **copy-paste animated UI component kit** untuk developer yang ingin membuat landing page, portfolio, dan SaaS interface terlihat premium tanpa membangun micro-interaction dari nol.

Model produk mengikuti pendekatan seperti shadcn/ui: user tidak hanya meng-install black-box package, tetapi bisa menyalin source code komponen ke project mereka sendiri, lalu mengubahnya sesuai kebutuhan.

Positioning utama:

> CadsUI: Premium motion components for React, Tailwind, and shadcn/ui. Copy, paste, customize, and ship beautiful interfaces faster.

Produk ini bukan UI library umum. Fokus utamanya adalah **motion, micro-interaction, dan premium landing page feel**.

---

## 2. Masalah yang Diselesaikan

Banyak developer bisa membangun layout React, tetapi kesulitan membuat UI terasa mahal, smooth, dan polished. Motion UI sering membutuhkan waktu lama karena developer harus memikirkan:

- Transisi antar-state
- Hover interaction
- Responsive behavior
- Dark mode
- Accessibility
- Kompatibilitas Tailwind/shadcn
- Struktur props yang mudah dikustomisasi
- Performa animasi

Akibatnya, banyak landing page terlihat generic walaupun secara fungsi sudah benar.

Produk ini membantu developer mendapatkan komponen premium siap pakai dengan source code terbuka, sehingga mereka bisa langsung copy, paste, customize, dan ship.

---

## 3. Target Pengguna

### 3.1 Primary User

**Frontend developer / indie hacker** yang menggunakan:

- React
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion / Framer Motion

Kebutuhan mereka:

- Membuat landing page cepat
- Meningkatkan visual quality project
- Tidak ingin install UI library besar
- Ingin source code bisa dimodifikasi
- Butuh komponen yang terlihat premium untuk portfolio, SaaS, atau agency client

### 3.2 Secondary User

- Freelancer pembuat landing page
- Agency kecil
- Startup early-stage
- Creator template
- Developer yang menjual website ke client

---

## 4. Value Proposition

Produk ini memberikan:

1. **Komponen premium siap copy-paste**  
   Tidak perlu memahami animasi kompleks dari nol.

2. **Source code terbuka untuk user**  
   User bisa edit, extend, dan sesuaikan dengan project sendiri.

3. **Cocok dengan ekosistem modern**  
   React, Next.js, TypeScript, Tailwind, shadcn/ui, dan Motion.

4. **Fokus pada visual impact**  
   Komponen dibuat untuk membuat halaman terlihat lebih mahal.

5. **Dokumentasi praktis**  
   Setiap komponen punya preview, props, installation note, dan contoh penggunaan.

---

## 5. Positioning dan Branding

### 5.1 Positioning

Jangan diposisikan sebagai:

> Saya jual komponen React.

Positioning yang lebih kuat:

> Saya membuat premium motion components untuk developer yang ingin landing page, portfolio, dan SaaS mereka terlihat mahal tanpa desain dari nol.

### 5.2 Naming Guideline

Hindari penggunaan nama brand pihak ketiga seperti Apple, Dynamic Island Apple, Apple Dock, dan sejenisnya.

Gunakan nama generik dan aman seperti:

- Floating Island Navbar
- Magnifier Dock
- Morph Modal
- Elastic Social Dock
- Liquid Command Menu
- Expandable Pill Navigation
- Spotlight Card
- Notification Stack

### 5.3 Tone Visual

Arah visual:

- Premium
- Smooth
- Modern
- Minimal tetapi tidak kosong
- High contrast
- Dark mode friendly
- Detail micro-interaction jelas

Hindari:

- Tampilan terlalu template generic
- Gradient berlebihan tanpa tujuan
- Animasi terlalu ramai
- Meniru brand tertentu terlalu dekat

---

## 6. Scope MVP

MVP pertama tidak perlu langsung 50 komponen. Fokus awal adalah membuktikan bahwa developer tertarik, mau mencoba, dan mau membagikan.

### 6.1 MVP Version 0.1

Target: validasi market.

Deliverable:

1. Landing page sederhana
2. 3 komponen utama
3. Dokumentasi dasar
4. GitHub repository public
5. Demo online
6. Post launch di beberapa channel

Komponen MVP:

1. Floating Island Navbar
2. Morph Modal
3. Magnifier Dock

### 6.2 MVP Version 0.2

Target: menambah trust dan memperluas use case.

Tambahan komponen:

4. Spotlight Card
5. Liquid Button
6. Expandable Search Bar
7. Scroll Reveal Section
8. Animated Pricing Card
9. Notification Stack
10. Command Menu with Motion

### 6.3 Batasan MVP

Tidak termasuk pada MVP awal:

- NPM package kompleks
- Marketplace penuh
- User account
- Dashboard admin
- Payment integration sejak hari pertama
- Registry CLI kompleks
- Banyak framework selain React

---

## 7. Format Distribusi Produk

### 7.1 Tahap Awal

Distribusi awal memakai metode manual:

1. User buka halaman komponen
2. User melihat preview
3. User membaca dependency
4. User copy kode komponen
5. User paste ke project sendiri

Contoh instruksi:

```bash
npm install motion clsx tailwind-merge lucide-react
```

Lalu:

```txt
Copy component into:
components/ui/floating-island-navbar.tsx
```

### 7.2 Tahap Lanjutan

Jika validasi bagus, buat registry/CLI ala shadcn:

```bash
npx cadsui add floating-island-navbar
npx cadsui add morph-modal
npx cadsui add magnifier-dock
```

Namun ini bukan prioritas MVP 0.1.

---

## 8. Tech Stack

### 8.1 Website Dokumentasi

Rekomendasi:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion / Framer Motion
- MDX atau content file sederhana
- Vercel untuk deployment

### 8.2 Komponen

Dependencies utama:

- `react`
- `typescript`
- `tailwindcss`
- `motion` atau `framer-motion`
- `clsx`
- `tailwind-merge`
- `lucide-react` bila butuh icon

Optional:

- `@radix-ui/react-dialog` untuk modal accessibility
- `@radix-ui/react-navigation-menu` jika dibutuhkan

### 8.3 Prinsip Dependency

- Jangan terlalu banyak dependency.
- Komponen harus mudah dicopy.
- Dependency harus umum di ekosistem React/Tailwind.
- Hindari dependency visual yang sulit dikustomisasi.

---

## 9. Struktur Project yang Disarankan

```txt
project-root/
  app/
    page.tsx
    components/
      page.tsx
    components/[slug]/
      page.tsx
  components/
    ui/
      button.tsx
      card.tsx
    motion-ui/
      floating-island-navbar.tsx
      morph-modal.tsx
      magnifier-dock.tsx
  content/
    components/
      floating-island-navbar.mdx
      morph-modal.mdx
      magnifier-dock.mdx
  lib/
    utils.ts
    components.ts
  public/
    preview/
  prd.md
  README.md
```

Alternatif sederhana untuk MVP:

```txt
components/
  floating-island-navbar.tsx
  morph-modal.tsx
  magnifier-dock.tsx
app/
  page.tsx
  docs/
    page.tsx
```

---

## 10. Detail Komponen MVP

## 10.1 Floating Island Navbar

### Deskripsi

Navbar berbentuk pill/floating island yang berada di bagian atas halaman. Saat user scroll atau hover, navbar dapat berubah ukuran, menampilkan item tambahan, atau memperjelas background blur.

### Use Case

- SaaS landing page
- Portfolio
- Agency website
- Personal brand

### Fitur

- Floating pill layout
- Glassmorphism optional
- Active item indicator
- Smooth hover animation
- Responsive mobile menu
- Dark mode support
- CTA button optional
- Logo/brand slot

### Props Awal

```ts
type NavItem = {
  label: string
  href: string
  icon?: React.ReactNode
}

type FloatingIslandNavbarProps = {
  logo?: React.ReactNode
  items: NavItem[]
  cta?: {
    label: string
    href: string
  }
  activeHref?: string
  className?: string
}
```

### Behavior

- Desktop:
  - Navbar tampil sebagai pill di tengah atas.
  - Item memiliki hover background/transisi.
  - Active item memiliki indikator visual.
- Mobile:
  - Tampil sebagai compact pill.
  - Menu bisa expand/collapse.
- Scroll:
  - Background navbar menjadi lebih solid ketika user scroll.

### Acceptance Criteria

- Bisa digunakan di Next.js client component.
- Tidak error di TypeScript strict mode.
- Responsive di mobile dan desktop.
- Dark mode bekerja.
- CTA optional.
- Animasi smooth tanpa layout shift besar.
- Link bisa diganti sesuai data user.

---

## 10.2 Morph Modal

### Deskripsi

Modal dengan animasi morph dari trigger element ke dialog. Cocok untuk detail produk, preview portfolio, login prompt, atau showcase card.

### Use Case

- Product detail modal
- Portfolio preview
- Login/signup modal
- Image/content preview

### Fitur

- Trigger button/card
- Morph scale animation
- Backdrop blur
- Close button
- Escape to close
- Click outside to close
- Optional title, description, content, footer
- Accessibility melalui Radix Dialog atau implementasi setara

### Props Awal

```ts
type MorphModalProps = {
  trigger: React.ReactNode
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}
```

### Behavior

- Klik trigger membuka modal.
- Modal muncul dengan scale/morph transition.
- Background memiliki overlay blur.
- Modal bisa ditutup dengan close button, ESC, atau klik backdrop.
- Focus dikembalikan ke trigger setelah modal ditutup.

### Acceptance Criteria

- Accessible minimal: keyboard close, focus handling, aria label/title.
- Tidak menyebabkan scroll body aneh.
- Works in dark mode.
- Bisa dipakai dengan konten bebas.
- Animasi tidak patah ketika modal dibuka/ditutup cepat.

---

## 10.3 Magnifier Dock

### Deskripsi

Dock ikon sosial/link dengan efek magnifier saat hover. Terinspirasi dari pola magnification dock, tapi nama dan implementasi dibuat generik.

### Use Case

- Social media links
- Portfolio footer
- App shortcut menu
- Creator profile

### Fitur

- Icon list
- Hover magnification
- Smooth spring animation
- Tooltip label
- Custom icon support
- Horizontal dan optional vertical layout
- Mobile fallback tanpa hover dependency

### Props Awal

```ts
type DockItem = {
  label: string
  href: string
  icon: React.ReactNode
  target?: string
}

type MagnifierDockProps = {
  items: DockItem[]
  size?: number
  magnifiedSize?: number
  className?: string
}
```

### Behavior

- Desktop:
  - Icon di dekat cursor membesar.
  - Icon sekitarnya ikut sedikit membesar.
  - Tooltip muncul saat hover.
- Mobile:
  - Icon tampil normal tanpa efek hover kompleks.
  - Tap membuka link.

### Acceptance Criteria

- Efek hover smooth.
- Tidak membuat layout page bergeser.
- Link accessible dengan label.
- Bisa pakai icon apa pun.
- Works in light/dark mode.

---

## 11. Komponen Backlog

### 11.1 Spotlight Card

Card dengan efek spotlight mengikuti cursor.

Acceptance:

- Mouse spotlight smooth
- Bisa dipakai untuk feature grid
- Mobile fallback aman

### 11.2 Animated Pricing Card

Pricing card dengan hover elevation, badge, dan CTA interaction.

Acceptance:

- Support monthly/yearly state
- Highlight popular plan
- Responsive grid

### 11.3 Liquid Button

Button dengan animasi liquid/elastic pada hover atau click.

Acceptance:

- Support variants
- Tidak mengganggu readability
- Bisa disabled/loading

### 11.4 Expandable Search Bar

Search input yang expand dari icon/pill menjadi input penuh.

Acceptance:

- Keyboard accessible
- ESC clear/close
- Mobile friendly

### 11.5 Scroll Reveal Section

Wrapper untuk reveal animation saat section masuk viewport.

Acceptance:

- Support stagger children
- Respect reduced motion
- Tidak animasi berlebihan

### 11.6 Notification Stack

Stack notifikasi dengan enter/exit animation.

Acceptance:

- Auto-dismiss optional
- Manual close
- Multiple variants

### 11.7 Command Menu with Motion

Command palette dengan animasi masuk/keluar.

Acceptance:

- Keyboard shortcut
- Search/filter item
- Accessible dialog

---

## 12. Dokumentasi Setiap Komponen

Setiap halaman komponen harus memiliki:

1. Live preview
2. Copy code button
3. Installation/dependency note
4. Usage example
5. Props table
6. Customization guide
7. Accessibility note
8. Dark mode preview
9. Responsive behavior note

Template dokumentasi:

```md
# Component Name

Short description.

## Preview

Live preview here.

## Installation

Dependencies and copy path.

## Usage

Code example.

## Props

Props table.

## Customization

How to customize colors, size, animation.

## Accessibility

Keyboard, aria, focus behavior.
```

---

## 13. Non-Functional Requirements

### 13.1 Performance

- Animasi harus terasa smooth di device modern.
- Hindari animasi layout-heavy jika bisa memakai transform/opacity.
- Gunakan `transform`, `scale`, `opacity`, dan `filter` dengan hati-hati.
- Jangan membuat halaman demo berat.

### 13.2 Accessibility

- Modal harus keyboard accessible.
- Link harus memiliki label.
- Tooltip tidak boleh menjadi satu-satunya sumber informasi penting.
- Respect `prefers-reduced-motion` jika memungkinkan.
- Kontras warna harus cukup.

### 13.3 Responsiveness

- Semua komponen MVP harus punya behavior mobile.
- Jika efek hover tidak relevan di mobile, berikan fallback sederhana.

### 13.4 Developer Experience

- TypeScript type jelas.
- Props tidak terlalu kompleks.
- ClassName bisa di-override.
- Kode tidak terlalu abstrak.
- Mudah dicopy ke project lain.

---

## 14. Monetisasi

### 14.1 Model Awal

Gunakan model **Free + Pro**.

Free:

- 3–5 komponen basic
- GitHub public
- Dokumentasi terbuka
- Untuk membangun trust dan traffic

Pro:

- Komponen premium
- Blocks siap pakai
- Template landing page
- Lifetime source code access

### 14.2 Harga Awal

Global market:

- Early access: $9–$19
- Full component pack: $29–$49
- Lifetime bundle: $79–$149

Market Indonesia:

- Mini pack: Rp49.000
- Pro pack: Rp149.000
- Lifetime early access: Rp299.000

### 14.3 Kapan Mulai Jualan

Jangan tunggu 50 komponen. Mulai jual saat sudah ada:

- 10 komponen bagus
- Landing page rapi
- Minimal 3 komponen free
- Preview interaktif
- Dokumentasi cukup jelas
- Ada sinyal interest dari audience

---

## 15. Go-To-Market Plan

### 15.1 Channel Launch

Channel utama:

- GitHub
- X/Twitter
- LinkedIn
- Reddit r/reactjs
- Product Hunt
- TikTok/Reels dev content
- Indie Hackers
- Dev.to

### 15.2 Konten yang Diposting

Format konten:

- Short demo video 10–20 detik
- Before/after landing page
- Thread: building premium motion components
- Free component drop
- Behind the scenes coding
- Comparison: generic navbar vs floating island navbar

### 15.3 Launch Copy Awal

Contoh:

> I’m building a copy-paste motion component kit for React, Tailwind, and shadcn/ui. First 3 free components: Floating Island Navbar, Morph Modal, and Magnifier Dock.

### 15.4 Indikator Validasi

Produk mulai tervalidasi jika ada:

- GitHub stars bertambah
- User bertanya cara install
- User request komponen baru
- Ada DM/komentar minta versi pro
- Ada orang menggunakan komponen di project
- Demo mendapat share/bookmark
- Traffic organik mulai muncul

---

## 16. Roadmap Eksekusi

### Week 1 — Foundation

Target:

- Gunakan nama produk final: CadsUI
- Setup Next.js + Tailwind + shadcn
- Buat landing page sederhana
- Buat struktur dokumentasi

Deliverable:

- Homepage online
- Repo GitHub public/private siap
- Design direction awal

### Week 2 — MVP Components

Target:

- Build Floating Island Navbar
- Build Morph Modal
- Build Magnifier Dock

Deliverable:

- 3 komponen berjalan
- Preview interaktif
- Basic docs per komponen

### Week 3 — Polish & Publish

Target:

- Rapikan TypeScript
- Tambah dark mode
- Tambah responsive behavior
- Tambah copy code block
- Tulis README

Deliverable:

- Repo public
- Demo deploy
- Dokumentasi dasar selesai

### Week 4 — Launch & Validate

Target:

- Posting demo ke channel utama
- Kumpulkan feedback
- Catat request komponen
- Perbaiki bug

Deliverable:

- Public launch
- Feedback list
- Roadmap v0.2

### Month 2 — Monetization Prep

Target:

- Tambah sampai 10–15 komponen
- Buat pro pack awal
- Buat payment/waitlist sederhana
- Buat template landing page pertama

Deliverable:

- Free + Pro split
- Early access offer

---

## 17. Success Metrics

### 17.1 MVP 0.1 Metrics

Target minimal dalam 30 hari:

- 100+ GitHub stars atau equivalent interest
- 500+ unique visitors ke demo site
- 10+ user request/feedback
- 3+ orang mencoba komponen
- 1+ inbound message tentang versi premium

### 17.2 MVP 0.2 Metrics

Target dalam 60 hari:

- 300+ GitHub stars
- 2.000+ unique visitors
- 50+ email/waitlist
- 3–10 pembelian awal jika pro sudah dibuka

---

## 18. Risiko dan Mitigasi

### Risiko 1: Kompetitor Sudah Kuat

Kompetitor seperti Magic UI, Aceternity UI, Animate UI, dan Smooth UI sudah punya banyak komponen.

Mitigasi:

- Jangan bersaing sebagai UI library umum.
- Fokus pada motion kit kecil tapi sangat polished.
- Buat dokumentasi dan preview lebih praktis.
- Cari style visual yang distinctive.

### Risiko 2: Komponen Terlihat Seperti Clone

Mitigasi:

- Hindari nama brand pihak ketiga.
- Buat variasi visual sendiri.
- Jangan menyalin pixel-perfect dari produk tertentu.

### Risiko 3: Scope Terlalu Besar

Mitigasi:

- Mulai dari 3 komponen.
- Jangan bangun CLI dulu.
- Jangan bangun payment dulu.
- Validasi dengan demo dan GitHub.

### Risiko 4: Animasi Berat

Mitigasi:

- Pakai transform dan opacity.
- Test di mobile.
- Tambah reduced motion fallback.

---

## 19. Keputusan Produk

Keputusan untuk MVP:

1. Pakai React + Next.js + TypeScript + Tailwind.
2. Pakai copy-paste model dulu, bukan npm package.
3. Mulai dari 3 komponen.
4. Fokus ke landing page, SaaS, portfolio, agency.
5. Jangan pakai branding terlalu mirip Apple.
6. Dokumentasi harus dibuat sejak awal.
7. Monetisasi baru setelah ada minimal 10 komponen bagus.

---

## 20. Next Action Paling Dekat

Urutan eksekusi setelah PRD ini:

1. Gunakan nama produk final: CadsUI.
2. Setup project Next.js.
3. Buat homepage dengan headline, preview area, dan CTA GitHub.
4. Build `FloatingIslandNavbar`.
5. Build `MorphModal`.
6. Build `MagnifierDock`.
7. Buat docs singkat untuk masing-masing.
8. Deploy demo.
9. Publish repo.
10. Posting demo pertama.

---

## 21. Definition of Done MVP 0.1

MVP 0.1 dianggap selesai jika:

- Landing page online.
- 3 komponen MVP tersedia.
- Setiap komponen punya preview dan usage example.
- Komponen support TypeScript.
- Komponen support Tailwind.
- Komponen responsive minimal.
- Dark mode bekerja.
- README jelas.
- Repo bisa diakses publik.
- Demo sudah diposting minimal di 2 channel.
