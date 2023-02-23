// Array ichida sonlar yig'indisini toping
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const calcSum = (arr) =>
//   arr.reduce((current, value) => {
//     return (current += value);
//   }, 0);

// ["webbrain", "academy"] - array ichidagi char lar sonini toping
// const getChars = (arr) => {
//   let result = {};
//   arr.forEach((value) => {
//     value = value.toLowerCase();
//     for (let char of value) {
//       result[char] && result[char] !== " "
//         ? result[char]++
//         : (result[char] = 1);
//     }
//   });
//   return result;
// };
// console.log(getChars(["Webbrain", "academy"]));

// 2ta arrayni bir-biriga taqqoslang
// const ar1 = [1, 2, 3, 4];
// const ar2 = [1, 2, 3];
// const isEqual = (ar1, ar2) =>
//   ar1.join("") === ar2.join("") ? `Teng` : `Teng emas!`;
// console.log(isEqual(ar1, ar2));

// Camelize
// const camelize = (str) => {
//   if (str[0] === "-") {
//     str = str.slice(1);
// 		str[0].toUpperCase();
//   }
//   return str
//     .split("-")
//     .map((element) => {
//       return element.replace(element[0], element[0].toUpperCase())
//     })
//     .join("");
// };
// console.log(camelize("-webkit-transition"));
// console.log(camelize("background-color"));

// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// 2000 yildan oldinga chiqqan mashinalar ro'yhatini chiqaring
// const after2000 = arr => arr.filter(v => v.year > 2000);
// console.log(after2000(users));

// 2010 yildan keyin chiqqan mashinalar ro'yhatini chiqaring
// const after2010 = arr => arr.filter(v => v.year > 2010);
// console.log(after2010(users));

// 2010 yildan oldin chiqqan mashinalar ro'yhatini chiqaring
// const after2010 = arr => arr.filter(v => v.year < 2010);
// console.log(after2010(users));

// engine kuchiga qarab ma'lumotlarni sort qiling
// const sortByEngine = arr => arr.sort((a,b) => a.engine - b.engine);
// console.log(sortByEngine(users));

// year ga qarab sort qiling
// const sortByYear = arr => arr.sort((a,b) => a.year - b.year);
// console.log(sortByYear(users));

// ismlarini alfabet tarzida
// const sortByName = arr => arr.sort((a,b) => a.name.localeCompare(b.name));
// console.log(sortByName(users));

// 2000 yildan oldin chiqqan mashinalar
// const before2000 = arr => arr.filter(v => v.year < 2000);
// console.log(before2000(users));

// 2000 ~ 2010 
// const between0010 = arr => arr.filter(v => v.year >= 2000 && v.year <= 2010);
// console.log(between0010(users));

// 2010 ~ 2020 
// const between1022 = arr => arr.filter(v => v.year >= 2010 && v.year <= 2022);
// console.log(between1022(users));