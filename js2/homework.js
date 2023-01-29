// 2 -> Prefix and postfix
// let a = 1,
//   b = 1;
// let c = ++a; // ++1
// let d = b++; // 1++
// console.log(c, d); // => console.log(++1, 1++) => 2, 1

// 3 -> Assignment result
// let a = 2;
// let x = 1 + (a *= 2); // x = 1 + (2 * 2) => x = 1 + 4 = 5
// console.log(x);

// 4 -> Type convertion
// console.log("" + 1 + 0); // (string + number = string) ifodasidan => "" + 1 => "1" + 0 => "10"
// console.log("" - 1 + 0); // ("" => 0) ekanligidan 0 - 1 + 0 => -1
// console.log(true + false) // true => 1, false => 0 ekanligidan => 1
// console.log(6 / "3"); // bunda "/" string ichidagi raqamni numberga aylantiradi va 6 / "3" => 2
// console.log("2" * "3"); // bunda "*" string ichidagi raqamni numberga aylantiradi va "2" * "3" => 6
// console.log(4 + 5 + "px"); // console.log(9 + "px") => (number + string => string) ekanligidan => "9px"
// console.log("$" + 4 + 5); // (string + number => string) => "$4" + 5 => "$45"
// console.log("4" - 2); // "-" stringni songa o'zgartirib yuboradi => 4 - 2 => 2
// console.log(" -9 " + 5); // (string + number = string) => " -9 " + 5 => " -9 5"
// console.log(" -9 " - 5); // "-" stringni songa o'zgartirib yuboradi => -9 - 5 => -14
// console.log(null + 1); // (null = 0) ekanligidan => 0 + 1 => 1
// console.log(undefined + 1); // (undefined + number = NaN) => son emasga sonni qo'shamiz => natija => son emas => NaN
// console.log(" \t \n" - 2); // " /t /n" => ichida probellari bo'lgan string
// "     " => 0, bundan 0 - 2 => -1

// 5 => Comparisions
// console.log(5 > 4); // true
// console.log("apple" > "pineapple"); // "a" < "p" ekanligidan (ASCII kod jihatdan) => false
// console.log("2" > "12"); // "2" > "1" ekanligidan (ASCII kod jihatdan) => true
// console.log(undefined == null); // undefined = null => false ekanligidan => true
// console.log(undefined === null); // 2 xil data type bo'lganligi uchun => false
// console.log(null == "\n0\n"); // null bo'shliq, "\n0\n" esa probel va 0 bo'lganligi uchun => false
// console.log(null === +"\n0\n"); // +"\n0\n" => 0 bo'ladi => null === 0 => data type lar har xilligi uchun => false

// 6 -> if else
// if ("0") {
// 	console.log("hello");
// } // hello => "0" true ligini hisobga olamiz
