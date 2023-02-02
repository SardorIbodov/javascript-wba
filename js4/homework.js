// 1
// 123 -> bir yuz yigirma uch
// let number = 123;
// let numArray = number.toString().split("");
// let result = "";

// for (let i = 0; i < numArray.length; i++) {
// 	switch(i) {
// 		case 0: {
// 			switch (numArray[i]) {
// 				case "1":
// 					result += "bir yuz";
// 					break;
// 				case "2":
// 					result += "ikki yuz";
// 					break;
// 				case "3":
// 					result += "uch yuz";
// 					break;
// 				case "4":
// 					result += "to'rt yuz";
// 					break;
// 				case "5":
// 					result += "besh yuz";
// 					break;
// 				case "6":
// 					result += "olti yuz";
// 					break;
// 				case "7":
// 					result += "yetti yuz";
// 					break;
// 				case "8":
// 					result += "sakkiz yuz";
// 					break;
// 				case "9":
// 					result += "to'qqiz yuz";
// 					break;
// 			}
// 		}
// 		break;

// 		case 1: {
// 			switch (numArray[i]) {
// 				case "1":
// 					result += " o'n";
// 					break;
// 				case "2":
// 					result += " yigirma";
// 					break;
// 				case "3":
// 					result += " o'ttiz";
// 					break;
// 				case "4":
// 					result += " qirq";
// 					break;
// 				case "5":
// 					result += " ellik";
// 					break;
// 				case "6":
// 					result += " oltmish";
// 					break;
// 				case "7":
// 					result += " yetmish";
// 					break;
// 				case "8":
// 					result += " sakson";
// 					break;
// 				case "9":
// 					result += " to'qson";
// 					break;
// 			}
// 		}
// 		break;

// 		case 2: {
// 			switch (numArray[i]) {
// 				case "1":
// 					result += " bir";
// 					break;
// 				case "2":
// 					result += " ikki";
// 					break;
// 				case "3":
// 					result += " uch";
// 					break;
// 				case "4":
// 					result += " to'rt";
// 					break;
// 				case "5":
// 					result += " besh";
// 					break;
// 				case "6":
// 					result += " olti";
// 					break;
// 				case "7":
// 					result += " yetti";
// 					break;
// 				case "8":
// 					result += " sakkiz";
// 					break;
// 				case "9":
// 					result += " to'qqiz";
// 					break;
// 			}
// 		}
// 		break;
// 	}
// }

// console.log(result);

// 2
// let browser = "Edge";
// switch(browser) {
// 	case "Edge":
// 	console.log("You have got the Edge");
// 	break;
// 	case "Chrome":
// 	console.log("You have got the Chrome");
// 	break;
// 	case "Firefox":
// 	console.log("You have got the Firefox");
// 	break;
// 	case "Safari":
// 	console.log("You have got the Safari");
// 	break;
// 	case "Opera":
// 	console.log("You have got the Opera");
// 	break;
// 	default:
// 	console.log("We hope that this page looks ok!");
// }

// switch(browser) {
// 	case "Edge":
// 	console.log("You have got the Edge");
// 	break;
// 	case "Chrome":
// 	case "Firefox":
// 	case "Safari":
// 	case "Opera":
// 	console.log("You have got the Opera");
// 	break;

// 	default:
// 	console.log("We hope that this page looks ok!");
// }

// browser === "Edge" bo'lsa "You have got the Edge" qiymat chiqadi
// browser === "Chrome" bo'lsa "You have got the Opera" qiymat chiqadi
// browser === "Firefox" bo'lsa "You have got the Opera" qiymat chiqadi
// browser === "Safari" bo'lsa "You have got the Opera" qiymat chiqadi
// browser === "Opera" bo'lsa "You have got the Opera" qiymat chiqadi
// browser boshqa qiymatga teng bo'lsa,  "We hope that this page looks ok!" qiymat chiqadi

// 3
// let a = 3;

// if(a == 0) console.log(0);
// if(a == 1) console.log(1);
// if(a == 2 || a == 3) console.log('2,3');

// a == 0, bo'lsa, 0 chiqadi
// a == 1, bo'lsa, 1 chiqadi
// a == 2 yoki a == 3 bo'lsa, '2,3' chiqadi

// 4
// let i = 3;
// while (i) {
//   console.log(i--);
// }
// 3 2 1 chiqadi

// 5
// let i = 0;
// while (i++ < 5) {
//   console.log(i);
// } // 1 2 3 4 5

// 6
// let i = 0;
// while (++i < 5) {
//   console.log(i);
// } // 1 2 3 4

// 7
// for(let i = 0; i < 3; i++) {
// 	console.log(`number: ${i}`);
// }
// let i = 0; 
// while(i < 3) {
// 	console.log(`number: ${i}`);
// 	i++;
// }