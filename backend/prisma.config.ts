import { defineConfig } from 'prisma/config';

// Gli script caricano l'ambiente locale o di test prima di avviare Prisma.
// La generazione del client e la validazione dello schema non richiedono un DB.
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/migrations' },
  datasource: { url: process.env.DATABASE_URL ?? '' },
});
