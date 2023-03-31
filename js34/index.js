// let title = document.querySelector("#title");
//! oncontextmenu
// title.addEventListener("contextmenu", () => {
// 	alert("hey");
// })

//! oncopy
// title.addEventListener("copy", () => {
// 	alert("copy is not allowed!");
// 	return false;
// })
// title.oncopy = () => {
// 	alert("copy is not allowed!");
// 	return false;
// }

//! onchange
// const change = (e) => console.log(e.target.value);

//! onkeypress
// let initial = nm.innerText;
// const change = (e) => {
//   nm.innerText = initial + `${e.target.value}`;
// };
// const change = (e) => {
//   text.innerText = e.target.value;
// };

//! onmousemove
// let box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//   box.style.backgroundColor = `rgb(${e.y}, ${e.x}, ${e.y})`;
// });

//! keyboard
//* altKey, ctrlKey, shiftKey, metaKey
// let box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
// 	if(e.ctrlKey) box.style.backgroundColor = `rgb(${e.y}, ${e.x}, ${e.y})`;
//   console.log(e);
// });

//! Key actions
//* event.key, event.type, event.code
// let input = document.querySelector("input");
// input.addEventListener("keypress", (e) => {
// 	console.log(e.key, e.type, e.code);
// })

//! scroll events
// let box = document.querySelector(".box");
// box.addEventListener("scroll", (e) => {
//   if (e.target.scrollTop + e.target.clientHeight + 50 > e.target.scrollHeight) {
//     box.textContent += box.textContent;
//   }
// });
