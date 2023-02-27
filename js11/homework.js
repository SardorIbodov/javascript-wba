// const array = [3, 8, 14, 5, 19, 25];
// // array ichidan maximal sonni aniqlaydigan funksiya
// const max = (arr) => {
//   return arr.reduce((current, value) => {
//     return current > value ? current : value;
//   }, 0);
// };
// const task = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   } else {
//     let m1 = max(arr); // Eng katta son
//     arr.splice(arr.indexOf(m1), 1);
//     let m2 = max(arr); // Eng katta sondan bitta kichik son
//     arr.splice(arr.indexOf(m2), 1);
//     if (m1 - m2 !== 0) arr.push(m1 - m2);
//     return task(arr);
//   }
// };

// string
// berilgan stringda nechta kichik harf, nechta katta harf borligini toping
// const countLetters = (string) => {
//   let lower = (capital = 0);
//   for (let char of string) {
//     if (char !== " " && isNaN(+char)) {
//       char.toUpperCase() === char ? capital++ : lower++;
//     }
//   }
//   return `${lower} ta kichik harf, ${capital} ta katta harf bor`;
// };
// console.log(countLetters("Webbrain Academy"));

// berilgan stringdagi @ ni a ga o'zgartiring
// const replaceCharacter = string => {
// 	return string.split("").map(v => v === "@" ? "a" : v).join("");
// }
// console.log(replaceCharacter("Webbr@in Ac@demy"));

// bir xil harflarni o'chiring
// const removeDuplicates = (string) => {
//   return string
//     .split("")
//     .filter((v, i, a) => a.indexOf(v) === i)
//     .join("");
// };
// console.log(removeDuplicates("webbbraiiin accaddemmy"));

// string ichidagi raqamlarni toping
// const numbersInString = (string) => {
//   let numsArray = [];
//   for (let char of string) {
//     if (!isNaN(+char) && char !== " ") numsArray.push(+char);
//   }
//   return numsArray.filter((v, i, a) => a.indexOf(v) === i);
// };
// console.log(numbersInString("we66ra1n acad4my"));

// stringdagi har bir belgini duplicate qiling
// const duplicate = (string) => {
//   let result = "";
//   for (let char of string) {
//     result = result.concat(char, char);
//   }
//   return result;
// };
// console.log(duplicate("webbrain"));

// berilgan string palindrom ekanligini ko'rsating
// const isPalindrome = string => {
// 	let palindrom = true;
// 	if(!(string.split("").reverse().join("") === string)) palindrom = false;
// 	return palindrom ? `${string} - Palindrom` : `${string} - Palindrom emas`;
// }
// console.log(isPalindrome("aziza"));

// "web" "bwe"
// const isEqual = (str1, str2) => {
// 	str1 = str1.split("").sort((a, b) => a.localeCompare(b)).join("");
// 	str2 = str2.split("").sort((a, b) => a.localeCompare(b)).join("");
// 	return str1 === str2 ? `Bu so'zlar teng` : `Bu so'zlar teng emas`;
// }
// console.log(isEqual("web", "bwea"));

// stringdagi harflar sonini toping
// let letterInString = string => {
// 	string = string.toLowerCase();
// 	let result = {};
// 	for(let char of string) {
// 		if(char !== "" && isNaN(+char)) {
// 			result[char] ? result[char]++ : result[char] = 1;
// 		}
// 	}
// 	return result;
// }
// console.log(letterInString("webbrain academy"));

// stringni ziplash => "webbraaiiin" => "web2ra2i3n"
// const zipString = (string) => {
//   let letters = {};
//   let result = "";
//   for (let char of string) {
//     if (char !== "" && isNaN(+char)) {
//       letters[char] ? letters[char]++ : (letters[char] = 1);
//     }
//   }
//   for (let letter in letters) {
//     letters[letter] === 1 ? (result += letter) : result += `${letter}${letters[letter]}`;
//   }
//   return result;
// };
// console.log(zipString("webbraaiiin"));

// object keylarini toping
// const getKeys = object => Object.keys(object);
// console.log(getKeys({name: "Sardor", age: 19}));

// objectdagi age key larini yig'indisini toping
// let obj = {
//   title: "webbrain",
//   age: 2,
//   child: {
//     age: 4,
//     name: "Webbrain",
//     child: {
//       age: 3,
//     },
//   },
// };
// let sum = 0;
// const sumAge = (object) => {
//   if (object) {
//     sum += object.age;
// 		sumAge(object.child);
//   }
// 	return sum;
// };
// console.log(sumAge(obj));

// boolean tipidagi ma'lumotlarni qaytaring
// let obj = {
//   id: 1,
//   name: "Webbrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// const getBool = (object) => {
//   let result = {};
//   for (let key in object) {
//     if (typeof object[key] === "boolean") result[key] = object[key];
//   }
//   return result;
// };
// console.log(getBool(obj));

// Array
// remove duplicates
// let arr = [2, 3, 5, 3, 2, 3, 6, 8, 7, 6];
// const removeDupticates = arr => arr.filter((v, i) => arr.indexOf(v) === i)
// console.log(removeDupticates(arr));
// const removeDuplicates = arr => {
// 	let result = [];
// 	arr.forEach(v => result.includes(v) ? v : result.push(v))
// 	return result;
// }
// console.log(removeDuplicates(arr));

// arraylarni taqqoslang
// let arr1 = (arr2 = [1, 2, 3]);
// const isEqual = (arr1, arr2) => {
// 	return arr1.join("") === arr2.join("") ? `Teng` : `Teng emas`;
// }
// console.log(isEqual(arr1, arr2));

// arraydagi 2 xonali sonlarni chiqaring
// let arr = [1, 64, 8, 27, 64, 125, 14, 9.99, 99.999, 100.99];
// const getTwo = array => array.filter(v => Math.floor(v / 10) >= 1 && Math.floor(v / 10) < 10);
// console.log(getTwo(arr));
