//! Range

//* setStart(startNode, startOffset)
//* setEnd(endNode, endOffset)
//? startOffset is the number of characters from the start of startNode.
//? window.getSelection().addRange(range) => to highlite selected value.

// let data = document.querySelector("#data");
// let range = new Range();
// range.setStart(data.firstChild, 0);
// range.setEnd(data.firstChild, 5);
// window.getSelection().addRange(range);

// let h2 = document.querySelectorAll("h2");
// let range = new Range();
// range.setStart(h2[0], 0);
// range.setEnd(h2[2], 1);
// window.getSelection().addRange(range);

//* Range edit methods
// let h2 = document.querySelectorAll("h2");
// let range = new Range();
// range.setStart(h2[0].firstChild, 0);
// range.setEnd(h2[0].firstChild, 6);
// window.getSelection().addRange(range);

// let button = document.querySelector("button");
//* range.deleteContents()
// button.onclick = () => {
// 	range.deleteContents();
// }
//* range.extractContents()
// button.onclick = () => {
//   let info = range.extractContents();
// 	txt.innerHTML += info.textContent;
// };
//* range.cloneContents()
// button.onclick = () => {
//   console.log(range.cloneContents().textContent);
// };
//* range.insertNode(newNode)
// button.onclick = () => {
// 	let span = document.createElement("span");
// 	span.innerHTML = "New value";
// 	range.insertNode(span);
// }
//* range.surroundContents(newNode)
// button.onclick = () => {
//   let span = document.createElement("span");
//   span.style.color = "red";
//   range.surroundContents(span);
// };

//! Mini typeracer
// let span = document.createElement("span");
// let text = h2[0].innerHTML;
// let counter = 0;
// inp.oninput = (event) => {
//   counter++;
//   if (event.target.value.slice(0, counter) === text.slice(0, counter)) {
//     span.style.color = "green";
//   } else span.style.color = "red";
//   console.log(text.slice(0, counter));
//   h2[0].innerHTML = text;
//   range.setStart(h2[0].firstChild, 0);
//   range.setEnd(h2[0].firstChild, event.target.value.length);
//   range.surroundContents(span);
// };

//! Select
// let selection = window.getSelection();
// let range;
// let leng;
// document.onselectionchange = (e) => {
//   console.log(selection.getRangeAt(0).cloneContents());
// };

//! Like an editor
// let h2 = document.querySelectorAll("h2");
// let button = document.querySelector("button");
// document.onselectionchange = (e) => {
//   range = selection.getRangeAt(0);
//   leng = selection.getRangeAt(0).cloneContents().textContent.length;
// };
// button.onclick = () => {
//   range.setStart(h2[0].firstChild, 0);
//   range.setStart(h2[0].firstChild, leng);
//   range.deleteContents();
// };
