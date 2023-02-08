// Object in object -> challenge
// let grandfather = {
// 	name: "Eshmat",
// 	age: 80,
// 	child: {
// 		name: "Toshmat",
// 		age: 50,
// 		child: {
// 			name: "Beshmat",
// 			age: 20
// 		}
// 	}
// }
// let calcAge = obj => {
// 	let totalAge = 0;
// 	while(obj) {
// 		totalAge += obj.age;
// 		obj = obj.child;
// 	}
// 	return totalAge;
// }
// console.log(calcAge(grandfather));

// let obj1 = {name: "Sardor"};
// let obj2 = obj1;
// obj1.name = "Nodir";
// obj1 = {name: "Dilshod"}; // Umuman boshqa reference beradi!!!
// console.log(obj1);
// console.log(obj2);

// Garbage Collection =>
// let obj1 = {name: "Sardor"};
// obj1.name = "Nodir";
// obj1 = {name: "Dilshod"} // link o'zgardi => oldingi qiymatlar garbage collectionga tushdi
// obj1 = "Dilshod" // Oldingi qiymat garbage collection ga tushdi

// Function inside Object
// 1
// let person = {
// 	name: "Sardor",
// 	sayHi: function() {
// 		return "Hi";
// 	}
// }
// console.log(person.sayHi()); // Hi
// 2
// let person = {
// 	name: "Sardor",
// 	sayHi() {
// 		return "Hi"
// 	}
// }
// console.log(person.sayHi()); // Hi
// 3
// let name = "Sardor";
// let sayHi = () => "Hi";
// let person = {
// 	name,
// 	sayHi
// }
// console.log(person.name, person.sayHi());

// This =>
// let person = {
// 	name: "Sardor",
// 	sayHi() {
// 		return `Hi ${this.name}`;
// 	}
// }
// console.log(person.sayHi());
// let person = {
// 	name: "Sardor",
// 	sayHi() {
// 		return `Hi ${this.name}`;
// 	}
// }
// let newPerson = person;
// person = null; // garbage collectionga tushdi, oldingi qiymatlar
// console.log(newPerson.sayHi()); // Hi Sardor, ager person.sayHi() bo'lganida error chiqardi!!!

// This does not exist in arrow function!!!
// let person = {
//   name: "Sardor",
//   sayHi: () => {
//     return `Hi ${this.name}`;
//   },
// };
// console.log(person.sayHi());
// True way
// let person = {
//   name: "Sardor",
//   sayHi: function () {
//     return () => {
//       return `Hi ${this.name}`;
//     };
//   },
// };
// console.log(person.sayHi()());

// Symbols as a key
// let id = Symbol("id");
// let person = {
// 	name: "Sardor",
// 	[id]: 2003 // key = Symbol("id")
// }

// Destructure
// let schoolName = 20;
// let school = {
//   schoolName: 19,
//   schoolLocation: "Karshi",
//   room: {
//     roomName: "11A",
//     roomLocation: "2nd floor",
//     desk: {
//       deskName: "deskN2",
//       deskLocation: "2nd row",
//     },
//   },
// };
// let {
//   schoolName: nameOfSchool, // changing the name of the key
//   schoolLocation,
//   room: {
//     roomName,
//     roomLocation,
//     desk: { deskName, deskLocation },
//   },
// } = school;
// console.log(nameOfSchool);

// Spread operator
// let school = {
// 	schoolName: "19-maktab",
// 	schoolLocation: "Qarshi",
// }
// let university = {
// 	univerName: "TATU",
// 	univerLocation: "Tashkent"
// }
// let education = {...school, ...university};
// console.log(education);

// Editing an object with ...
// let person = {
// 	name: "Eshmat",
// 	age: 50,
// }
// person = {...person, name: "Toshmat", age: 20};
// console.log(person);

// Optional chaining
// let person = {
// 	name: "Sardor",
// 	age: 19
// }
// console.log(person.info); // undefined
// console.log(person.info.detail); // error
// To handle the error we use optinal chaining
// console.log(person.info?.detail); // undefined

// Object.keys(), Object.values(), Object.entries()
// let person = {
// 	name: "Sardor",
// 	age: 19
// }
// console.log(Object.keys(person)); // ["name", "age"]
// console.log(Object.values(person)); // ["Sardor", 19]
// console.log(Object.entries(person)); // [["name", "Sardor"], ["age", 19]]

