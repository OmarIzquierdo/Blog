# 👨‍💻 Omar Izquierdo | Portfolio & Blog

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Hugo](https://img.shields.io/badge/Hugo-broadway?style=for-the-badge&logo=hugo)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

> **A hybrid web architecture:** A high-performance Portfolio built with React (Vite) seamlessly integrated with a Hugo-powered Blog.

---

## 🚀 About The Project

Welcome to my personal slice of the internet. This repository is unique because it combines the best of two worlds:
1.  **The Portfolio (Root):** A dynamic Single Page Application (SPA) built with **React + Vite** for a modern, interactive showcase of my work.
2.  **The Blog (`/blog`):** A static, blazing-fast content engine powered by **Hugo**, perfect for SEO and long-form writing.

Both projects live in this monorepo and are built & merged automatically via **GitHub Actions** before being deployed to GitHub Pages.

## 📂 Architecture

The project structure is designed to keep concerns separated while sharing the same deployment pipeline.

```text
omarizquierdo.dev/
├── src/                # ⚛️ React Source Code (Portfolio)
├── blog_hugo/          # ✍️ Hugo Source Code (Blog)
├── public/             # 🖼️ React Static Assets
├── .github/workflows/  # 🤖 CI/CD Pipeline
├── package.json        # Dependencies for the Portfolio
└── vite.config.js      # Vite Configuration