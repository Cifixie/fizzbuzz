import fizzBuzz from '../src/fizzbuzz'
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
