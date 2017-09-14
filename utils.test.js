import {repeat} from './utils'

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
