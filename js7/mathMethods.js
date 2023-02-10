// Math.abs()
let myAbs = (num) => (num < 0 ? +num * -1 : +num);

// Math.cbrt()
let myCbrt = (num) => (num >= 0 ? num ** (1 / 3) : "Try again");

// Math.ceil()
let myCeil = (num) => (num >= 0 ? parseInt(num) + 1 : parseInt(num));

// Math.floor
let myFloor = (num) => (num >= 0 ? parseInt(num) : parseInt(num) - 1);

// Math.max
let myMax = (arr) => {
  let max = arr[0];
  arr.forEach((el) => (max < el ? (max = el) : max));
  return max;
};

// Math.min
let myMin = (arr) => {
  let min = arr[0];
  arr.forEach((el) => (min > el ? (min = el) : min));
  return min;
};

// Math.pow()
let myPow = (num, deg) => num ** deg;

// Math.round()
let myRound = (num) =>
  num >= 0
    ? num - parseInt(num) >= 0.5
      ? parseInt(num) + 1
      : parseInt(num)
    : parseInt(num) - num >= 0.5
    ? parseInt(num) - 1
    : parseInt(num);

// Math.sign()
let mySign = (num) => (num != 0 ? (num > 0 ? 1 : -1) : 0);

// Math.sqrt()
let mySqrt = (num) => (num >= 0 ? num ** (1 / 2) : "Try again");

// Math.trunc()
let myTrunc = num => parseInt(num);