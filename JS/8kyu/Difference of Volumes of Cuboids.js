const findDifference = (a, b) => {
  let first = a[0] * a[1] * a[2];
  let second = b[0] * b[1] * b[2];
  if(first > second) {
    return first - second;
  } else if(second > first) {
    return second - first;
  } else {
    return 0;
  }
}