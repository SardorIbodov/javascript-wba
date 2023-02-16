// Array
// 1
// let arr = [
//   2,
//   false,
//   undefined,
//   null,
//   function sayHi() {},
//   Symbol("id"),
//   {},
//   [],
// ];
// console.log(arr);
// 2
// let arr = new Array(5);
// console.log(arr); // [ <5 empty items> ]
// console.log(arr.length); // 5
// let arr = new Array("5");
// console.log(arr); // [ "5" ]
// console.log(arr.length); // 1
// let arr = new Array(5,4,3);
// console.log(arr); // [ 5, 4, 3 ]
// console.log(arr.length); // 3
// let arr = new Array({name: "Sardor"}, {age: 19});
// console.log(arr); // [{name: "Sardor"}, {age: 19}]
// console.log(arr.length); // 2

// Length, Accessing
// let arr = [
//   2,
//   false,
//   undefined,
//   null,
//   function sayHi() {},
//   Symbol("id"),
//   {},
//   [],
// ];
// console.log(arr.length); // 8
// console.log(arr[0]); // 2
// console.log(arr[7]); // []
// console.log(arr.at(0)); // 2
// console.log(arr.at(arr.length - 1)); // []
// console.log(arr.at(-1)); // []
// console.log(arr.at(-2)); // {}

// Adding an element
// let arr = [];
// arr[0] = 1;
// console.log(arr); // [1]
// console.log(arr.length); // 1
// arr[2] = 1;
// console.log(arr); // [ <2 empty items>, 1 ]
// console.log(arr.length); // 3
// arr[100] = 1;
// console.log(arr); // [ <100 empty items>, 1 ]
// console.log(arr.length); // 101

// Editing an element
// let arr = [1, 2, 3];
// arr[1] = 1;
// console.log(arr); // [1, 1, 3]

// Array => String
// let arr = [1, 2, 3];
// console.log(arr.toString());
// console.log(arr.join("/"));
// console.log(arr.join("*"));

// Adding two array
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1 + arr2); // returns string!!!
// concat()
// arr1 = arr1.concat(arr2, 7, 8, 9);
// [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1);

// Array.isArray()
// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray(1)); // false

// Comparisons
// console.log([] == 0); // true
// console.log([] == null); // false
// console.log([] === 0); // false
// console.log({} == 0); // false
// console.log(0 == null);
// console.log(0 <= null);
// console.log(0 >= null);
// console.log(0 > null);
// console.log(0 < null);

// Loops
// let arr = ["first", "second", "third", "fourth"];
// for
// for(let i = 0; i < arr.length; i++) {
// 	console.log(`${i}: ${arr[i]}`);
// }
// for-in
// for(let index in arr) {
// 	console.log(index);
// }
// for-of
// for(let value of arr) {
// 	console.log(value);
// }

// Methods
// let arr = [0, 1, 2, 3, 4, 5];
// push() => adds new elements from the end of an array
// arr.push(6);
// arr.push("seven");
// console.log(arr);

// pop() -> removes an element from the end of an array
// arr.pop();
// console.log(arr);

// unshift() => adds new elements from the beginning of an array
// arr.unshift(-2, -1);
// console.log(arr);

// shift() -> removes an element from the beginning of an array
// arr.shift();
// console.log(arr);

// splice(start, deleteCount, item) => changes the array
// arr.splice(0);
// console.log(arr); // []
// arr.splice(2); // [0, 1]
// console.log(arr);
// arr.splice(4);
// console.log(arr); // [0, 1, 2, 3]
// arr.splice(1, 3);
// console.log(arr); // [0, 4, 5]
// arr.splice(0, 6);
// console.log(arr); // []
// arr.splice(4, 0, 3.2, 3.4, 3.6, 3.8);
// console.log(arr);

// let arr2 = [-1, -2, -3, -1, -4, -5];
// slice(start, end) => can not change the array, only copy
// console.log(arr2.slice(2, 4));
// console.log(arr2);

// indexOf()
// console.log(arr2.indexOf(-2)); // 1
// console.log(arr2.indexOf(-2, 1)); // 3
// console.log(arr2.lastIndexOf(-1)); // 3
// console.log(arr2.lastIndexOf(-1, 3)); // 3

// split(), join()
// console.log(arr2.join(";").split(";"));

// reverse()
// arr2.reverse();
// console.log(arr2);

// includes()
// console.log(arr2.includes(-3)); // true
// console.log(arr2.includes(3)); // false

