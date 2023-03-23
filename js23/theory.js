//! Static variable
// class Webbrain {
// 	age = 0;
// 	static year = 0;
// 	showAge() {
// 		console.log(++this.age);
// 	}
//   showYear() {
// 		console.log(++Webbrain.year);
// 	}
// }
// let student1 = new Webbrain();
// let student2 = new Webbrain();
// student1.showAge(); // 1
// student1.showAge(); // 2
// student2.showAge(); // 1
// student2.showAge(); // 2
// student1.showYear(); // 1
// student2.showYear(); // 2
// student1.showYear(); // 3
// student2.showYear(); // 4

//! Static method
// class Webbrain {
// 	age = 0;
// 	static year = 0;
// 	showAge() {
// 		console.log(++this.age);
// 	}
//   static showYear() {
// 		console.log(++this.year);
// 	}
// }
// Webbrain.showYear(); // 1
// Webbrain.showYear(); // 2
// Webbrain.showYear(); // 3
// Webbrain.showYear(); // 4

//! Public vs protected; "_" => public; "#" => protected
// class Protected {
// 	_login = "student";
// 	#id = 12345678; // we can only access with getter
// 	get getId() {
// 		console.log(this.#id);
// 	}
// 	set setNewId(id) {
// 		this.#id = id;
// 	}
// }
// let student = new Protected;
// console.log(student._login);
// student.getId;
// student.setNewId = 87654321;
// student.getId;

//! Built-in constructors
// class myArray extends Array {};
// let array = new myArray();
// array.push(1);
// console.log(array.length);

//! instanceof
// let array = [];
// let object = {};
// let string = new String();
// console.log(array instanceof Array);
// console.log(array instanceof Object);
// console.log(object instanceof Array);
// console.log(object instanceof Object);
// console.log(string instanceof Array);
// console.log(string instanceof Object);
// console.log(string instanceof String);

//! mixins => it is a process, assigning object to prototype of class
// class Users {
// 	getName() {
// 		console.log("From Users class");
// 	}
// }
// let object = {
// 	info() {
// 		console.log("From object");
// 	}
// }
// Object.assign(Users.prototype, object);
// let user1 = new Users();
// user1.info();