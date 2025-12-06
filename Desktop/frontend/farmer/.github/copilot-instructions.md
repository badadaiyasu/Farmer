<!-- .github/copilot-instructions.md -->
Purpose: give AI coding agents the minimal, concrete context needed to be productive in this repo.

Project snapshot
- This is a React + TypeScript + Vite frontend that talks to a Django backend (see `VITE_API_URL`).
- Key tech: Vite, React 19, TypeScript, Tailwind, TanStack Query (`@tanstack/react-query`), Axios.

Big picture & data flow
- UI -> hooks -> API layer -> axios -> backend. Example:
  - UI consumer: `src/pages/buyer/Dashboard.tsx` uses `ProductFeed` and `ProductFilters`.
  - Hook: `src/hooks/use-products-query.ts` wraps `getProducts` with React Query (`queryKey: ['products', filters]`).
  - API: `src/lib/api/products.ts` calls `axios.get('/api/products/', { params: filters })` and expects either `{ results: Product[] }` or plain `Product[]`.
  - Axios config: `src/lib/axios.ts` sets `baseURL` from `import.meta.env.VITE_API_URL` and adds a request interceptor that reads `localStorage.getItem('access_token')` to set `Authorization: Bearer ...`.

What an agent should assume and look for
- Backend URL is configurable via `VITE_API_URL`; default `http://localhost:8000` in `src/lib/axios.ts`.
- Product API may return paginated `results` or a top-level array; code already handles both (`response.data.results ?? response.data`).
- Auth token key used by frontend: `access_token` in `localStorage` (see interceptor).

Conventions & patterns to follow when editing code
- Prefer small, focused edits that follow existing style (Tailwind classes, shadcn-like UI primitives under `src/components/ui`).
- Use React Query for server state updates; look for `useQuery`/`useMutation` hooks under `src/hooks` and `src/lib/api` for corresponding endpoints.
- Types live in `src/types` (e.g., `src/types/product.ts`) — prefer adding/updating types there.
- API helpers are in `src/lib/api/*.ts`. Reuse these helpers instead of calling `axios` directly from components.

Developer workflows (commands)
- Start dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `tsc -b && vite build`).
- Preview production build: `npm run preview`.
- Lint: `npm run lint`.

Files to inspect when changing behavior
- `src/lib/axios.ts` — baseURL, interceptors, headers.
- `src/lib/api/products.ts` — canonical example of fetching + params + return shape.
- `src/hooks/use-products-query.ts` — React Query integration and `staleTime` policy.
- `src/pages/buyer/Dashboard.tsx` and `src/pages/farmer/Dashboard.tsx` — how pages assemble components and use hooks.
- `src/components/farmer` and `src/components/buyer` — components follow presentational patterns; prefer prop-driven changes.

Testing & CI notes
- There are no tests or CI scripts present in `package.json` at time of writing. Avoid adding heavy test scaffolding without team consent.

When to open a PR vs small commit
- For UI tweaks limited to a single component, small PRs are fine.
- For changes to API shapes, hooks, or global config (`src/lib/axios.ts`, `src/types`), open a PR with a description of migration steps and a short manual QA checklist (how to exercise locally with `VITE_API_URL`).

If anything here is unclear, ask a short question referencing the specific file (e.g., "Do you prefer `getProducts` to always unwrap `results` in `src/lib/api/products.ts`?").
