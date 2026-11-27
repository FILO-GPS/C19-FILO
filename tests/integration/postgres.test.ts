import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { expect, it } from 'vitest';

const backendDir = resolve('backend');
const backendRequire = createRequire(resolve(backendDir, 'package.json'));
const manifestPath = backendRequire.resolve('prisma/package.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
  bin: string | { prisma: string };
};
const prismaCli = resolve(
  dirname(manifestPath),
  typeof manifest.bin === 'string' ? manifest.bin : manifest.bin.prisma,
);

it('Bootstrap: Prisma CLI connects to filo_test (not a RAD frame)', () => {
  expect(() =>
    execFileSync(
      process.execPath,
      [prismaCli, 'db', 'execute', '--stdin', '--config', 'prisma.config.ts'],
      {
        cwd: backendDir,
        input:
          "DO $$ BEGIN IF current_database() <> 'filo_test' THEN RAISE EXCEPTION 'Wrong test database'; END IF; END $$;",
        encoding: 'utf8',
        env: { ...process.env, LLM_PROVIDER_MODE: 'mock' },
        timeout: 25000,
      },
    ),
  ).not.toThrow();
});
