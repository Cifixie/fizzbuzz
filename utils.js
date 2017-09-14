export const repeat = times => (a, i) => {
  i = i || 0;
  if (i++ < times) {
    a(i);
    repeat(times)(a, i);
  }
}
