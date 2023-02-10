// Numbers
// number with underscore => it changes nothing, only for incresing readability
// let a = 1_000_000;
// console.log(a + 1); // 1_000_001
// but +"1_000" => NaN

// number with e => the degree (biggest one e500)
// let a = 2e3 // => 2000
// a = 2e-3 // => 0.002
// console.log(a);

// 0.2 + 0.1 !== 0.3 => because of IEEE 754 standart and binary -> decimal
// console.log(0.2 + 0.1 === 0.3); // false

// .toFixed() => converts to a string
// console.log((0.1 + 0.2).toFixed(3)); // 0.300
// console.log(0.123456789.toFixed(1)); // 0.1
// console.log(0.123456789.toFixed(2)); // 0.12
// console.log(0.123456789.toFixed(6)); // 0.123457

// example => eval(number)
// let a = "0.1 + 0.2"
// console.log(parseInt(a)); // 0
// console.log(parseFloat(a)); // 0.1
// console.log(Number(a)); // NaN
// console.log(eval(a)); // 0.30000000000000004
// console.log(eval("2 * 5")); // 10

// 2 => 10
// parseInt(number, binary/decimal/hexdecimal)
// console.log(parseInt(1001, 2)); // 9

// .toString()
// let number = 13;
// console.log(number.toString()); // "13"
// console.log(number.toString(2)); // "1101"
// console.log(number.toString(8)); // "15"
// console.log(number.toString(16)); // "d"

// isNaN()
// console.log(isNaN(null)); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN("0")); // false
// console.log(isNaN(+"3 * 4")); // true
// console.log(isNaN(5 + null)); // false
// console.log(isNaN(5 + undefined)); // true

// Object.is() => same as "==="
// console.log(Object.is("salom", "salom"));
// console.log(Object.is(2, 2));

// toPrecision()
// let num1 = 1.23456789;
// let num2 = 0.0002003456789;
// console.log(num1.toPrecision(5));
// console.log(num2.toPrecision(5));

// Math
// Math.PI => 3.1415....
// console.log(Math.PI); // 3.1415...

// Math.abs() => modul
// console.log(Math.abs(-10)); // 10
// console.log(Math.abs(10)); // 10

// Math.round()
// console.log(Math.round(2.51)); // 3
// console.log(Math.round(2.49)); // 2
// console.log(Math.round(-2.51)); // -3
// console.log(Math.round(-2.49)); // -2

// Math.floor()
// console.log(Math.floor(2.99)); // 2
// console.log(Math.floor(2.01)); // 2
// console.log(Math.floor(-2.99)); // -3
// console.log(Math.floor(-2.01)); // -3

// Math.ceil()
// console.log(Math.ceil(2.51)); // 3
// console.log(Math.ceil(2.49)); // 3
// console.log(Math.ceil(-2.51)); // -2
// console.log(Math.ceil(-2.49)); // -2

// Math.trunc()
// console.log(Math.trunc(2.51)); // 2
// console.log(Math.trunc(2.49)); // 2
// console.log(Math.trunc(-2.51)); // -2
// console.log(Math.trunc(-2.49)); // -2

// Math.random()
// console.log(Math.random());
// console.log(Math.random() * 10); [0 - 10)

// Math.min()
// console.log(Math.min(1,8,2,5,7,6,93,4,85,58,2,4,31)); // 1

// Math.max()
// console.log(Math.max(1,8,2,5,7,6,93,4,85,58,2,4,31)); // 93

// Math.pow()
// console.log(Math.pow(5,3)); // 125

// Math.sqrt()
// console.log(Math.sqrt(9)); // 3

// Math.cbrt()
// console.log(Math.cbrt(27)); // 3

// Math.sign()
// console.log(Math.sign(12)); // 1
// console.log(Math.sign(-12)); // -1
// console.log(Math.sign(0)); // 0
// console.log(Math.sign(-0)); // -0
// console.log(Math.sign("12")); // 1
// console.log(Math.sign("-12")); // -1

