const container = document.querySelector(".container");
container.style.cssText = `
	width: 500px;
	height: 500px;
	margin: 10px auto;
	display: flex;
	flex-wrap: wrap;
`;

let values = [];
for (let i = 1; i <= 100; i++) {
  values.push(i);
}
const createButtons = (array) => {
  array.forEach((v) => {
    let button = document.createElement("button");
    button.innerText = v;
    button.style.cssText = `
			width: 50px;
			height: 50px;
		`;
    button.setAttribute("onclick", `change(${v})`);
    container.append(button);
  });
};
createButtons(values);

function change(v) {
  values = values.map((val) => {
    if (val % v === 0) {
      return "*";
    } else return val;
  });
  container.innerHTML = null;
  createButtons(values);
}
