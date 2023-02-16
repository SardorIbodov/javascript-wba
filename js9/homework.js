let arr = ["webbrain", "academy"];
const characterCount = arr => {
	let result = {};
	let characterArr = arr.join("").toLowerCase().split("");
	for(let item of characterArr) {
		result[item] ? result[item]++ : result[item] = 1;
	}
	return result;
}
