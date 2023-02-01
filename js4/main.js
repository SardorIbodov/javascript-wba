// prime numbers (from 2 to 100)

// 1st way
// let count = 0;

// for(let i = 2; i <= 20; i++) {
// 	for(let j = 1; j <= i; j++) {
// 		if(i % j === 0)	count++;
// 	}
// 	if(count === 2) console.log(`${i} - tub son`);
// 	count = 0;
// }


// 2nd way
// for (let i = 2; i <= 20; i++) {
// 	let isPrime = true;
// 	for(let j = 2; j < i; j++) {
// 		if(i % j === 0) isPrime = false; 
// 	}
// 	isPrime ? console.log(`${i} - tub son`) : console.log(`${i} - murakkab son`);
// }


