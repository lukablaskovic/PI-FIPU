function Ackermann(m, n) {
  if (m == 0) {
    return n + 1;
  } else if (m > 0 && n == 0) {
    return Ackermann(m - 1, 1);
  } else {
    return Ackermann(m - 1, Ackermann(m, n - 1));
  }
}
console.log(Ackermann(3, 2));
