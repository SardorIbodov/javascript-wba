// 1
// let user = {
//   name: "John",
//   surname: "Smith",
// };
// user.name = "Pete";
// delete user.name;
// console.log(user);

// 2
// let isEmpty = (object) => {
//   for (key in object) {
//     return false;
//   }
//   return true;
// };
// let schedule1 = {};
// let schedule2 = { time: "8.30" };
// console.log(isEmpty(schedule1));
// console.log(isEmpty(schedule2));

// 3
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let salariesArr = Object.entries(salaries); // obj => arr
// salariesArr.sort((a, b) => {
//   return b[1] - a[1];
// }); // sortedArray
// let sortedSalaries = {};
// salariesArr.forEach(element => {
// 	sortedSalaries[element[0]] = element[1];
// })
// console.log(sortealaries);

// 4
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// let multiplyNumeric = obj => {
// 	for(key in obj) {
// 		typeof obj[key] === "number" ? obj[key] *= 2 : obj[key]
// 	}
// 	return obj;
// }
// console.log(multiplyNumeric(menu));
