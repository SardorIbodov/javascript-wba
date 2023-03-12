// let user = {
//   name: "wba",
//   title: "academy",
//   founded: 2019,
//   branches: 5,
// };
// Object.defineProperty(user, "name", {"writable": false})
// user.name = "webbrain";
// console.log(user);

// remove(key)
// Object.prototype.remove = function (key) {
//   delete this[key];
//   return this;
// };
// console.log(user.remove("branches"));

// set(key, ability, value)
let user = {
  name: "wba",
  title: "academy",
};
Object.prototype.set = function (key, ability, boolean) {
  console.log(this, key, ability, boolean);
  return Object.defineProperty(this, key, { [ability]: boolean });
};

user.set("name", "writable", false);
console.log(Object.getOwnPropertyDescriptor(user, "name"));
