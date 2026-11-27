import { describe, expect, it } from 'vitest';
import { GET } from '../../backend/app/api/health/route';
describe('Bootstrap: health route (not a RAD test frame)', () => {
  it('returns HTTP 200 with status ok', async () => {
    const response = GET();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: 'ok' });
  });
});
