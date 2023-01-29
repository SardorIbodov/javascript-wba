// Type convertions
// let a = 1;
// let b = '1.8';
// let c = '1s1'
// console.log(a + b); // 11.8 -> string
// console.log(a + +b); // 2.8 -> number
// console.log(a + +c); // NaN
// Agar raqam bilan raqam bo'lmagan orasida arifmetik amal bajarilsa unda natija NaN(not a number) chiqadi!!!

// Number Contructor -> raqamga aylantiradi
// console.log(Number(b)); // 1 -> number
// console.log(Number(c)); // NaN
 
// Number.parseInt(), parseInt() 
// console.log(Number.parseInt(b)); // 1 -> number
// console.log(Number.parseInt(c)); // 1 -> number
// console.log(parseInt(b)); // 1 -> number
// console.log(parseInt(c)); // 1 -> number

// Number.parseFloat(), parseFloat()
// console.log(Number.parseFloat(b)); // 1.8 -> number
// console.log(Number.parseFloat(c)); // 1 -> number
// console.log(parseFloat(b)); // 1.8 -> number
// console.log(parseFloat(c)); // 1 -> number


// Boolean Contructor -> boolean ga aylantiradi
// console.log(Boolean(1)); // true
// console.log(Boolean("0")); // true
// console.log(Boolean(-1)); // true
// true -> 1, "str", " "
// false -> 0, null, undefined, "",


// Arithmetic operators -> +,-,*,/,%,**
// console.log(3 + 4); // 7
// console.log(3 - 4); // -1
// console.log(3 * 4); // 12
// console.log(3 / 4); // 0.75
// console.log(3 % 4); // 3
// console.log(3 ** 4); // 81
// console.log('1' == 1) // true => compares only value 
// console.log('1' === 1) // false => compares value and data type


// Increment, Decrement => (++) -> +1 / (--) -> -1
// let a = 1;
// a++ // post increment
// ++a // pre increment
// a-- // post decrement
// --a // pre decrement
// console.log(a) // 1

// Abbreviations => +=, -=, *=, /=
// let a = 10;
// console.log(a *= 5) // 50

// Comparision => ==, ===, !=, !==, <=, >=, <==, >==

// Logical Operators => ||, &&, !
// let login = true;
// let password = false;
// console.log(login && password && "Welcome to your account");

// let admin = false;
// let ceo = false;
// console.log(admin || ceo || "Close");