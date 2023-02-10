// 1 => Decimal to binary + count of 0 and 1
// let toBinary = num => {
// 	let oneCount = 0;
// 	let zeroCount = 0;
// 	binaryNum = num.toString(2);
// 	for(let i = 0; i < binaryNum.length; i++) {
// 		binaryNum[i] === '1' ? oneCount++ : zeroCount++;
// 	}
// 	return {binary: binaryNum ,zeros: zeroCount, ones: oneCount}
// }
// console.log(toBinary(16));

// 2 => max - min
// let numArr = [1,3,5,45,6,4,7,36,3,67,3,6,3,63,6,3];
// let maxMinusMin = numArr => {
// 	let min = Math.min(...numArr);
// 	let max = Math.max(...numArr);
// 	return (max- min) * -1
// }
// console.log(maxMinusMin(numArr));

// 3
// Math.trunc => sonning butun qismini oladi xolos
// Math.floor => sonning butun qismini oladi va u butun qismni sonlar o'qida chap tomonga suradi. (Iloji boricha kichikroq butun qiymat oladi!) 9.99 => 9
// Math.ceil => sonning butun qismini oladi va u butun qismni sonlar o'qida o'ng tomonga suradi. (Iloji boricha kattaroq butun qiymat oladi!) 9.01 => 10
// parseInt() => bu ham Math.trunc() bilan bir xil ishlaydi, ya'ni sonning butun qismini oladi xolos

// 4
// let randomInteger = (min, max) => parseInt(Math.random() * (max - min)) + min;
// console.log(randomInteger(1, 50));

