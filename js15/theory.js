// Scope and closure

// {
// 	let a = "wba";
// }
// console.log(a); // a is not defined

// for(let i = 0; i < 10; i++) {}
// console.log(i); // i is not defined

// for(var j = 0; j < 10; j++) {}
// console.log(j); // 10

// let firstName = "webbrain";
// const getName = () => {
// 	console.log(firstName);
// 	let surname = "academy";
// 	return () => {
// 		console.log(surname, firstName);
// 	}
// }
// getName()();