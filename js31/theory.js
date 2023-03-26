//! When browser loads, DOM object is created

//! Attribute manipulation
// let parent = document.querySelector(".parent");
//* hasAttribute("attributeName")
// console.log(parent.hasAttribute("class"));
//* getAttribute("attributeName")
// console.log(parent.getAttribute("class"));
//* setAttribute("attributeName", "attributeValue")
// parent.setAttribute("id", "border");
//* removeAttribute("attributeName")
// parent.removeAttribute("id");

//! Insertion | element.before() | element.prepend() | element.append() | element.after() | element.remove()
//! element.insertAdjacentHTML(position, elementNode)
// let parent = document.querySelector(".parent");

// let div = document.createElement("div");
// let text = document.createTextNode("Hello world");
// div.append(text);
// div.setAttribute("id", "border");

// parent.before(div);
// parent.prepend(div);
// parent.append(div);
// parent.after(div);
// parent.remove();

// parent.insertAdjacentHTML("beforebegin", "salom");
// parent.insertAdjacentHTML("afterbegin", "salom");
// parent.insertAdjacentHTML("beforeend", "salom");
// parent.insertAdjacentHTML("afterend", "salom");

//! element.cloneNode(boolean)
// let parent = document.querySelector(".parent");
// let div = parent.cloneNode(true);
// console.log(div);

//! style
// let parent = document.querySelector(".parent");
//* 1
// parent.style.backgroundColor = "black";
// parent.style.color = "white";
// parent.style.border = "3px solid gray";

//* 2
// parent.style.cssText = `
// 	background-color: black;
// 	color: white;
// 	border: 5px solid gray;
// `;

// Table example
// let table = document.querySelector("table");
// table.setAttribute("border", "1");
// table.style.cssText = `
// 	margin: 50px;
// 	width: 300px;
// `;
// let rows = table.firstElementChild.children;
// let rowsArray = Array.from(rows);
// rowsArray.forEach((r, i) => {
//   i % 2 == 1
//     ? (r.style.backgroundColor = "rgb(88, 88, 88)")
//     : (r.style.backgroundColor = "rgb(202, 202, 202)");
// });

//! Geometry
//* offsetWidth, clientWidth, offsetHeight, clientHeight, offsetLeft, clientLeft
// let parent = document.querySelector(".parent");
// console.log(parent.offsetWidth);
// console.log(parent.clientWidth);
// console.log(parent.offsetHeight);
// console.log(parent.clientHeight);
// console.log(parent.offsetLeft);
// console.log(parent.clientLeft);

//* scroll
// let content = document.querySelector(".content");
// console.log(content.scrollHeight);
// console.log(content.offsetHeight);
// console.log(content.clientHeight);

// console.log(content.scrollWidth);
// let btn = document.querySelector("button");
// function expand() {
//   if (content.clientHeight === content.scrollHeight) {
//     content.style.height = "150px";
//     btn.innerText = "show more";
//   } else {
//     content.style.height = `${content.scrollHeight}px`;
//     btn.innerText = "show less";
//   }
// }

//! classList.add("className"), classList.remove("className"), classList.toggle(className)
// let btn = document.querySelector("button");
// let box = document.querySelector(".square");
// function change() {
//   box.classList.toggle("circle");
// }

//! scroll(x, y)
// let text = document.querySelector(".text");
// function scrollText() {
// 	text.scroll(0, text.scrollHeight);
// }

//! scrollBy(x, y)
// let text = document.querySelector(".text");
// function scrollText() {
//   text.scrollBy(0, 10);
// }

//! scrollTo(x, y)
// let text = document.querySelector(".text");
// function scrollText() {
//   text.scrollTo(0, 100);
// }

//! getBoundingClientRect()
// let parent = document.querySelector(".parent");
// console.log(parent.getBoundingClientRect());
