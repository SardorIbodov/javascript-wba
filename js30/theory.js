//! DOM => Document Object Module (All HTML elements)
//! CSSOM => CSS Object Module
//! BOM => Brauser Object Module (History, location, ...)

//! Window => global object
// alert(window.innerWidth);
// alert(window.innerHeight);

// document.title = "DOM";
// alert(location.href);
// alert(location.pathname);

//! Window and Document => Document is a part of window
// console.log(window);
// console.log(document);

//! Node vs Element
// let ul = document.getElementsByTagName("ul")[0];
// console.log(ul.children);
// console.log(ul.childNodes);
// console.log(ul.parentElement);
// console.log(ul.parentNode);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.lastElementChild.previousElementSibling);
// console.log(ul.lastElementChild.previousElementSibling.previousElementSibling);

//! Selectors
//* getElementsByTagName
// let body = document.getElementsByTagName("body")[0];
// console.log(body);
// body.style.backgroundColor = "red";

//* getElementsByClassName
// let parent = document.getElementsByClassName("parent");
// console.log(parent);

//* getElementById => if there exist 2 or more elements with same id, it brings first one!
// let id = document.getElementById("bir");
// id.style.color = "red";

//* querySelector
// let body = document.querySelector("body");
// let parent = document.querySelector(".parent");
// let id = document.querySelector("#bir");
// console.log(body, parent, id);

//* querySelectorAll
// let li = document.querySelectorAll("li");
// console.log(li);
// let id = document.querySelectorAll("#bir");
// console.log(id);

//* id without declaration
// console.log(bir);

//! innerHTML, innerText, textContent
// uch.innerHTML = "<p>Link</p>";
// uch.innerText = "<p>Link</p>";
// uch.textContent = "<p>Link</p>";

//! Difference between them
// console.log(list.innerHTML);
// console.log(list.innerText);
// console.log(list.textContent);

//! hidden
// uch.hidden = true;
// uch.hidden = false;


