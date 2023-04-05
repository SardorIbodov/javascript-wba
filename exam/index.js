//? Question
let list = [
  { id: 1, name: "wba", title: "CTO" },
  { id: 2, name: "wba", title: "CEO" },
  { id: 3, name: "wba", title: "CTO" },
  { id: 4, name: "wba", title: "CEO" },
];

// result = {
// 	ceo: [
// 		{id: 2, name: "wba", title: "CEO"},
// 		{id: 4, name: "wba", title: "CEO"},
// 	],
// 	cto: [
// 		{id: 1, name: "wba", title: "CTO"},
// 		{id: 3, name: "wba", title: "CTO"},
// 	]
// };

//! 1st way
// let result = {};
// let keyArray = [];

// list.forEach((v) => {
//   if (!keyArray.includes(v.title)) keyArray.push(v.title);
// });

// keyArray.forEach(v => {
//   result[v] = [];
//   list.forEach((v2) => {
//     if (v2.title === v) {
//       result[v].push(v2);
//     }
//   });
// });

// console.log(result);

//! 2nd way
// let result = {};
// list.forEach((item) => {
//   result[item.title.toLowerCase()]
//     ? result[item.title.toLowerCase()].push(item)
//     : (result[item.title.toLowerCase()] = [item]);
// });
// console.log(result);
