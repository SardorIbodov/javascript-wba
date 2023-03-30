let pitch = document.querySelector(".pitch");
let ball = document.querySelector(".ball");
pitch.addEventListener("click", (e) => {
  let x = e.x;
  let y = e.y;
  console.log("x:", x, "y:", y);
  ball.style.cssText = `
		position: absolute;
		top: ${y - 35}px;
		left: ${x - 35}px;
	`;
});
