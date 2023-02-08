// 1
// function makeUser() {
//   return {name: "John",ref: this}
// };
// let user = makeUser();
// console.log(user.ref.name); // undefined

// 2
// let calculator = {
//   a: null,
//   b: null,
//   read() {
//     this.a = +prompt("a ni kiriting:");
//     this.b = +prompt("b ni kiriting:");
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// 3
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     console.log(this.step);
//   },
// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// 4
// let obj = {};
// function A() {
// 	return obj;
// }
// function B() {
// 	return obj;
// }
// let a = new A();
// let b = new B();

// console.log(a === b);