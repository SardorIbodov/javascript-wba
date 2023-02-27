// destructure, new Date(), JSON
// destructure for object
// let name = "sardor";
// let obj = { name: "webbrain", title: "IT center", data: { year: 2019 } };
// let {
//   name: newName,
//   title,
// 	data,
//   data: { year },
// } = obj;
// console.log(newName, title, data, year);

// destructure for array
// let array = ["apple", "pear", "banana", "kiwi", 1, 2, 3, 4];
// let [olma, nok, banan, kivi, ...rest] = array;
// console.log(olma, nok, banan, kivi, rest);

// destructure in parameter of function
// const getData = ({name, year}) => {
// 	console.log(name, year);
// }
// getData({name: "webbrain", year: 2019});
// faqatgina destructure qilingan objectni keyin o'z
// holatiga qaytarib bo'lmaydi!!!
// agar ma'lum bir sababga ko'ra, ma'lumot parametrga
// kelmay qolsa unda
// const getData = (data = {}) => {
// 	console.log(data?.name, data?.year);
// }
// getData();

// destructure in runtime in object
// let obj = { name: "webbrain", title: "IT center", data: { year: 2019 } };
// Object.entries(obj).map(([key, value], index) => {
// 	console.log(key, value);
// })

// new Date()
// console.log(Date.now()); // from 1970 till now (in milliseconds)
// let date = new Date();
// console.log(date); // in UTF-8
// console.log(date.getTime()); // equal with Date.now()
// console.log(date.getDay()); // returns a current day in a week (in numbers, sunday = 0, monday = 1, ...);
// console.log(date.getDate()); // returns a date
// console.log(date.getMonth()); // returns a month (january = 0)
// console.log(date.getFullYear()); // retunrs a year
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// getToday
// const getToday = (symbol) => {
//   let date = new Date();
//   return `Today: ${date.getDate()}${symbol}${
//     date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
//   }${symbol}${date.getFullYear()}`;
// };
// console.log(getToday("/"));

// JSON => JavaScript Object Notation
// JSON.stringify(object, replacer, format)
// let data = {login: "Sardor", password: 2003, age: 19, info: {isMarried: false, isGraduated: true}};
// console.log(JSON.stringify(data, ["login", "password", "info", "isGraduated"], 2));

// JSON.parse(json)
// let json = JSON.stringify(data);
// let obj = JSON.parse(json);
// console.log(obj);