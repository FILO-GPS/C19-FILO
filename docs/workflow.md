# Workflow di implementazione — FILO

## Principi e responsabilità
I PM definiscono scope, priorità, dipendenze e governance. YouTrack è la fonte per assegnazioni, scadenze, stato e tempo; eventuali issue GitHub collegano la specifica operativa, senza duplicare la pianificazione. TM autore: responsabile del piano, codice, test e operazioni Git. Revisore umano indipendente: verifica e approva; l'agente è facoltativo e non integra codice.

## Sequenza per un task
1. PM/TM definisce il task: ID YouTrack, obiettivo, riferimenti RF/RNF/UC (se applicabili), file di specifica, ambito, dipendenze, verifica/test frame. Segnalare specifiche mancanti.
2. TM aggiorna `main` e crea un branch dedicato; propone un piano manuale o con il profilo pianificatore in Cline Plan. Il TM approva il piano e lo registra nel task; variazioni significative richiedono approvazione.
3. Implementazione manuale oppure Cline Act con profilo implementatore. Una sessione non lavora su task differenti. Per test da Category Partition utilizzare sessione separata e indipendente dai corpi dei metodi, preferibilmente prima del codice o con interfacce isolate. La CP rimane di responsabilità umana.
4. Verifica locale (`npm run verify` per l'intero sistema; controlli pertinenti durante il lavoro). Se un controllo fallisce correggere nell'ambito approvato; dopo tre tentativi agentici sullo stesso errore, intervento umano. Nessun test indebolito per ottenere verde.
5. TM controlla il diff, esegue commit/push manualmente e apre PR verso `main`, con template e link al task. CI automatica senza LLM.
6. Revisore umano diverso dall'autore confronta diff e modelli; se usa Cline, avvia sessione separata di sola lettura con profilo revisore. Richiede modifiche ove necessario. L'autore aggiorna la PR; nuova review se cambia il diff.
7. Merge solo dopo CI verde, review e conversazioni risolte. Il TM aggiorna YouTrack. Se frame non automatizzabili, registrare evidenza manuale approvata. Non dichiarare completato un task con controlli mancanti senza decisione esplicita dei PM.

## Branch e Git
`feature/<id-task>-<slug>` per funzionalità, `fix/<id>-<slug>` per bug, `chore/<id>-<slug>` per setup. Commit umani con riferimento al task. Nessun push diretto su `main` dopo inizializzazione. Niente force push su main. Coordinare interventi su schema, model, storage e contratti comuni prima di lavorare in parallelo.

## Prompt operativi Cline
Installare Cline, aprire la root del clone, scegliere un modello Gemini effettivamente disponibile e usare la propria chiave personale. Abilitare le regole `AGENTS.md` e `.clinerules/workflow.md`; auto-approve disattivato. Per ogni fase indicare esplicitamente il profilo.

- Plan: «Leggi AGENTS.md e agents/pianificatore.md. Task: [testo/link riportato e specifiche]. Proponi il piano, senza modificare file.»
- Act: «Leggi AGENTS.md e agents/implementatore.md. Piano approvato: [piano]. Implementa solo l'ambito.»
- Tester, nuova sessione: «Leggi AGENTS.md e agents/tester.md. Specifiche: [UC/CP/firme]. Implementa solo i frame [ID].»
- Review, nuova sessione: «Leggi AGENTS.md e agents/revisore.md. Task e specifiche: […]; diff: […]. Restituisci i rilievi senza modificare file.»

Non consegnare segreti o documenti con dati personali al modello. `.clineignore` riduce le letture accidentali ma non è una sandbox; verificare ogni comando, non concedere autorizzazioni di scrittura Git né accesso a provider/servizi non necessari. Le quote e i costi sono sotto controllo del TM; nessuna spesa senza autorizzazione.

## Definition of Done
- Piano approvato, codice nei limiti del task e coerente con modelli e architettura; nessuna dipendenza o modifica di specifica non approvata.
- Test frame assegnati coperti con ID e attesi indipendenti; criteri tecnici verificati nei task senza UC. Test esistenti non cambiati senza motivazione.
- Controlli locali documentati e CI verde; review umana indipendente, autore in grado di spiegare il codice.
- PR con riferimenti al task, modelli, requisiti e test; modelli aggiornati nella stessa PR se variazioni approvate. Merge umano e stato YouTrack aggiornato.

## Monitoraggio PM
Registrare uso dell'agente, tentativi, PR approvate al primo giro, giri di review, frame coperti sul totale assegnato, primo esito CI, difetti post-merge e modifiche ai modelli. Indicatori di processo, non punteggi personali. Label GitHub facoltative per visualizzare fasi: `task-agente`, `fase:piano`, `fase:implementazione`, `fase:test`; nessuna label avvia un LLM.
