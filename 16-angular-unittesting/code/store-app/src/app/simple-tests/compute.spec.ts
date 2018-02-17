import { compute } from './compute';

// test suite - group of related tests
xdescribe('compute', () => {
  // spec or a test
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment the input if is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
