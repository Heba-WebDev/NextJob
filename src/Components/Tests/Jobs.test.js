import { describe, expectTypeOf, it } from 'vitest';
import Jobs from '../Jobs';

describe('Jobs', () => {
  it('should render', () => {
    expectTypeOf(Jobs).toBeFunction();
  });
});
