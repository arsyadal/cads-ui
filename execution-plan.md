# Execution Plan — cads-ui

## 1. Direction

cads-ui akan bergerak sebagai **shadcn-style component registry** dengan strategi:

- **Free Core**: basic UI components gratis untuk adoption, trust, dan GitHub traction.
- **Pro Motion**: animated/premium components berbayar untuk revenue.

Prinsip eksekusi:

1. Jangan membuat design system enterprise.
2. Jangan membuat terlalu banyak basic component sebelum motion value terbukti.
3. Semua komponen harus copy-paste friendly.
4. Docs dan live preview adalah bagian dari produk, bukan tambahan.
5. Setiap komponen harus punya use case jelas.

---

## 2. Product Tiers

### Free Core Components

Tujuan: membuat user percaya, mencoba, dan memakai struktur cads-ui.

Komponen awal:

- Button
- Badge
- Card
- Input
- Textarea
- Basic Dialog
- Tabs
- Accordion
- Tooltip
- Basic Navbar

Kriteria Free Core:

- Open source
- Simple API
- Tailwind-based
- Accessible baseline
- Bisa jadi fondasi untuk komponen Pro

### Pro Motion Components

Tujuan: monetisasi dari komponen yang terasa premium dan butuh waktu lebih lama dibuat manual.

Komponen awal:

- Floating Island Navbar
- Morph Modal
- Magnifier Dock
- Color Orbit Card
- Animated Pricing Card
- Spotlight Card
- Animated Bento Grid
- Cursor Glow Hero
- Liquid Tabs
- Elastic Menu

Kriteria Pro Motion:

- Visual impact tinggi
- Animasi smooth
- Demo video/GIF idealnya tersedia
- Cocok untuk landing page, portfolio, SaaS, agency site
- Tidak terlalu generic

---

## 3. Current State

Sudah ada:

- Next.js + Tailwind + TypeScript setup
- Landing page
- Docs page dengan sidebar
- Live preview docs
- Floating Island Navbar
- Morph Modal
- Magnifier Dock
- Color Orbit Card
- Animated Pricing Card

Masih perlu:

- Free Core components
- Registry metadata
- Detail docs per component
- Copy button/code block
- CLI add command
- Payment/waitlist flow
- Demo video/GIF per animated component

---

## 4. Folder Structure Target

```txt
app/
  page.tsx
  docs/
    page.tsx
    components/
      [slug]/page.tsx
components/
  cads-ui/
    free/
      button.tsx
      badge.tsx
      card.tsx
      input.tsx
    pro/
      morph-modal.tsx
      floating-island-navbar.tsx
      magnifier-dock.tsx
      color-orbit-card.tsx
registry/
  components.json
  free.json
  pro.json
lib/
  utils.ts
```

Untuk fase sekarang, boleh tetap di `components/cads-ui/*`. Struktur `free/` dan `pro/` bisa dilakukan saat jumlah komponen mulai banyak.

---

## 5. Execution Phases

### Phase 0 — Stabilize Foundation

Target: project terasa rapi dan siap dikembangkan.

Tasks:

- [ ] Rapikan landing page copy
- [ ] Pastikan docs sidebar nyaman dipakai
- [x] Tambah section “Free Core vs Pro Motion” di landing page
- [x] Tambah status badge: Free / Pro / Soon di docs
- [ ] Tambah copy-code UI sederhana
- [ ] Pastikan build bersih

Definition of Done:

- Landing page menjelaskan model bisnis dalam 5 detik
- User paham mana yang gratis dan mana yang pro
- Semua existing component tampil di docs

---

### Phase 1 — Free Core MVP

Target: punya basic components gratis untuk adoption.

Prioritas komponen:

1. Button
2. Badge
3. Card
4. Input
5. Textarea
6. Basic Dialog

Tasks per component:

- [ ] Buat file component
- [ ] Tambah live preview di docs
- [ ] Tambah props table singkat
- [ ] Tambah install/dependency notes
- [ ] Tambah accessibility notes
- [ ] Tambah usage snippet

Definition of Done:

- Minimal 6 free components siap dipakai
- API konsisten
- Styling terasa cocok dengan brand cads-ui
- Tidak over-engineered

---

### Phase 2 — Pro Motion MVP

Target: memperkuat produk berbayar.

Prioritas polish:

1. Morph Modal — animasi morph harus terasa premium
2. Floating Island Navbar — active pill + responsive polish
3. Color Orbit Card — animated border bisa dipakai untuk pricing/feature
4. Magnifier Dock — hover interpolation lebih smooth
5. Animated Pricing Card — jadi contoh monetisasi visual
6. Spotlight Card — tambah komponen baru

Tasks:

- [ ] Polish animation timing
- [ ] Tambah variants jika perlu
- [ ] Tambah docs detail
- [ ] Buat GIF/video 6–12 detik per component
- [ ] Tandai sebagai Pro di docs/landing

