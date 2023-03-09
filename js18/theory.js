//! apply(), call(), bind()

//* without using advanced functions
// let user1 = {
//   name: "webbrain",
//   lastName: "academy",
//   title: "IT center",
//   getFull() {
// 		console.log(`${this.name} ${this.lastName}`);
// 	},
// };
// let user2 = {
//   name: "digital",
//   lastName: "one",
//   title: "IT company",
//   getFull() {
// 		console.log(`${this.name} ${this.lastName}`);
// 	},
// };
// console.log(user1.getFull(), user2.getFull());

//* call(context, param1, param2, ... paramn)
// let user1 = {
//   name: "webbrain",
//   lastName: "academy",
//   title: "IT center",
// };

// function printName() {
// 	console.log(this.name, this.lastName);
// }
// printName.call(user1);

//* working with data sent from backend
// let users = [
//   {
//     name: "webbrain",
//     lastName: "academy",
//     title: "IT center",
//   },
//   {
//     name: "digital",
//     lastName: "one",
//     title: "IT company",
//   },
// ];

// 	function getData(additionalName, additionalSurname){
// 		console.log(additionalName, additionalSurname);
// 		console.log(this.name, this.lastName)
// 	}
// for(let user of users) {
// 	getData.call(user, "Sardor", "Ibodov");
// }

//* apply(context, [param1, param2, param3, ..., paramn])
// let users = [
//   {
//     name: "webbrain",
//     lastName: "academy",
//     title: "IT center",
//   },
//   {
//     name: "digital",
//     lastName: "one",
//     title: "IT company",
//   },
// ];

// for (let user of users) {
//   function getData(additionalName, additionalSurname) {
//     console.log(additionalName, additionalSurname);
//     console.log(this.name, this.lastName);
//   }
//   getData.apply(user, ["Sardor", "Ibodov"]);
// }

//* bind(context, param1, param2, param3, ..., paramn) => returns a function!
// let user1 = {
//   name: "webbrain",
//   lastName: "academy",
//   title: "IT center",
// };
// function getData(additionalData) {
// 	console.log(this.name, this.lastName, additionalData);
// }
// getData.bind(user1, "information")();

