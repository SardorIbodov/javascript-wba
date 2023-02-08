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

// 6 => return the sum of ages
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
// let sumAge = (obj) => {
// 	let sumArr = 0;
//   while (obj) {
//     if(Array.isArray(obj)) {
// 			obj.forEach(element => {
// 				sumArr += element.age;
// 			})
// 		}
// 		else {
// 			sumArr+= obj.age;
// 		}
// 		obj = obj.children;
//   }
// 	return sumArr;
// };

// console.log(sumAge(user));

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

// 12 => existsBranch()
// let student = {
// 	name: "Sardor",
// 	locationCentre: "Qarshi"
// }
// let existsBranch = obj => {
// 	const branches = ['Andijon','Namangan','Qarshi','Toshkent'];
// 	let isHere = false;
// 	branches.forEach(element => {
// 		(element === obj.locationCentre) ? isHere = true : isHere
// 	})
// 	if(isHere) return `Fialimiz mavjud`
// 	else return `Uzr, bu hududda filialimiz yo'q!!!`
// }
// console.log(existsBranch(student));

// 13 => registration
// let arr = [
// 	{ id: 3, name: "Usmon", parol: "1231" },
// 	{ id: 1, name: "Umar", parol: "1241" },
// 	{ id: 5, name: "Jasur", parol: "3452" },
// 	{ id: 2, name: "Asmo", parol: "2312" },
// 	{ id: 4, name: "Salohiddin", parol: "3421" },
// ];
// let registration = (obj) => {
// 	let isSuccess = false;
// 	arr.forEach(element => {
// 		element.name === obj.name && element.parol === obj.parol ?
// 		isSuccess = true :
// 		isSuccess;
// 	})
// 	if(isSuccess) return `Xush kelibsiz`;
// 	else return `Login yoki parol xato!!!`;
// };
// console.log(registration({name: "Jasur", parol: "3452"}));

// 14 => existsChild()
// let obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// let existsObject = object => {
// 	for(let key in object) {
// 		if(typeof object[key] === "object" && !Array.isArray(object[key]) && object[key] !== null) {
// 			return `Ichma-ich object mavjud`
// 		}
// 	}
// 	return `Ichma-ich object mavjud emas!!!`
// }
// console.log(existsObject(obj));

// 15 => person
// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
// };
// 1
// let addIelts = (value, object) => {
//   object.ielts = value;
//   return object;
// };
// console.log(addIelts(6, person));
// 2
// let isAppropriate = (object) => {
//   if (object.ielts >= 5.5) {
//     object.student = true;
//     return object;
//   } else return `Qayta topshiring!`;
// };
// console.log(isAppropriate(person));
// 3
// let createRandomKey = (object) => {
//   for (let key in object) {
//     if (key === "student") {
//       let randomKey = parseInt(Math.random() * 100);
//       let randomValue = parseInt(Math.random() * 100);
//       object[randomKey] = randomValue;
//     }
//   }
//   return object;
// };
// console.log(createRandomKey(person));
// finished
