import {repeat, isDividedBy } from './utils'

test('repeat calls given function X -times', () => {
  const fn = jest.fn();
  const expectedTimes = 7;
  repeat(expectedTimes)(fn);
  expect(fn).toHaveBeenCalledTimes(expectedTimes);
});

test('repeat calls given function X -times', () => {
  const fn = jest.fn();
  const expectedTimes = 7;
  let indexCounter = 1;
  repeat(expectedTimes)((a) => {
    expect(a).toBe(indexCounter++);
  });
});

test('isDividedBy returns whenTrue if reminder is 0', () => {
  let expected = 'true';
  let actual = isDividedBy(6,3)(expected, 'false');
  expect(actual).toBe(expected);
});
test('isDividedBy returns whenFalse if reminder is not 0', () => {
  let expected = 'false';
  let actual = isDividedBy(7,3)('true', expected);
  expect(actual).toBe(expected);
});
