// Creating an object
// 1 => Object Constructor
// let obj1 = new Object();
// console.log(obj1);
// 2 => Object's Create method
// let obj1 = Object.create(null);
// console.log(obj1);
// 3 => Object literal
// let obj1 = {};
// console.log(obj1);

// Accessing object's elements
// let person = {
// 	name: "Sardor",
// 	"full name": "Ibodov Sardor Gulmurodovich",
// 	age: 19,
// 	0: true
// }
// 1 => . => static way
// console.log(person.name);
// console.log(person."full name"); // => error!
// console.log(person.0); // => error!
// 2 => [""] => dynamic way
// console.log(person["name"]);
// console.log(person["full name"]); // => "Ibodov Sardor Gulmurodovich"
// console.log(person.[0]); // => true
// console.log(person.["0"]); // => true
// let name = "age";
// console.log(person.name); // => "Sardor"
// console.log(person[name]); // === console.log(person["age"])

// Changing, creating and deleting the elements of object
// let person = {
// 	name: "Sardor",
// 	age: 19,
// 	isMarried: false
// }
// Changing
// 1
// person.isMarried = true;
// console.log(person); // true
// 2
// person["isMarried"] = true;
// console.log(person); // true
// Creating
// person.location = "Tashkent";
// console.log(person); // { name: 'Sardor', age: 19, isMarried: false, location: 'Tashkent' }
// Deleting
// delete person.isMarried;
// console.log(person); // { name: 'Sardor', age: 19 }

// Object.freeze() => stops any editings in object
// If we use this method, we can't melt it anymore =)
// let person = {
//   name: "Sardor",
//   age: 19,
//   isMarried: false,
// };
// Object.freeze(person);
// person.name = "Nodir";
// delete person.age;
// console.log(person); // { name: 'Sardor', age: 19, isMarried: false }

// Object.seal() => stops adding or deleting elements in/to object
// let person = {
//   name: "Sardor",
//   age: 19,
//   isMarried: false,
// };
// Object.seal(person);
// delete person.name;
// person.location = "Tashkent";
// person.isMarried = true;
// console.log(person); // { name: 'Sardor', age: 19, isMarried: true }

// structuredClone() => clones the objects without copying its reference(link)
// let person = {
//   name: "Sardor",
//   age: 19,
//   isMarried: false,
// };
// let adult = structuredClone(person);
// let human = person;
// console.log(person === adult); // false
// console.log(person === human); // true

// Abbriviation
// let name = "Sardor";
// let age = 19;
// let person = {
// 	name, // name: name
// 	age // age: age
// }
// console.log(person); // { name: 'Sardor', age: 19 }

// in => checks the key weither exists or not in the object
// let person = {
// 	name: "Sardor",
// 	age: 19
// }
// console.log("name" in person); // true
// console.log("isMarried" in person); // false

// Object.assign() => reassigns the object
// let a = {name: "a"};
// let b = {symbol: "b"};
// let c = {};
// Object.assign(c, a, b, {right: true});
// console.log(c);

// for in
// let person = {
// 	name: "Sardor",
// 	age: 19,
// 	location: "Tashkent",
// 	job: "student",
// 	course: 3
// }

// for(let key in person) {
// 	console.log(key + ":", person[key]);
// }
