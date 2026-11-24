# Cityu CS1302A Group Project Demonstration Website

### Overview

A website using Vue 3 and built by Vite 8, featuring documentations and information about the python package "word-flashcard-vocab-learner".

### Running it

Needs Node.js (`^22.18.0` or `>=24.12.0`).

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in dist/
```

`public/_redirects` sends every path to `index.html`, so links like `/docs/settings` work after
deploying to Netlify or Cloudflare Pages.