Definition of Done:

- Minimal 5 pro components terlihat layak dijual
- Ada live preview yang jelas
- Ada CTA Early Access

---

### Phase 3 — Registry Metadata

Target: siap menuju shadcn-style add command.

Tasks:

- [x] Buat `registry/components.json`
- [x] Metadata per component:
  - name
  - slug
  - tier: free/pro
  - dependencies
  - files
  - description
  - status
- [x] Docs membaca metadata dari registry
- [x] Buat command list manual dulu di docs

Example metadata:

```json
{
  "name": "Color Orbit Card",
  "slug": "color-orbit-card",
  "tier": "pro",
  "dependencies": ["motion", "lucide-react"],
  "files": ["components/cads-ui/color-orbit-card.tsx"],
  "status": "ready"
}
```

Definition of Done:

- Semua component punya metadata
- Docs tidak perlu hardcode semua data terlalu banyak

---

### Phase 4 — CLI / Add Command

Target: user bisa add komponen seperti shadcn.

Command target:

```bash
npx cads-ui add button
npx cads-ui add morph-modal
npx cads-ui add color-orbit-card
```

Tasks:

- [x] Buat package CLI sederhana
- [x] Fetch registry metadata
- [x] Copy file component ke project user
- [x] Tampilkan dependency yang perlu diinstall
- [x] Free components bisa langsung di-add
- [x] Pro components diarahkan ke purchase/access flow

Definition of Done:

- Minimal 3 free components bisa di-add via CLI
- Error message jelas
- Tidak merusak project user

---

### Phase 5 — Monetization Flow

Target: validasi pembelian.

Tasks:

- [ ] Tambah waitlist form atau payment link
- [ ] Buat pricing page/section final
- [ ] Pisahkan Free vs Pro di docs
- [ ] Tambah license note sederhana
- [ ] Buat early access bundle

Pricing awal:

- Free: $0
- Early Access: $19
- Pro Pack: $29–$49
- Lifetime: $99+

Definition of Done:

- User bisa menyatakan minat/beli
- Ada CTA jelas dari landing dan docs
- Ada minimal 5 komponen Pro yang layak dijual

---

## 6. Weekly Sprint Plan

### Week 1 — Product clarity + Docs

- [x] Update landing: Free Core vs Pro Motion
- [x] Tambah status/tier badge di docs
- [x] Tambah docs sidebar polish
- [ ] Tambah copy button/code block

### Week 2 — Free Core Components

- [x] Button
- [x] Badge
- [x] Card
- [x] Input
- [x] Textarea
- [x] Basic Dialog

### Week 3 — Pro Motion Polish

- [ ] Morph Modal polish
- [ ] Floating Island Navbar polish
- [ ] Color Orbit Card variants
- [x] Spotlight Card baru
- [ ] Video/GIF demo pertama

### Week 4 — Registry + Validation

- [x] Buat registry metadata
- [x] Docs consume metadata sebagian
- [ ] Add waitlist/payment CTA
- [ ] Publish demo clips
- [ ] Collect feedback

---

## 7. Component Definition of Done

Setiap komponen dianggap selesai jika:

- [ ] TypeScript aman
- [ ] Responsive
- [ ] Dark mode aman
- [ ] Focus state jelas
- [ ] Props minimal terdokumentasi
- [ ] Ada live preview
- [ ] Ada usage snippet
- [ ] Dependencies jelas
- [ ] Tidak terlalu tightly coupled dengan landing page
- [ ] Build sukses

Untuk Pro Motion, tambahan:

- [ ] Animasi smooth dan intentional
- [ ] Tidak janky di hover/open/close
- [ ] Ada visual differentiator
- [ ] Layak dibuat video demo

---

## 8. Immediate Next Actions

Urutan kerja paling aman dari sekarang:

1. ~~Tambah section landing “Free Core + Pro Motion”.~~
2. ~~Tambah tier badge di docs.~~
3. ~~Buat Free Core: Button, Badge, Card.~~
4. ~~Buat Free Core: Input, Textarea, Basic Dialog.~~
5. Polish Morph Modal dan Color Orbit Card.
6. ~~Tambah Spotlight Card.~~
7. ~~Buat registry metadata.~~
8. Baru mulai CLI sederhana.

---

## 9. Decision Rules

Gunakan aturan ini agar scope tidak melebar:

- Kalau komponen tidak membantu landing/portfolio/SaaS marketing site, tunda.
- Kalau basic component sudah ada di banyak library, buat versi minimal saja.
- Kalau animated component tidak terlihat premium dalam 3 detik, polish sebelum tambah komponen baru.
- Kalau docs belum jelas, jangan tambah fitur baru.
- Kalau belum ada 5 Pro components layak jual, jangan terlalu cepat bikin CLI kompleks.
