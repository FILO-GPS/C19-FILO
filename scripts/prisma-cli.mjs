import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const backendDir = fileURLToPath(new URL('../backend/', import.meta.url));
const require = createRequire(new URL('../backend/package.json', import.meta.url));
const manifestPath = require.resolve('prisma/package.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const bin = typeof manifest.bin === 'string' ? manifest.bin : manifest.bin?.prisma;
if (!bin) throw new Error('Prisma CLI executable not found. Run npm ci.');
export const prismaCli = resolve(dirname(manifestPath), bin);

export function requireLocalDatabase(name) {
  const raw = process.env.DATABASE_URL;
  if (!raw) throw new Error(`DATABASE_URL is required for ${name}.`);
  const url = new URL(raw);
  if (!['postgresql:', 'postgres:'].includes(url.protocol) ||
      url.pathname !== `/${name}` ||
      !['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) {
    throw new Error(`Operation requires local ${name}.`);
  }
}
