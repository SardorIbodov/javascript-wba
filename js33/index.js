function onclick() {
  console.log("Button clicked");
}

function onmousedown() {
  console.log("Button onmousedown");
}

function onmouseup() {
  console.log("Button onmouseup");
}

// button.addEventListener("click", onclick);
// button.addEventListener("mousedown", onmousedown);
// button.addEventListener("mouseup", onmouseup);

//! Handle events
// class Events {
//   handleEvent(events) {
//     switch (events.type) {
//       case "click":
//         onclick();
//         break;
//       case "mousedown":
//         onmousedown();
//         break;
//       case "mouseup":
//         onmouseup();
//         break;
//     }
//   }
// }
// const evn = new Events();

// button.addEventListener("click", evn);
// button.addEventListener("mousedown", evn);
// button.addEventListener("mouseup", evn);

//! Event bubling
// function grand() {
//   console.log("grand");
// }
// function parent(event) {
//   event.stopPropagation();
//   event.stopImmediatePropagation();
//   console.log("parent");
// }
// function child(event) {
//   event.stopPropagation();
//   event.stopImmediatePropagation();
//   console.log("child");
// }

//! Event delegation
// let table = document.querySelector("table");
// let target;
// table.onclick = (event) => {
//   if (target) target.removeAttribute("class");
//   target = event.target;
//   target.setAttribute("class", "highlited");
// };

//! Prevent default
// let link = document.querySelector("a");
// link.addEventListener("click", (e) => {
//   e.preventDefault();
// });
