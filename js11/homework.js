const array = [3, 8, 14, 5, 19, 25];
// array ichidan maximal sonni aniqlaydigan funksiya
const max = (arr) => {
  return arr.reduce((current, value) => {
    return current > value ? current : value;
  }, 0);
};
const task = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    let m1 = max(arr); // Eng katta son
    arr.splice(arr.indexOf(m1), 1);
    let m2 = max(arr); // Eng katta sondan bitta kichik son
    arr.splice(arr.indexOf(m2), 1);
    if (m1 - m2 !== 0) arr.push(m1 - m2);
    return task(arr);
  }
};

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
