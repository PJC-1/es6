const fib = N => {
  // start array with 0 and 1
  let arr = [0, 1];
  // initialize the loop at 2 for the length of N
  for(let i = 2; i <= N; i++) {
    // push the sum of the last two numbers in the array
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  // return the N index value of the array
  return arr[N];
};
// returns 3
fib(4)
