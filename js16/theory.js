//! old var
// console.log(a); // Cannot access "a" before initialization
// let a = "wba";

// console.log(a); // undefined
// var a;

// console.log(a); // undefined
// var a = 10;

// var a = 10;
// function get() {
// 	var a = 20;
// }
// get();
// console.log(a); // 10

// var a = 10;
// function get() {
// 	a = 20;
// }
// get();
// console.log(a); // 20

//! IIFE => Immediately invoked function expression
// (function() {
// 	var firstName = "webbrain";
// 	console.log(firstName); // webbrain
// })()
// console.log(firstName); // firstName is not defined
// var a = 10;
// (function() {
// 	console.log(a); // 10
// })();

//! Global object
//* window, globalThis => for JS
//* global => for nodeJS
// var a = 10
// console.log(globalThis);
// console.log(global);
// console.log(this);
// (function () {
// 	globalThis.a = 10;
// })()
// console.log(a); // 10

//! Function Object
// function getData(a, b, ...rest) {
// 	console.log("hey js");
// }
// console.log(getData.name);
// console.log(getData.length);

// function person() {
// 	person.firstName = "Sardor";
// };
// person.age = 19;
// person()
// person.getData = () => ([person.name, person.age]);
// console.log(person.firstName);
// console.log(person.getData());

//! NFE => Named Function Expression
// const getData = function anotherName() {
//   console.log("hello, js");
//   // anotherName(); // infinity
// };
// console.log(getData());
// console.log(getData());
// console.log(anotherName()); // anotherName is not defined

//! new Function()
// const getName = new Function(`let name = "Sardor"; return name`);
// console.log(getName());

//! new Function() with closure
// function getData() {
// 	let data = "wba";
// 	return new Function(`console.log(data)`)
// }
// getData()(); // data is not defined