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



