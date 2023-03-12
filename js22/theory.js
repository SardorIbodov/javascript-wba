//! Class => code template for creating objects
// class User {
// 	age = 0;
// 	fullName(name) {
// 		console.log(`${name}, ${++this.age}`);
// 	}
// }
// let user1 = new User();
// let user2 = new User();
// user1.fullName("webbrain");
// user1.fullName("pdp");
// user1.fullName("nt");
// user2.fullName("iSystem")

//! constructor() => once we create object from class, constructor runs automatically;
// class User {
// 	constructor(title) {
// 		console.log(title);
// 	}
// }
// let user1 = new User("webbrain");
// let user2 = new User("digital one");

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	welcomeMessage() {
// 		console.log(`Hi ${this.name}, welcome to Webbrain!`);
// 	}
// }
// let user1 = new User("Eshmat");
// let user2 = new User("Toshmat");
// console.log(typeof User); // function
// console.log(typeof user1); // object
// user1.welcomeMessage();
// user2.welcomeMessage();

//! getter, setter in class
// class User {
//   set printValue(value) {
//     this.value = value;
//   }
//   get printValue() {
//     console.log(`This ${this.value} was written with a help of setter!`);
//   }
// }
// let user1 = new User();
// user1.printValue = "cat";
// user1.printValue;

//! Computed names
// class Animal {
// 	["butter" + "fly"](day) {
// 		console.log(`It can live only ${day} day(s)`);
// 	}
// }
// let animal = new Animal();
// animal.butterfly(1);

//! Inheritance
// class Animal {
// 	showSpeed(speed) {
// 		console.log(`I can run ${speed}km per hour`);
// 	}
// }
// class Rabbit extends Animal {
// 	name = "rabbit"
// 	info() {
// 		console.log(`I'm a/an ${this.name}`);
// 	}
// }
// class Wolf extends Animal {
// 	name = "wolf";
// 	info() {
// 		console.log(`I'm a/an ${this.name}`);
// 	}
// }

// let rabbit = new Rabbit();
// let wolf = new Wolf();
// rabbit.info();
// rabbit.showSpeed(15);
// wolf.info();
// wolf.showSpeed(14);

//! super => with a help of super we can access parent's methods
// class Animal {
// 	title = "parent";
// 	info() {
// 		console.log("You are calling parent");
// 	}
// }
// class Rabbit extends Animal {
// 	info() {
// 		console.log("You are calling child");
// 	}
// }
// let rabbit = new Rabbit();
// rabbit.info();

//! Overriding a constructor of a parent
//* parameter in super is sent to a parent class
// class Animal {
// 	constructor(animalName) {
// 		this.animalName = animalName;
// 	}
// 	showSpeed(speed) {
// 		console.log(`${this.animalName} can run ${speed}km per hour!`);
// 	}
// }

// class Rabbit extends Animal{
// 	constructor(name) {
// 		super(name);
// 	}
// }

// let rabbit = new Rabbit("rabbit");
// console.log(rabbit);
// rabbit.showSpeed(15);

//! Tricky example
// class Animal {
//   constructor(name) {
//     console.log(name);
//   }
// }
// class Rabbit extends Animal {}
// // === class Rabbit extends Animal {
// // constructor(...args) {
// 	// console.log(...args);
// // }
// // }
// let animal = new Animal("Hayvon");
// let rabbit = new Rabbit("Quyon");
