# Personal Website - Mateusz Kędzia

A modern, minimal personal website built with [Astro](https://astro.build), featuring a blog, resume, and project showcase.

## 🌐 Live Sites

- **GitHub Pages**: [matercomus.github.io](https://matercomus.github.io/)
- **GitLab Pages**: [matercomus.gitlab.io/personal-site](https://matercomus.gitlab.io/personal-site/)

The site is automatically mirrored to GitLab for access in regions where GitHub is blocked.

## ✨ Features

- **About Page**: Personal introduction and interests
- **Blog**: Markdown/MDX-based blog with content collections
- **Resume/CV**: Multi-language CV (English & 中文) with print-to-PDF functionality
- **Projects**: Project showcase (coming soon)
- **Responsive Design**: Mobile-first, optimized for all devices
- **SEO Optimized**: Sitemap, RSS feed, OpenGraph metadata
- **Performance**: 100/100 Lighthouse score

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[React](https://react.dev)** - Interactive components
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first styling
- **[Shadcn/ui](https://ui.shadcn.com)** - Component library
- **MDX** - Enhanced Markdown for content

## 📁 Project Structure

```
├── public/          # Static assets (images, PDFs, fonts)
├── src/
│   ├── components/  # Reusable components (Header, Footer, CV components)
│   ├── content/     # Content collections (blog posts, CVs)
│   ├── layouts/     # Page layouts (BaseLayout, CVLayout, BlogPost)
│   └── pages/       # Astro pages (routes)
├── .github/         # GitHub Actions workflows
└── .gitlab-ci.yml   # GitLab CI/CD configuration
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

The site is automatically deployed via:

- **GitHub Pages**: GitHub Actions workflow (`.github/workflows/pages.yml`)
- **GitLab Pages**: GitLab CI/CD pipeline (`.gitlab-ci.yml`)
- **Auto-Mirror**: GitHub Actions automatically mirrors to GitLab on every push

## 📝 Content Management

- **Blog Posts**: Written in MDX, stored in `src/content/blog/`
- **Resume/CV**: Written in MDX with reusable components, stored in `src/content/cv/`
- All content is type-checked using Zod schemas

## 📄 License

Personal project - All rights reserved.

---

**About Me**: AI Engineer & Research Scientist, currently completing a Master's in Artificial Intelligence at Vrije Universiteit Amsterdam, conducting research in Beijing through an exchange program with Beijing University of Technology.
