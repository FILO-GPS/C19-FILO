# FILO — Feedback for Intentional Learning and Ownership

Progetto C19 · Corso di Ingegneria del Software · Università degli Studi di Salerno · A.A. 2026/2027

FILO promuove un utilizzo consapevole, critico e responsabile della GenAI nelle attività didattiche. Comprende una piattaforma web e una Browser Extension che offre feedback educativi non bloccanti.

## Architettura e stack

Monorepo npm Workspaces con tre applicazioni indipendenti:

| Workspace | Tecnologia | Ambiente previsto |
| --- | --- | --- |
| `frontend/` | Next.js App Router, React, Tailwind CSS | Vercel |
| `backend/` | Next.js Route Handlers, Node.js, Prisma | Render |
| `extension/` | TypeScript, Vite, CRXJS, Manifest V3 | Chromium |

Node.js 22 LTS (>=22.14.0), npm 10.x, TypeScript 5.7 strict, Next.js 16.4.6, React 19, Tailwind 4, PostgreSQL 16, Prisma 7.10.1, Vite 6.4.6 (condiviso tra extension, CRXJS e Vitest), Vitest e Coverage V8 5.1.2, ESLint 9.39.5, Prettier 3. Le versioni risolte sono fissate dal lockfile. Le motivazioni dei vincoli di compatibilità e dell’override transitivo sono riportate nel [setup tecnico](docs/setup-tecnico.md). Le librerie di dominio si introducono secondo le specifiche tecniche e il piano approvato.

## Sviluppo locale

Prerequisiti: Git, Node.js 22, npm 10, PostgreSQL 16 (locale o Docker), Chrome/Edge. Per la modalità assistita: VS Code e Cline.

1. Dalla root installare le dipendenze con `npm ci` usando il lockfile condiviso.
2. Copiare `frontend/.env.example` in `frontend/.env.local`, `backend/.env.example` in `backend/.env`, `extension/.env.example` in `extension/.env.local` e `.env.test.example` in `.env.test`. Personalizzare i valori locali; non versionare credenziali. Vedere [setup tecnico](docs/setup-tecnico.md).
3. Avviare PostgreSQL (ad esempio `docker compose up -d`). Prima di usare funzioni con persistenza applicare le migrazioni approvate e il seed previsto dal team.
4. Avviare web app e API con `npm run dev`. Frontend: http://localhost:3000; backend: http://localhost:3001.
5. Per l'estensione: `npm run build:ext`, poi caricare `extension/dist/` tramite `chrome://extensions` (modalità sviluppatore). `npm run dev:ext` attiva la modalità watch del plugin.

| Operazione | Comando dalla root |
| --- | --- |
| Installazione riproducibile | `npm ci` |
| Frontend + backend | `npm run dev` |
| Solo frontend | `npm run dev:frontend` |
| Solo backend | `npm run dev:backend` |
| Estensione in sviluppo | `npm run dev:ext` |
| Build completa | `npm run build` |
| Build singole | `npm run build:frontend`, `npm run build:backend`, `npm run build:ext` |
| Lint / tipi | `npm run lint`, `npm run type-check` |
| Formattazione sorgenti | `npm run format` |
| Unit test | `npm test` |
| Integration test | `npm run test:integration` |
| Coverage | `npm run test:coverage` |
| Tutti i controlli locali | `npm run verify` |

## Documentazione e workflow

Consultare [indice delle specifiche](docs/README.md), [workflow di sviluppo](docs/workflow.md), [setup tecnico](docs/setup-tecnico.md), [governance GitHub](docs/governance.md) e [AGENTS.md](AGENTS.md). YouTrack contiene i task e le assegnazioni. Il codice è integrato via Pull Request, con CI e review umana.

L'uso di agenti è facoltativo; le istruzioni comuni e i quattro profili di ruolo sono versionati. Il TM è responsabile del codice e di tutte le operazioni Git che modificano lo stato della repository. Nessun agente effettua commit, push, apertura/approvazione PR o merge.
