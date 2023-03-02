// new Map()
// let obj = {};
// let map = new Map();
// obj.name = "webbrain";
// map.name = "webbrain";
// console.log(obj, obj.name);
// console.log(map, map.name, map.size);

// set(), get(), has(), delete(), clear()
// let map = new Map();
// map.name = "webbrain";
// map.set(false, "IT center");
// map.set(123, "numbers");
// map.set([1,2,3], "array");
// console.log(map, map.name, map.get(false));
// console.log(map.has(false));
// map.delete(false);
// console.log(map);
// map.clear();
// console.log(map);

// iteration
// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
//   ["founded", 2019],
// ]);
// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// for(let v of map) {
// 	console.log(v);
// }
// for(let v of map.entries()) {
// 	console.log(v);
// }
// for(let v of map.keys()) {
// 	console.log(v);
// }
// for(let v of map.values()) {
// 	console.log(v);
// }

// generator function
// let gen = map.entries();
// gen.next(); // done: false
// gen.next(); // done: false
// gen.next();	// done: false
// console.log(gen.next()); // done: true

// map with forEach
// map.forEach(e => console.log(e)); // returns values

// map => object
// console.log(Object.fromEntries(map));

// new Set()
// let set = new Set();
// console.log(set);

// add(), has(), delete(), clear()
// let obj = {name: "webbrain"};
// set.add(obj);
// console.log(set);
// console.log(set.has(obj));
// set.add("eshmat");
// set.add("eshmat");
// set.add("eshmat");
// set.add("toshmat");
// console.log(set);
// set.add("1");
// set.add("2");
// set.add("3");
// set.add("4");
// set.add("5");
// for(let v of set) {
// 	console.log(v);
// }
// set.forEach(v => console.log(v))

// new Map, WeakMap, new Set, WeakSet()
// let map = new Map([
// 	["name", "Sardor"],
// 	["age", 19],
// 	["isMarried", false],
// ]);

// map = null;

// let weakMap = WeakMap([
// 	["name", "Sardor"],
// 	["age", 19],
// 	["isMarried", false],
// ])

// weakMap = null;
// We can not clear the value of map/set in heap if we use new Map()/Set();
// If we use WeakMap()/WeakSet(), it will be deleted automatically