# Imminent Flair — Cybersecurity Intelligence Blog

**Catrina Turner · Principal, Imminent Flair**

A multi-page executive cybersecurity blog built as a static site, deployable on Cloudflare Pages via GitHub.

---

## Site Structure

```
imminent-flair/
├── index.html                              ← Homepage
├── _redirects                              ← Cloudflare Pages redirect rules
├── css/
│   ├── global.css                          ← Shared design system & typography
│   └── components.js                       ← Shared nav, footer, ticker, scroll-reveal
├── articles/
│   ├── index.html                          ← Articles index with filter bar
│   └── architecture-of-failure.html        ← Full article page
├── topics/
│   └── index.html                          ← Topics / pillars index
├── about/
│   └── index.html                          ← Author profile & credentials
└── newsletter/
    └── index.html                          ← Subscribe page
```

---

## Deploying to Cloudflare Pages via GitHub

### Step 1 — Create GitHub Repository
1. Go to https://github.com/new
2. Name your repo (e.g. `imminent-flair`)
3. Set to Public (required for free Cloudflare Pages)
4. Click **Create repository**

### Step 2 — Push Files
```bash
cd imminent-flair
git init
git add .
git commit -m "Initial deploy — Imminent Flair blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/imminent-flair.git
git push -u origin main
```

### Step 3 — Connect to Cloudflare Pages
1. Log in to https://dash.cloudflare.com
2. Go to **Pages** → **Create a project** → **Connect to Git**
3. Select your GitHub account and choose your `imminent-flair` repo
4. Build settings:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (or leave as default)
5. Click **Save and Deploy**

### Step 4 — Custom Domain (Optional)
1. In Cloudflare Pages project → **Custom domains**
2. Add `imminentflair.com` (or your domain)
3. If domain is already on Cloudflare DNS, it connects automatically
4. If not, update your domain's nameservers to Cloudflare

---

## Adding New Articles

1. Copy `articles/architecture-of-failure.html` as a template
2. Save as `articles/your-article-slug.html`
3. Update content, title, meta description, breadcrumbs
4. Add a card in `articles/index.html` and `index.html` grid
5. `git add . && git commit -m "Add new article" && git push`

Cloudflare Pages auto-deploys on every push to `main`. 🚀

---

## Design System Reference

**Colors:**
- `--gold: #b8966e` — Primary accent
- `--ivory: #f4efe6` — Primary text
- `--mist: #9a8870` — Body text / secondary
- `--ink: #090909` — Background dark
- `--ink-mid: #111111` — Background mid

**Fonts:**
- Display: Cormorant Garamond (Google Fonts)
- Body: Instrument Sans (Google Fonts)
- Mono: DM Mono (Google Fonts)

**Key CSS Classes:**
- `.reveal` — Scroll-triggered fade-up animation
- `.container` — Max 1280px centered layout
- `.mono` — Monospaced label style
- `.btn-ghost` / `.btn-solid` / `.btn-outline` — Button variants
- `.section-label` — Gold-labeled section headers with rules

---

*© 2026 Catrina Turner · Imminent Flair*
