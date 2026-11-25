# Fast React Pizza Co

Use an actively supported Node.js version that satisfies the `engines` field in
`package.json`.

- `npm ci` installs the locked dependencies.
- `npm start` starts Vite, usually at http://localhost:3000.
- `npm test` runs the Vitest suite once.
- `npm run build` writes the production site to `build/`.

Production builds use Vite's default browser targets. For a subpath deployment,
set `PUBLIC_URL` at build time, for example `PUBLIC_URL=/pizza npm run build`.
