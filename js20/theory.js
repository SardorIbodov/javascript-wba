//* Object.getOwnPropertyDescriptor(object, key), Object,defineProperty(object, key, {})
// let user = {
//   name: "webbrain",
//   title: "IT center",
// 	getData() {

// 	}
// };
// write
// delete
// loop
// value

// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user, "name", { writable: false, configurable: false});
// user.name = "wba";
// delete user.name;
// delete user.title;
// console.log(user);
// Object.defineProperty(user, "getData", {enumerable: false});
// for(let key in user) {
// 	console.log(key);
// }

//* Object.preventExtensions(object)
// let user = {
//   name: "webbrain",
//   title: "IT center",
// };
// Object.preventExtensions(user);
// user.founded = 2019;
// console.log(user);

//* Object.seal(object)
// let user = {
//   name: "webbrain",
//   title: "IT center",
// };
// Object.seal(user);
// user.name = "wba";
// delete user.title;
// user.founded = 2019;
// console.log(user);

//* Object.freeze(object)
// let user = {
//   name: "webbrain",
//   title: "IT center",
// };
// Object.freeze(user);
// user.name = "wba";
// delete user.title;
// user.founded = 2019;
// console.log(user);

//* getter, setter
// const user = {
//   name: "webbrain",
//   lastName: "academy",
//   fullName() {
//     console.log(this.name, this.lastName);
//   },
// };
// user.fullName = "eshmat toshmat";
// user.fullName; // error => fullName is not a function

// const user = {
//   name: "webbrain",
//   lastName: "academy",
//   get fullName() {
//     console.log(this.name, this.lastName);
//   },
// 	set fullName(value) {
// 		this.name = value.name;
// 		this.lastName = value.lastName;
//   },
// };
// user.fullName = {name: "eshmat", lastName: "toshmat"}; // set
// user.fullName; // get
