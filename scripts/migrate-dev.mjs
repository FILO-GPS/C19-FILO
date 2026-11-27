import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { backendDir, prismaCli, requireLocalDatabase } from './prisma-cli.mjs';

const envPath = join(backendDir, '.env');
if (existsSync(envPath)) process.loadEnvFile(envPath);
requireLocalDatabase('filo_dev');
// Accetta solo opzioni di migrazione che non cambiano la connessione o lo schema.
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--create-only') continue;
  if (args[i] === '--name' && /^[a-zA-Z0-9_-]+$/.test(args[i + 1] ?? '')) { i++; continue; }
  if (/^--name=[a-zA-Z0-9_-]+$/.test(args[i])) continue;
  throw new Error('Allowed options: --name <name>, --create-only.');
}
const result = spawnSync(process.execPath, [prismaCli, 'migrate', 'dev', '--config', 'prisma.config.ts', ...args], {
  cwd: backendDir, stdio: 'inherit',
});
process.exit(result.status ?? 1);
