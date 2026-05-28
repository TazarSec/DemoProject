# DemoProject

A small Vite + React + TypeScript app used to demo a supply-chain security tool
that scans npm dependencies on pull requests.

## Stack

- Vite + React 18 + TypeScript
- React Router for client-side routing
- Axios for HTTP requests
- date-fns for date formatting
- Vitest + React Testing Library for tests
- ESLint for linting

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm test         # run vitest test suite
npm run lint     # run eslint
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## CI

`.github/workflows/ci.yml` runs on every push to `main` and every pull request.
It installs dependencies with `npm ci`, then runs lint, tests, and the
production build. This is where the supply-chain security tool will be wired
in to scan new npm dependencies introduced by pull requests.
