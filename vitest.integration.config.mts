import { defineConfig } from 'vitest/config';
import { existsSync } from 'node:fs';
if (existsSync('.env.test')) process.loadEnvFile('.env.test');
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl || new URL(databaseUrl).pathname !== '/filo_test' || !['localhost', '127.0.0.1', '[::1]'].includes(new URL(databaseUrl).hostname)) {
  throw new Error('Integration tests require a dedicated filo_test database.');
}
export default defineConfig({ test: { include: ['tests/integration/**/*.test.ts'], environment: 'node', env: { DATABASE_URL: databaseUrl, LLM_PROVIDER_MODE: 'mock' }, fileParallelism: false, testTimeout: 30000 } });
