'use strict';

const isDividedBy = (x,n) => (whenTrue, whenFalse) => x % n === 0 ? whenTrue : whenFalse;
const repeat = times => (a, i) => {
  i = i || 0;
  if (i++ < times) {
    a(i);
    repeat(times)(a, i);
  }
};

const getFizzIfDividedByThree = (n) => isDividedBy(n,3)('Fizz', '');
const getBuzzIfDividedByFive = (n) => isDividedBy(n,5)('Buzz', '');
const buildFizzBuzz = (n) => (getFizzIfDividedByThree(n) + ' ' + getBuzzIfDividedByFive(n)).trim() || n.toString();

function* fizzBuzz() {
  let current = 1;
  while(true) yield buildFizzBuzz(current++);
}

const times = Number.parseInt(process.argv.pop()) || 30;
const fb = fizzBuzz();
repeat(times)(() => console.log(fb.next().value));
