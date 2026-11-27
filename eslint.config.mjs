import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/coverage/**',
      '**/next-env.d.ts',
      'backend/src/generated/prisma/**',
    ],
  },
  ...nextVitals,
  ...nextTypescript,
  {
    settings: {
      next: {
        rootDir: ['frontend/', 'backend/'],
      },
    },
  },
];
