// Recursion functions
// const sum = (n) => {
//   let s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   return s;
// };
// console.log(sum(4));
// let result = 0;
// const sum = (n) => {
//   if (n === 1) return (result += 1);
//   else {
//     result += n;
//     return sum(n - 1);
//   }
// };
// console.log(sum(4));
// const sum = n => {
// 	if(n < 1) return 0;
// 	else return n + sum(n - 1);
// };
// console.log(sum(4));

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };
// const getTotalSalary = company => {
// 	if(Array.isArray(company)) {
// 		return company.reduce((v, c) => v + c.salary, 0);
// 	}
// 	else {
// 		let sum = 0;
// 		for(let child of Object.values(company)) {
// 			sum += getTotalSalary(child); 
// 		}
// 		return sum;
// 	}
// }
// console.log(getTotalSalary(company));