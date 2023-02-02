// 123 -> bir yuz yigirma uch
let number = 256;
let numArray = number.toString().split("");
let result = "";

for (let i = 0; i < numArray.length; i++) {
	switch(i) {
		case 0: {
			switch (numArray[i]) {
				case "1":
					result += "bir yuz";
					break;
				case "2":
					result += "ikki yuz";
					break;
				case "3":
					result += "uch yuz";
					break;
				case "4":
					result += "to'rt yuz";
					break;
				case "5":
					result += "besh yuz";
					break;
				case "6":
					result += "olti yuz";
					break;
				case "7":
					result += "yetti yuz";
					break;
				case "8":
					result += "sakkiz yuz";
					break;
				case "9":
					result += "to'qqiz yuz";
					break;
			}
		}
		break;

		case 1: {
			switch (numArray[i]) {
				case "1":
					result += " o'n";
					break;
				case "2":
					result += " yigirma";
					break;
				case "3":
					result += " o'ttiz";
					break;
				case "4":
					result += " qirq";
					break;
				case "5":
					result += " ellik";
					break;
				case "6":
					result += " oltmish";
					break;
				case "7":
					result += " yetmish";
					break;
				case "8":
					result += " sakson";
					break;
				case "9":
					result += " to'qson";
					break;
			}
		}
		break;

		case 2: {
			switch (numArray[i]) {
				case "1":
					result += " bir";
					break;
				case "2":
					result += " ikki";
					break;
				case "3":
					result += " uch";
					break;
				case "4":
					result += " to'rt";
					break;
				case "5":
					result += " besh";
					break;
				case "6":
					result += " olti";
					break;
				case "7":
					result += " yetti";
					break;
				case "8":
					result += " sakkiz";
					break;
				case "9":
					result += " to'qqiz";
					break;
			}
		}
		break;
	}
}

console.log(result);