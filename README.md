# Heera — Portfolio

A minimalist, static React + TypeScript portfolio for Wahengbam Heramani Singh (Heera).

## Stack

- React
- TypeScript
- Vite
- Lucide React
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repository includes `.github/workflows/deploy.yml`.

1. Create a GitHub repository for the portfolio, for example `heera-portfolio`.
2. Upload/push this project to the repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to the `main` branch. The workflow will build and deploy the site.

The Vite config uses `base: './'`, so the site works as a static project under a GitHub Pages repository path.

## Update your information

Edit:

```text
src/data/portfolio.ts
```

Project content and skills are kept there to make future edits easy.

## Notes

No backend, database, authentication, API, or server-side runtime is required.
