//! CRUD
const allElements = document.querySelector("*");
allElements.style.cssText = `
	margin: 0;
	padding: 0;
	box-sizing: border-box;
`;

const body = document.body;
body.cssText = `

`;
const wrapper = document.createElement("div"),
  inputBox = document.createElement("div"),
  input = document.createElement("input"),
  buttonAdd = document.createElement("button"),
  list = document.createElement("ul");

wrapper.style.cssText = `
	width: 400px;
	margin: 50px auto;
	padding: 25px 50px;
	border: 3px solid black;
`;

input.setAttribute("autofocus", true);
input.style.cssText = `
	width: 70%;
	height: 30px;
`;
buttonAdd.setAttribute("onclick", "addUser()");
buttonAdd.style.cssText = `
	width: 20%;
`;
buttonAdd.innerText = "Add";

inputBox.append(input, buttonAdd);
inputBox.style.cssText = `
	margin-bottom: 25px;
	display: flex;
	justify-content: space-between;
`;

list.style.cssText = `
	padding: 0;
	margin: 0;
`;

wrapper.append(inputBox);
body.prepend(wrapper);

let base = [];

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    buttonAdd.click();
  }
});

function* idGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
let generator = idGenerator();

function addUser() {
  if (input.value) {
    const li = document.createElement("li");
    const name = input.value;
    const buttonSpan = document.createElement("span");
    const buttonDelete = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const id = generator.next().value;
    buttonEdit.innerHTML = `<i class="fa-solid fa-pen" style="font-size: 18px; color: green;"></i>`;
    buttonDelete.innerHTML = `<i class="fa-solid fa-trash" style="font-size: 18px; color: red;"></i>`;
    buttonDelete.style.cssText = `
			width: 20px;
			cursor: pointer;
			background: none;
			border: none;
		`;
    buttonEdit.style.cssText = `
			width: 20px;
			cursor: pointer;
			background: none;
			border: none;
			margin-left: 10px;
		`;
    buttonEdit.setAttribute("onclick", `editUser(${id})`);
    buttonDelete.setAttribute("onclick", `deleteUser(${id})`);
    li.setAttribute("data-id", `${id}`);
    buttonSpan.append(buttonDelete);
    buttonSpan.append(buttonEdit);
    li.style.cssText = `
			display: flex;
			justify-content: space-between;
			border: 1px solid;
			padding: 10px;
			margin-top: 10px;
		`;
    li.innerHTML = `
			<span class="name">${name}</span>
		`;
    li.append(buttonSpan);
    base.push(li);
    input.value = "";
  }
  display(base);
}

function display(data) {
  list.innerHTML = "";
  data.forEach((item) => {
    list.append(item);
  });
  wrapper.append(inputBox, list);
  body.prepend(wrapper);
}

function deleteUser(id) {
  base = base.filter((i) => `${i.getAttribute("data-id")}` !== `${id}`);
  display(base);
}

function editUser(id) {
  let selectedItem = base.find((v) => {
    return `${v.getAttribute("data-id")}` === `${id}`;
  });
  console.log(selectedItem);
}
