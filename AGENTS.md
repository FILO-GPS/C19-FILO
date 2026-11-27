# FILO — Istruzioni comuni

## Contesto
FILO supporta l'uso consapevole della GenAI nella didattica mediante piattaforma web ed estensione browser. RAD e SDD definiscono requisiti e architettura; consultare `docs/README.md` per i percorsi. Il TM può lavorare senza agente.

## Stack e comandi
Node.js 22 (>=22.14), npm 10, TypeScript 5.7 strict, Next.js 16.4.6, React 19, Tailwind 4, PostgreSQL 16, Prisma 7.10.1, Vite 6.4.6/CRXJS/MV3, Vitest e Coverage V8 5.1.2, ESLint 9.39.5, Prettier 3. Versioni effettive: manifest e lockfile. Dalla root: `npm ci`, `npm run dev:frontend`, `npm run dev:backend`, `npm run dev:ext`, `npm run build`, `npm run lint`, `npm run type-check`, `npm test`, `npm run test:integration`, `npm run test:coverage`. Per build/test e configurazione ambiente leggere `docs/setup-tecnico.md`. Non installare o cambiare dipendenze autonomamente.

## Struttura
- `frontend/`: pagine, componenti e client API; nessun accesso diretto a database o Gemini.
- `backend/app/api/`: boundary HTTP; delegano ai control. `backend/src/{model,control,storage,llm-gateway}/`: dominio, logica, persistenza e accesso al provider. Prisma in `backend/prisma/`, configurazione in `backend/prisma.config.ts`, client generato in `backend/src/generated/prisma/` (non modificare né versionare).
- `extension/`: boundary browser, API client; nessuna chiave server-side.
- `tests/{unit,integration}/`: test eseguibili; `docs/test/`: specifiche Category Partition.
- `agents/`: profili, da richiamare esplicitamente uno alla volta. `docs/`: modelli e istruzioni; `.github/`: governance e CI.

## Convenzioni
Preservare identificativi RF/RNF/UC/DG e nomenclatura dei modelli. Rispettare responsabilità BCE e dipendenze del component diagram; non tradurre arbitrariamente nomi di dominio. TypeScript strict, stile ESLint/Prettier. Un branch per task creato dal TM (`feature/<id-task>-<slug>`, `fix/…`, `chore/…`); commit umani brevi con ID task.

## Regole
### Sempre
- Leggere il task, il profilo richiesto e i soli artefatti pertinenti; segnalare riferimenti mancanti o conflitti prima di procedere. Specifiche tecniche approvate governano lo stack; RAD/SDD governano comportamento e architettura. Non risolvere conflitti per supposizione.
- Ottenere approvazione umana del piano prima delle modifiche. Limitarsi all'ambito e al branch assegnati; preservare modifiche altrui.
- Implementare i requisiti High assegnati; Medium/Low solo se inclusi nel task. Task tecnici o funzionali non devono coincidere con UC. Design pattern documentati sono opzionali: usare solo se scelti dal TM nel piano.
- Rispettare alert non bloccante, fail-open in caso di errore/timeout, autorizzazioni per ruolo, minimizzazione dati, soglia temporale prevista dai modelli pertinenti. Le chiamate al provider passano solo dal Gateway backend.
- Usare database di test isolato e LLM/mock e servizi esterni simulati nei test automatici. Solo dati sintetici. Per i test, partire dai frame approvati (non dall'implementazione); associare ID frame ai test o motivare verifiche manuali.
- Eseguire controlli pertinenti e riportare risultati reali, anche se falliti o non eseguibili. Dopo massimo tre tentativi sullo stesso problema, fermarsi e informare il TM.
### Chiedi prima
Nuove dipendenze, cambi di architettura o nomi di dominio, modifica di contratti condivisi/schema/migrazioni, nuovi file fuori ambito, comandi non previsti, modifica dei modelli/test attesi/configurazione workflow. Le variazioni approvate devono essere tracciate e revisionate dai responsabili; non correggere in autonomia gli artefatti ufficiali.
### Mai
- Eseguire operazioni Git di scrittura (add, commit, push, checkout/switch, reset, rebase, merge, stash, tag), creare branch/PR, commentare o approvare su servizi remoti. Sono attività del TM. Consentita solo ispezione Git in lettura approvata (status, diff, log).
- Leggere o divulgare segreti, file `.env` reali, dati personali; non inviare dati reali ai provider. Nessuna chiamata Gemini/SMTP reale o accesso a database di produzione durante i test.
- Eseguire comandi distruttivi, disabilitare controlli, aggirare branch protection o modificare test per farli passare; nessuna dipendenza non approvata.

## Quando un task è finito
Piano approvato, ambito rispettato, requisiti e modelli coerenti, test frame pertinenti coperti o stato esplicitato, lint/tipi/build/test pertinenti eseguiti, nessun segreto o dipendenza inattesa. Il TM verifica, sa spiegare il codice, registra piano/esiti e apre la PR. Solo CI superata e review indipendente umana permettono l'integrazione; il TM decide la chiusura.

## Documenti di riferimento
`docs/rad/` (RF, RNF, UC, glossario), `docs/modelli/` (class, sequence, statechart, activity, mockup), `docs/sdd/` (architettura, component, deployment, design goals), `docs/design-patterns/`, `docs/test/`, `docs/specifiche-tecniche/`. Leggere quelli citati nel task; se non disponibili non inventarli.
