//! Generator functions
//* function* generator() {}
//* function *generator() {}

//! yield => like a return
// function* getData() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let generator = getData();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// let gr = getData();
// console.log(gr.next());

//! loop with generator functions
// for(let value of generator) {
// 	console.log(value);
// }
// console.log([...gr]);

//! problem while CRUD
// let users = [
// 	{id: 1, name: "Eshmat1"},
// 	{id: 2, name: "Eshmat2"},
// 	{id: 3, name: "Eshmat3"},
// 	{id: 4, name: "Eshmat4"},
// 	{id: 5, name: "Eshmat5"},
// 	{id: 6, name: "Eshmat6"},
// 	{id: 7, name: "Eshmat7"},
// ]
// const addUser = (name) => {
// 	users = [...users, {id: users.length + 1, name: name}];
// }
// const deleteUser = id => {
// 	users = users.filter(v => v.id !== id);
// }

// deleteUser(3);
// addUser("Gulbashakar1");
// deleteUser(7);
// addUser("Gulbashakar2");
// addUser("Gulbashakar3");

// console.log(users);

//! usage of generator function
// function* idGenerator() {
//   let i = 0;
//   while (true) {
//     yield ++i;
//   }
// }
// let users = [
//   { id: 1, name: "Eshmat1" },
//   { id: 2, name: "Eshmat2" },
//   { id: 3, name: "Eshmat3" },
//   { id: 4, name: "Eshmat4" },
//   { id: 5, name: "Eshmat5" },
//   { id: 6, name: "Eshmat6" },
//   { id: 7, name: "Eshmat7" },
// ];
// const addUser = (name) => {
//   users = [...users, { id: users.length + 1, name: name }];
// };
// const deleteUser = (id) => {
//   users = users.filter((v) => v.id !== id);
// };
// addUser("Gulbashakar1");
// addUser("Gulbashakar2");
// addUser("Gulbashakar3");
// deleteUser(1);
// addUser("Gulbashakar4");
// addUser("Gulbashakar5");
// deleteUser(6)
// addUser("Gulbashakar6");
// console.log(users);

//! generator return
// function* Generator() {
//   let id = 0;
//   while (true) {
//     yield ++id;
//     if (id === 3) return id;
//   }
// }
// let generator = Generator();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//! generator parameter
// function* Generator(param) {
//   for (let item of param) {
//     yield item;
//   }
// }
// let generator = Generator([1, 3, 5, 7, 9]);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//! extra
// function* Generator() {
//   let i = 0;
//   while (true) {
//     let gn = yield ++i;
//     if (gn) i += gn;
//   }
// }

// let generator = Generator();
// console.log(generator.next());
// console.log(generator.next(3));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
