import {fizzBuzz, buildFizzBuzz} from './fizzBuzz';
import {repeat} from './utils';

const times = 30;
const number = Number.parseInt(process.argv.pop());
if (number) {
  console.log(buildFizzBuzz(number))
}
else {
  const fb = fizzBuzz();
  repeat(30)(() => console.log(fb.next().value));  
}
