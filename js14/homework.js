// factorial
const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// getSum()
const getSum = (n) => {
  if (n < 1) return 0;
  else return n + getSum(n - 1);
};

// fibonacci
const fibonacci = (n) => {
  if (n < 2) return 1;
  else return fibonacci(n - 2) + fibonacci(n - 1);
};

// other way
let arr = [0, 1];
const fibonacciOtherWay = (n) => {
    if(!n) return arr;
    else {
        arr.push(arr[arr.length - 1]+arr[arr.length - 2]);
        return fibonacciOtherWay(n - 1);
    }
}
console.log(fibonacciOtherWay(10));
