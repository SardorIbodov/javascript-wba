// Here are some weird things in JS

// 1
// console.log([] !== []); // true

// 2
// console.log(null === 0); // false
// console.log(null > 0); // false
// console.log(null >= 0); // true

// Pass by reference
// let obj = {
// 	a: 1
// }
// function change(object) {
// 	object.a = 100;
// }
// console.log(obj);
// change(obj);
// console.log(obj);

// Pass by value
// let a = 1;
// function edit(num) {
// 	return num * 2;
// }
// console.log(a);
// console.log(edit(a));
// console.log(a);

// console.log([1,2,3] == [1,2,3]); // false

// console.log(isNaN("String")); // true
