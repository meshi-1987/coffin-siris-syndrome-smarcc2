# SMARCC2 React Site (Vite) ג€” GitHub Pages ready

This project is set up to deploy from the `docs/` folder on the `main` branch (GitHub Pages -> Settings -> Pages -> Deploy from a branch -> `main` / `docs`).

## Commands
```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # outputs to docs/
```

## Why HashRouter?
GitHub Pages is static hosting and doesn't support server-side routing.
We use `HashRouter` so deep links like `#/donate` work.

## Editing content
- Update text in `src/pages/*`
- Update experts in `src/pages/Experts.jsx`
- Add links in `src/pages/Articles.jsx`
- When donation is ready, enable buttons in `src/components/DonateCard.jsx`

## Troubleshooting
- If assets donג€™t load after deploy, ensure `base: './'` is present in `vite.config.js`.
- If the site shows 404 on a deep link, make sure `404.html` exists at the project root (it does).
