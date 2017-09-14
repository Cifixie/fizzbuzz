import {isDividedBy} from './utils'

const getFizzIfDividedByThree = (n) => isDividedBy(n,3)('Fizz', '');
const getBuzzIfDividedByFive = (n) => isDividedBy(n,5)('Buzz', '');
const buildFizzBuzz = (n) => (getFizzIfDividedByThree(n) + ' ' + getBuzzIfDividedByFive(n)).trim() || n.toString();

export default function* fizzBuzz() {
  let current = 1;
  while(true) yield buildFizzBuzz(current++);
};
