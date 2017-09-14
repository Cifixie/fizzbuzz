import fizzBuzz from './fizzBuzz';
import {repeat} from './utils';

const times = Number.parseInt(process.argv.pop()) || 30;
const fb = fizzBuzz();
repeat(times)(() => console.log(fb.next().value));
