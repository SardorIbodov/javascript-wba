const input = document.querySelector("input");
const button = document.querySelector("button");
const addButton = document.querySelector(".add");
const list = document.querySelector(".list");
let base = [];

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addButton.click();
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
    const deleteSpan = document.createElement("span");
    deleteSpan.classList.add("delete");
    const button = document.createElement("button");
    const id = generator.next().value;
    button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    button.setAttribute("onclick", `deleteUser("${id}")`);
    li.setAttribute("data-id", `${id}`);
    deleteSpan.append(button);
    li.classList.add("list-item");
    li.innerHTML = `
			<span class="name">${name}</span>
		`;
    li.append(deleteSpan);
    base.push(li);
    input.value = "";
  }
  console.log(base);
  display(base);
}

function display(data) {
  list.innerHTML = "";
  data.forEach((item) => {
    list.append(item);
  });
}

function deleteUser(id) {
  base = base.filter(
    (i) => `${i.getAttribute("data-id")}` !== `${id}`
  );
  display(base);
}
