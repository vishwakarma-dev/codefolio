# Codefolio

**Codefolio** is a modern, high-performance developer portfolio built with **Next.js (Pages Router)** and **TypeScript**, designed for static deployment on **GitHub Pages**.  
It showcases projects, skills, and professional details with a clean UI, fast load times, and zero backend dependencies.

🌐 Live Site: https://vaibhav-satokar.github.io

---

## ✨ Features

- ⚡ Fully static site (GitHub Pages compatible)
- 🧭 Pages Router architecture
- 🎨 Modern, responsive UI
- 🧠 Typed data models for projects and skills
- 🚀 Automatic deployment via GitHub Actions
- 📈 Optimized for performance and SEO

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (Pages Router)
- **Language:** TypeScript
- **UI:** React, Material UI
- **Styling:** CSS Modules / MUI Theme
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

---

## 📂 Project Structure

```
.
├── pages/              # Pages Router
│   ├── index.tsx
│   ├── _app.tsx
│   └── _document.tsx
├── components/         # Reusable UI components
├── data/               # Static portfolio data
├── types/              # TypeScript interfaces
├── public/             # Static assets
├── .github/workflows/  # GitHub Actions (auto deploy)
├── next.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```

Open http://localhost:3000

---

## 🏗 Build (Static Export)

```bash
npm run build
```

This generates a fully static site in the `/out` directory.

---

## 📦 Deployment

Codefolio is deployed automatically using **GitHub Actions**.

Every push to the `main` branch:
1. Builds the Next.js project
2. Exports static files
3. Deploys to GitHub Pages

No manual steps required.

---

## 🧠 Design Philosophy

- No backend, no APIs — fast and reliable
- Static-first architecture
- Clear separation of data, UI, and logic
- Easy to extend with new sections or projects

---

## 📌 Customization

Update portfolio content here:
```
/data/portfolio.ts
```

Add new projects, skills, or social links without touching UI code.

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👤 Author

**Vaibhav Satokar**  
- GitHub: https://github.com/vaibhav-satokar  
- LinkedIn: https://www.linkedin.com/in/vaibhav-satokar/

---

If you find this useful, feel free to ⭐ the repository.
