# Indice degli artefatti progettuali

I documenti approvati sono la specifica, non un suggerimento. I TM caricano e verificano le conversioni; i PM approvano eventuali revisioni. Conservare ID, priorità, nomi, tipi, molteplicità, sequenze e condizioni. Nessun artefatto di esempio va spacciato per quello ufficiale. Non caricare dati personali superflui; gli originali integrali solo nel repository privato autorizzato.

| Percorso | Contenuto da mantenere | Formato |
| --- | --- | --- |
| `originali/` | RAD, SDD, Design Pattern Document, Category Partition e specifiche tecniche approvate | Originale/PDF, se autorizzato |
| `rad/requisiti-funzionali.md` | RF e relative priorità (High/Medium/Low) | Markdown |
| `rad/requisiti-non-funzionali.md` | RNF | Markdown |
| `rad/glossario.md` | Terminologia del dominio | Markdown |
| `rad/uc/` | Un file per Use Case, nome con ID reale del RAD | Markdown |
| `modelli/class.puml` | Class Diagram (o più file se suddiviso nel RAD, indicizzati) | PlantUML |
| `modelli/sequence/` | Sequence Diagram con ID coerenti | PlantUML |
| `modelli/statechart/`, `modelli/activity/` | Statechart e Activity Diagram | PlantUML |
| `modelli/mockups/` | Mockup pertinenti | Immagini originali |
| `sdd/architecture.md` | Architettura e sottosistemi | Markdown |
| `sdd/component.puml`, `sdd/deployment.puml` | Component e Deployment Diagram | PlantUML |
| `sdd/design-goals.md` | DG, trade-off e riferimenti RNF | Markdown |
| `design-patterns/` | Design pattern documentati, adozione opzionale | Markdown/PlantUML |
| `test/` | Category Partition per UC, test frame, scelte/vincoli, attesi, ID | Markdown |
| `specifiche-tecniche/` | Stack approvato, istruzioni e scelta LLM | Markdown |

Per ogni file derivato indicare origine (documento, versione, sezione/pagina), data e revisore. Se un diagramma nasce in altro formato testuale leggibile, mantenere il sorgente e aggiornare questo indice. Evitare duplicazioni non necessarie. I modelli approvati modificati si aggiornano insieme al codice nella relativa PR; per gli originali seguire anche il processo documentale del team.

La Category Partition è progettata da persone sugli UC. Il codice può essere organizzato per funzionalità e sottosistemi: il task specifica RF/RNF e UC pertinenti, oppure criteri tecnici per task infrastrutturali. La copertura High è requisito del rilascio, non un vincolo che ogni singolo task realizzi tutti gli UC.
