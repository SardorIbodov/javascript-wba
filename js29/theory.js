//! ownKeys(target)
// let user = {
//   login: "wba",
//   _pw: 1234,
// };
// let proxy = new Proxy(user, {
// 	ownKeys(target) {
// 		return Object.keys(target).filter(v => !v.startsWith("_"));
// 	}
// });
// for(let keys in proxy) {
// 	console.log(keys);
// }

//! has(target, prop)
// let range = {
//   from: 1,
//   to: 10,
// };
// let proxy = new Proxy(range, {
//   has(target, prop) {
//     return target.from <= prop && prop <= target.to;
//   },
// });
// console.log(90 in proxy);
// console.log(9 in proxy);

//! Reflect
//* Reflect.set
// let user = {
// 	login: "wba",
// 	_pw: 1234
// }
// Reflect.set(user, "title", "IT center");
// console.log(user);
//* Reflect.get
// let user = {
// 	login: "wba",
// 	_pw: 1234
// }
// console.log(Reflect.get(user, "login"));

//! Reference 
// let user = {
// 	login: "wba",
// 	_pw: 1234,
// 	get() {
// 		console.log(this.login, this._pw);
// 	}
// }
// data = user.get;
// data.call(user);