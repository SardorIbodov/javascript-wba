// check(str1, str2)
// 1
// const check = (str1, str2) => str1.localeCompare(str2);
// 2
// const check = (str1, str2) =>
//   str1 === str2
//     ? `mos`
//     : str1.includes(str2) || str2.includes(str1)
//     ? `qisman mos`
//     : `umaman mos emas`;

// getCount()
// let getCount = (str) => {
//   letters = "abcdefghijklmnopqrstuvwxyz";
//   let result = {};
// 	str = str.toLowerCase();
//   for (let char of str) {
//     if (letters.includes(char))
//       result[char] ? result[char]++ : (result[char] = 1);
//   }
//   return result;
// };

// truncate()
// const truncate = (str, count) => count >= 0 ? str.slice(0, count) : `musbat son kiriting!`;

// getCurrency
// const getCurrency = (money) => money.slice(1);

// calcCount()
// const calcCount = (str) => {
//   base = {
//     letters: "abcdefghijklmnopqrstuvwxyz",
//     numbers: "1234567890",
// 		characters: "~`!@#$%^&*()-_=+/\|]}[{';\":><.,"
//   };
// 	result = {};
// 	for(char of str) {
// 		for(let key in base) {
// 			if(base[key].includes(char)) result[key] ? result[key]++ : result[key] = 1;
// 		}
// 	}
// 	return result;
// };
