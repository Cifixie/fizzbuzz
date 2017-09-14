import {fizzBuzz, buildFizzBuzz} from '../src/fizzbuzz'
import {repeat} from '../src/utils'

test('Test first 15 numbers', () => {
  const fb = fizzBuzz();
  const exceptions = {
    1: '1',
    2: '2',
    3: 'Fizz',
    4: '4',
    5: 'Buzz',
    6: 'Fizz',
    9: 'Fizz',
    10: 'Buzz',
    11: '11',
    12: 'Fizz',
    15: 'Fizz Buzz'
  };
  repeat(15)((a) => {
    let value = fb.next().value;
    if (exceptions.hasOwnProperty(a)) {
      expect(value).toBe(exceptions[a]);
    }
  });
});

test('buildFizzBuzz should return "Fizz Buzz" with 15', () => {
  expect(buildFizzBuzz(15)).toBe("Fizz Buzz");
});
test('buildFizzBuzz should return "Fizz" with 3', () => {
  expect(buildFizzBuzz(3)).toBe("Fizz");
});
test('buildFizzBuzz should return "Buzz" with 5', () => {
  expect(buildFizzBuzz(5)).toBe("Buzz");
});
test('buildFizzBuzz should return given number as a string if not divided by 3 or 5', () => {
  expect(buildFizzBuzz(2)).toBe("2");
  expect(buildFizzBuzz(7)).toBe("7");
  expect(buildFizzBuzz(11)).toBe("11");
});
