// String
// "", '', ``

// Escape character => \
// let str1 = "Salom \"Web brain\" academy!!!";
// console.log(str1);

// \n => enter, \t => tab
// let str1 = "Salom!\nWebbrain\tacademy";
// console.log(str1);

// "", new String()
// let str1 = "Hello";
// let str2 = new String("Hello");
// console.log(str1, str2);

// localeCompare
// Do not exist => -1
// Partially exist => 1
// Equal => 0
// let str1 = "Hello my friend";
// let str2 = new String("my");
// console.log(str1.localeCompare(str2));

// Accessing
// str.[index]
// let str = "hello";
// console.log(str[1]); // e
// str[1] = "a"; // Don't change, because string is immutable!!!
// console.log(str);

// str.at() => can bring minus
// let str = "hello";
// console.log(str.at(1)); // e
// console.log(str.at(-5)); // o

// str.charAt() => can not bring minus
// let str = "hello";
// console.log(str.charAt(0)); // h

// str.length
// let str = "hello world";
// console.log(str.length);

// toLowerCase(), toUpperCase(), toLocaleLowerCase(), toLocaleUpperCase
// let str = "hello world";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// indexOf()
// let str = "hello world";
// console.log(str.indexOf("lo")); // 3
// console.log(str.indexOf("lolo")); // -1 => do not exist = -1
// console.log(str.indexOf("lo", 4)); // -1

// lastIndexOf()
// let str = "hellor world";
// console.log(str.lastIndexOf("or")); // 8
// console.log(str.lastIndexOf("or", 5)); // 4

// includes()
// let str = "hello world";
// console.log(str.includes("wor")); // true

// startsWith(), endsWith()
// let str = "hello world";
// console.log(str.startsWith("hel")); // true
// console.log(str.startsWith("lo")); // false
// console.log(str.endsWith("ld")); // true
// console.log(str.endsWith("dl")); // false

// padEnd(), padStart()
// let str = "hello world";
// console.log(str.padEnd(12, "."));
// console.log(str.padStart(12, "."));

// slice(startingIndex, finishingIndex) => accepts minus value
// let str = "hello world";
// console.log(str.slice(0, 5)); // "hello" => 5 is not included
// console.log(str.slice(0, -3)); // "hello wo" => -3 is not included

// substring(startingIndex, finishingIndex) => can not accept minus value, can swipe
// let str = "hello world";
// console.log(str.substring(0, 2)); // "he"
// console.log(str.substring(2, 0)); // "he"

// substr(startingIndex, length)
// let str = "hello world";
// console.log(str.substr(2, 5)); // "llo w"

// eval()
// let str = "2 * 3 + 4";
// console.log(eval(str)); // 10

// trim() => removes the spaces
// let str = "  hello world  ";
// console.log(str, `length: ${str.length}`);
// console.log(str.trim(), `length: ${str.trim().length}`);

// trimStart()
// let str = "  hello world  ";
// console.log(str, `length: ${str.length}`);
// console.log(str.trimStart(), `length: ${str.trimStart().length}`);

// trimEnd()
// let str = "  hello world  ";
// console.log(str, `length: ${str.length}`);
// console.log(str.trimEnd(), `length: ${str.trimEnd().length}`);

// split()
// let str = "hello my friend";
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("o"));
// console.log(str.split(" ", 2));

// concat()
// let str = "hello";
// console.log(str.concat("my", "best", "frined", "!"));

// valueOf
// let str = new String("hello");
// console.log(str);
// console.log(str.valueOf());

// String.raw`` => before creation of ``
// let str = String.raw `hello`;
// console.log(str);

// replace()
// let str = "hello world";
// console.log(str.replace("world", "World"));
// console.log(str);

// for-of, for-in
// let str = "hello my friend";
// for(let char of str) {
// 	console.log(char);
// }
// for(let index in str) {
// 	console.log(index);
// }