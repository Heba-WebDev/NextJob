/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, expectTypeOf, it } from 'vitest';
import Jobs from '../Jobs';
import Job from '../Job';

describe('Jobs', () => {
  it('should render', () => {
    expectTypeOf(Jobs).toBeFunction();
  });

  it('should render Job component', () => {
    expect(Job).toBeDefined();
  });
});
