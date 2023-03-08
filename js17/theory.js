//! setTimeout(callback, time, arguments)
// console.log(1);
// setTimeout(() => console.log(2), 2000);
// console.log(3);
//* output : 1, 3, 2

// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);
//* output : 1, 3, 2

// console.log(1);
// const print = () => {
// 	for(let i = 0; i < 1000000; i++) {}
// 	console.log(2);
// }
// print();
// setTimeout(() => console.log(3), 1000)
// setTimeout(() => console.log(4), 500)
//* output: 1, 2, 4, 3

// setTimeout((firstName, surName) => console.log(firstName, surName), 2000, "Sardor", "Ibodov");
//* output: "Sardor" "Ibodov"

//! setInterval(callback, time, arguments)
// setInterval(() => {
// 	let date = new Date();
// 	console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }, 1000)

//! clearTimeout(), clearInterval() => for removing from memory
// let id1 = setTimeout(() => {}, 1000);
// clearTimeout(id1);
// let id2 = setInterval(() => {}, 1000);
// clearInterval(id2);
