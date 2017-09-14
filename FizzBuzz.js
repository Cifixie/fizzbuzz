export default function* fizzBuzz() {
  var current = 1;
  do {
    yield current++;
  } while(true);
};
