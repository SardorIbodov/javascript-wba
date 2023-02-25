// console.log([] + "0"); // "0"

// Finding sum of the elements
// const arr = [1,2,3,4,5];
// console.log(eval(arr.join("+")));

// filter()
// let arr = [1, 2, 34, 3, 22, 45, 0];
// let str = ["orange", "apple", "banana", "kiwi"];
// let response = arr.filter((element, index) => {
//   return true;
// });
// console.log(response); // [1, 2, 34, 3, 22, 45, 0];
// let response = arr.filter((element, index) => {
//   return false;
// });
// console.log(response); // []
// let response = arr.filter((element, index) => {
//   return element < 10;
// });
// console.log(response); // [ 1, 2, 3, 0 ]
// let response = str.filter((element, index) => element.length <= 5);
// console.log(response); // [ 'apple', 'kiwi' ]
// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];
// let res = students.filter(value => value.year === 2002);
// console.log(res);

// sort()
// let n = [3, 1, 5, 4, 9, 6];
// let num = [1, 2, 34, 3, 22, 45, 0];
// let str1 = ["orange", "apple", "banana", "kiwi"];
// let str2 = ["Orange", "Apple", "banana", "kiwi"];
// let res = n.sort();
// console.log(res); // [ 1, 3, 4, 5, 6, 9 ]
// let res = num.sort();
// console.log(res); // [0, 1, 2, 22, 3, 34, 45]
// let res = num.sort((a, b) => a - b);
// console.log(res); // [0, 1, 2, 3, 22, 34, 45]
// let res = num.sort((a, b) => b - a);
// console.log(res); // [45, 34, 22, 3, 2, 1, 0]
// let res = str1.sort();
// console.log(res); // [ 'apple', 'banana', 'kiwi', 'orange' ]
// let res = str2.sort();
// console.log(res); // [ 'Apple', 'Orange', 'banana', 'kiwi' ]
// let res = str2.sort((a, b) => a.localeCompare(b));
// console.log(res); // [ 'Apple', 'banana', 'kiwi', 'Orange' ]
// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];
// let res = students.sort((a, b) => b.year - a.year);
// console.log(res);
// let res = students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(res);

// find()
// let num = [1, 2, 34, 3, 22, 45, 0];
// let res = num.find(value => value === 3);
// console.log(res); // 3
// let res = num.find(value => value === 450);
// console.log(res); // undefined
// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];
// let res = students.find(value => value.id === 5); // { id: 5, year: 1995, name: 'Sardor Tursunboyev' }
// console.log(res.name); // Sardor Tursunboyev

// findIndex()
// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];
// let result = students.findIndex(value => value.id === 5);
// console.log(result); // 4

// findLastIndex()
// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// 	{ id: 2, year: 2000, name: "Asilbek Tolipov" },
// ];
// let res = students.findLastIndex(value => value.id === 2);
// console.log(res); // 8

// forEach()
// let num = [1, 2, 34, 3, 22, 45, 0];
// let result = num.forEach(value => console.log(value * 2));
// console.log(result); // undefined

// map()
// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// 	{ id: 2, year: 2000, name: "Asilbek Tolipov" },
// ];
// let result = students.map(value => {
// 	return value.name.replace("", "Student: ")
// })
// console.log(result);

// every()
// let num = [1, 2, 34, 3, 22, 45, 0];
// let result = num.every(value => typeof value === "number");
// console.log(result); // true
// let num = [1, 2, 34, 3, 22, 45, "0"];
// let result = num.every(value => typeof value === "number");
// console.log(result); // false

// some()
// let num = [1, 2, 34, "3", 22, 45, 0];
// let result = num.some(value => typeof value === "string");
// console.log(result); // true
// let result = num.some(value => typeof value === "number");
// console.log(result); // true

// fill() => can not accept regEx
// let num = [1, 2, 34, "3", 22, 45, 0];
// let res = num.fill(3, 3, 4);
// console.log(res); // [1, 2, 34, 3, 22, 45,  0]

// copyWithin()
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = num.copyWithin(0, 3, 6);
// console.log(result); // [4, 5, 6, 4, 5, 6, 7, 8, 9]

// reduce(callback, initial)
// reduce ni qiymati, callback qiladigan return (sum) ga teng bo'ladi!!!
// let num = [1, 2, 3, 4, 5];
// let result = num.reduce((sum, current, index) => {
// 	console.log(`current: ${current}, index: ${index}`);
// 	return index + current
// }, 0)
// console.log(result); // 9

// let num = [1, 2, 3, 4, 5];
// let result = num.reduce((sum, current, index) => {
// 	return sum += current
// }, 0)
// console.log(result); // 15

// flat() => default => flat(1)
// let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
// let res = num.flat(3);
// console.log(res);

// new Set()
// let num = [1, 1, 2, 3, 4, 1, 2, 6, 5];
// let res = new Set(num);
// console.log(res);

// new Map()
// let res = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);
// console.log(res);
// console.log(res.values());
// console.log(res.keys());
// console.log(res.entries());

// Array.from(value, callback)
// let arr = Array.from([1,2,3]);
// console.log(arr);
// let arr = Array.from("webbrain");
// console.log(arr);
// let arr = Array.from("webbrain", v => v.toUpperCase());
// console.log(arr);