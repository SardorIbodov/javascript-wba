//! Proxy is used with non-primitive data types
//* new Proxy(target, configuration)

// let user = {
//   name: "webbrain",
//   _stir: 123456,
// };
// let proxy = new Proxy(user, {});
// console.log(user);
// console.log(proxy);

//! get(target, property, receiver)
// let user = {
//   name: "webbrain",
//   _stir: 123456,
// };
// let proxy = new Proxy(user, {
//   get(target, prop) {
// 		if(prop.startsWith("_")) {
// 			return "You cannot access private info!"
// 		}
// 		return target[prop];
//   },
// });
// console.log(user.name);
// console.log(proxy.name);
// console.log(user._stir);
// console.log(proxy._stir);

//! get(target, property, value, receiver)
// let user = {
//   name: "webbrain",
//   _stir: 123456,
// };
// let proxy = new Proxy(user, {
// 	set(target, prop, value) {
// 		if(prop === "_stir") return false;
// 		else {
// 			target[prop] = value;
// 			return true;
// 		}
// 	}
// });
// proxy.name = "wba";
// proxy._stir = 654321;
// console.log(proxy);
