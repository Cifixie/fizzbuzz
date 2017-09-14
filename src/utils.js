export const isDividedBy = (x,n) => (whenTrue, whenFalse) => x % n === 0 ? whenTrue : whenFalse;
export const repeat = times => (a, i = 1) => {
  if (i <= times) {
    a(i);
    repeat(times)(a, ++i);
  }
}
