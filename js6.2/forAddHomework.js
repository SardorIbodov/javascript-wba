// Additional homework about objects
// 1 => find the keys of the object
// let obj={
//   id:1,
//   name:"WebBrain"
// }
// console.log(...Object.keys(obj));

// 2 => find the keys that their values are number
// let obj={
//   id:1,
//   name:"WebBrain"
// }
// for(let key in obj) {
// 	if(typeof obj[key] === "number") console.log(key);
// }

// 3 => find the keys that their values are boolean
// let obj={
//   id:1,
//   name:"WebBrain",
//   offline:true,
//   online:true,
//   individual:false
// }
// let getBoolean = obj => {
// 	let newObj = {};
// 	for(let key in obj) {
// 		if(typeof obj[key] === "boolean")
// 		newObj[key] = obj[key]
// 	}
// 	return newObj;
// }
// console.log(getBoolean(obj));

// 4 => find the string in object
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// let search = (obj, str) => {
//   if (typeof str === "string") {
//     for (let key in obj) {
//       if (obj[key] === str) {
//         return `${key}: ${obj[key]}`;
//       }
//     }
//   } else {
//     return `String kiriting!`;
//   }
// };
// console.log(search(obj, "WebBrain"));

// 5
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };
// let searchValue = (obj) => {
// 	let result = "";
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       result+=`${obj[key]}, `
//     }
//   }
// 	return result;
// };
// console.log(searchValue(obj));

// 6 => return the objects which age > 18
// let user = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   children: [
//     {
//       id: 1,
//       name: "Umar",
//       age: 54,
//       children: [
//         { id: 1, name: "Asmo", age: 34 },
//         { id: 2, name: "Osim", age: 30 },
//         { id: 3, name: "Xattob", age: 25 },
//       ],
//     },
//     { id: 2, name: "Umar", age: 54 },
//     { id: 3, name: "Umar", age: 54 },
//   ],
// };
// let getAdult = obj => {
// 	let adultsObj = {};
// 	let i = 0;
// 	while(obj) {
// 		if(obj.age > 18) {
// 			adultsObj[i] = obj;
// 			i++;
// 		}
// 		obj = obj.children;
// 	}
// 	return adultsObj;
// }
// console.log(getAdult(user));

// 7 => return the objects that has "job" key
// let arr = [
//   { id: 1, name: "Usmon", job: "developer" },
//   { id: 2, name: "Usmon", job: "developer" },
//   { id: 3, name: "Usmon" },
//   { id: 4, name: "Usmon", job: "developer" },
//   { id: 5, name: "Usmon" },
// ];
// let hasJob = (arr) => {
// 	let sorted = [];
// 	for(element of arr) {
// 		for(key in element) {
// 			if(key === "job") sorted.push(element);
// 		}
// 	}
// 	return sorted;
// }
// console.log(hasJob(arr));

// 8 => clone the object and it don't have to copy reference!
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };
// let cloneObj = structuredClone(obj);
// obj.id = 2;
// console.log(obj);
// console.log(cloneObj);

// 9 => add element to an object
// let obj = {};
// let addElement = (obj, key, value) => {
// 	obj[key] = value;
// }
// addElement(obj, "name", "Sardor");
// addElement(obj, "age", 19);
// addElement(obj, "location", "Tashkent");
// console.log(obj);

// 10 => is student?
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true
// }
// let isStudent = obj => {
// 	for(let key in obj) {
// 		if(key === "talaba") {
// 			obj[key] === true ?	obj.kredit = "berildi"
// 			: obj.kredit = "berilmadi"
// 		}
// 	}
// 	return obj;
// }
// console.log(isStudent(obj));

// 11 => is age correct?
// let obj = {
//   id: 1,
//   name: "Usmon",
//   age: 34,
//   year: 1990,
// };
// let isCorrectAge = obj => {
// 	const currentYear = new Date().getFullYear();
// 	if(obj.age + obj.year === currentYear) return `Ma'lumotlar to'g'ri`;
// 	else return `Xato ma'lumot kiritdingiz!!!`
// }
// console.log(isCorrectAge(obj));


