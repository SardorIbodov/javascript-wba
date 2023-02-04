// 1
// for(let i = 0; i < 3; i++) {
// 	console.log(`number - ${i}!`);
// }

// let i = 0;
// while(i < 3) {
// 	console.log(`number - ${i}!`);
// 	i++;
// }

// 2
// function checkAge(age) {
// 	if(age > 18) {
// 		return true;
// 	} else {
// 		return `Did parents allow you?`
// 	}
// }

// let checkAge = age => age > 18 ? true : `Did parents allow you?`;

// let checkAge = age => (age > 18) || `Did parents allow you?`;

// console.log(checkAge(20));

// 3
// let min = (num1, num2) => 	num1 > num2 ? num2 : num1;

// console.log(min(-1,-5));

// 4
// let pow = (num, degree) => num ** degree;

// console.log(pow(5,2));


// 5
// function ask(question, yes, no) {
// 	if(confirm(question)) yes();
// 	else no();
// }

// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
// 	"Do you agree?",
// 	function () {alert("You agreed");},
// 	function () {alert("You canceled the execution");}
// )