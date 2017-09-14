import fizzBuzz from './fizzbuzz'
import {repeat} from './utils'

test('Test first 15 numbers', () => {
  const fb = fizzBuzz();
  const exceptions = {
    3: 'Fizz',
    5: 'Buzz',
    6: 'Fizz',
    9: 'Fizz',
    10: 'Buzz',
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
