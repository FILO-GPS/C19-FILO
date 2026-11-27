import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { backendDir, prismaCli, requireLocalDatabase } from './prisma-cli.mjs';

const envPath = fileURLToPath(new URL('../.env.test', import.meta.url));
if (existsSync(envPath)) process.loadEnvFile(envPath);
requireLocalDatabase('filo_test');
const result = spawnSync(process.execPath, [prismaCli, 'migrate', 'deploy', '--config', 'prisma.config.ts'], {
  cwd: backendDir, stdio: 'inherit', env: { ...process.env, LLM_PROVIDER_MODE: 'mock' },
});
process.exit(result.status ?? 1);
