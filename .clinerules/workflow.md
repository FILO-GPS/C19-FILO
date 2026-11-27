# Workflow locale Cline
Applicare `AGENTS.md`. Prima di iniziare verificare nel pannello Rules che entrambe le regole siano attive. Un task e un ruolo per sessione; nessuna auto-approvazione di comandi, scritture o accesso esterno. Il TM sceglie il ruolo e fornisce il task e gli artefatti pertinenti.
- Plan: usare `agents/pianificatore.md`. Restituire il piano senza modificare i file; attendere la conferma del TM.
- Act: richiamare `agents/implementatore.md` e fornire il piano approvato. Non avviare Act se manca l'approvazione.
- Tester: nuova sessione, `agents/tester.md`, solo specifiche, frame e interfacce; preferire test prima dei corpi dei metodi o contesto isolato. Il TM controlla il rispetto della separazione.
- Revisore: nuova sessione, `agents/revisore.md`, modelli e diff; sola lettura, nessuna modifica.
- Nessun Git di scrittura, nessuna pubblicazione, niente MCP necessari; usare chiave personale di coding separata dal Gateway. Non includere credenziali o documenti non necessari nel contesto.
- Il TM registra il piano approvato e gli esiti nel task/PR. Se un errore persiste dopo tre tentativi, restituire evidenze e fermarsi. Non aggirare i controlli. Le regole sono procedurali: non conferiscono isolamento o permessi tecnici assoluti.
