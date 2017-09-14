const isDividedBy = (x,n) => string => x % n === 0 ? string : '';

const fb = (number) => isDividedBy(number,3)('Fizz') + ' ' + isDividedBy(number,5)('Buzz');

export default function* fizzBuzz() {
  var current = 1;
  do {
    yield fb(current++).trim();
  } while(true);
};
