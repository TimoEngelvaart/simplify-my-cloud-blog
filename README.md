# ☁️ Simplify My Cloud Blog

A minimal, fast blog built with [Astro](https://astro.build/).  
Sharing insights on **Azure**, **DevOps**, and **automation**.

---

## 🔥 Features

- Minimal, clean design (based on [Astro Chiri](https://github.com/the3ash/astro-chiri))
- Markdown/MDX blog support
- Fully responsive & fast
- SEO friendly (OpenGraph, Sitemap, RSS)
- Easy to customize

---

## 🚀 Getting started

1. **Clone the repo**

   ```bash
   git clone https://github.com/timoengelvaart/simplify-my-cloud-blog.git
   cd simplify-my-cloud-blog
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 🧞 Commands

| Command        | Action                                      |
| -------------- | ------------------------------------------- |
| `pnpm install` | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:4321` |
| `pnpm build`   | Build site for production to `./dist/`      |
| `pnpm preview` | Preview the build locally                   |

---

## 🔧 Configuration

- **Site config**: `src/config.ts`  
  Title, description, and SEO defaults.

- **Content**: `src/content/posts/`  
  Add `.md` or `.mdx` files with frontmatter:

  ```yaml
  ---
  title: "Why I Automate Everything"
  date: 2025-09-22
  description: "Azure, DevOps, and small scripts that save hours."
  tags: ["azure", "devops", "automation"]
  ---
  ```

- **Logo / branding**: replace `public/og/logo.png`.

---

## 📦 Deployment

You can deploy this blog easily to:

- [Vercel](https://vercel.com/) (recommended)
- GitHub Pages (set `base` in `astro.config.mjs`)
- Netlify or any static hosting provider

---

## 👀 Contributing

Issues and pull requests are welcome.  
This project is based on [astro-chiri](https://github.com/the3ash/astro-chiri).

---

## 📬 Contact

Built by [Timo Engelvaart](https://github.com/timoengelvaart).  
For questions: [info@simplifymycloud.com](mailto:info@simplifymycloud.com)
