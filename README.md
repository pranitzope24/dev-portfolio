# Backend Systems Control Center — Portfolio

Single-page developer portfolio themed as a “Backend Systems Control Center”.

Content is treated as system components:

- Experience → execution logs
- Projects → deployed services
- Skills → runtime modules
- AI work → autonomous systems lab

## Run locally

```bash
npm install
npm run dev
```

## Customize content

Edit the data in:

- `src/content.ts`

That file controls:

- Name, role, links
- Skills modules
- Execution log entries
- Deployed services
- Education, milestones, background processes

## Simple vs System view

Use the top-right toggle:

- **System View**: dashboard visuals + lazy-loaded Three.js System Core
- **Simple View**: recruiter-safe static visuals (no WebGL required)

## Build

```bash
npm run build
npm run preview
```
