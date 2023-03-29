//! Mouse events
//* onmousemove
// const move = () => console.log("moving...");
// const move = (e) => console.log("X:", e.x, "Y:", e.y);

//* this = event.target
// const cl = (th, e) => console.log(th, e.target);

//! element.onclick()
// btn.onclick = function () {
//   console.log("hi");
// };

//! Working with data and CRUD
// import { users } from "./data.js";
// let data = users;

// const ondelete = (id) => {
//   let res = data.filter((user) => user.id !== id);
//   data = res;
//   container.innerHTML = null;
//   displayData();
// };

// const displayData = () => {
//   if (!data.length) container.innerHTML = "No data!";
//   data.forEach((user) => {
//     let div = document.createElement("div");
//     let btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     btn.addEventListener("click", () => ondelete(user.id));
//     div.innerHTML = `${user.id} - ${user.name}`;
//     div.append(btn);
//     container.append(div);
//   });
// };
// displayData();
