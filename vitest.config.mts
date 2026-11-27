import { defineConfig } from 'vitest/config';
export default defineConfig({ test: { include: ['tests/unit/**/*.test.ts'], environment: 'node', env: { LLM_PROVIDER_MODE: 'mock' }, coverage: { provider: 'v8' } } });
