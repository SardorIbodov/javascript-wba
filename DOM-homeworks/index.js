// Dropdown logics
{
  const dropdownTitle = document.querySelector(".dropdown_title");
  const dropdownList = document.querySelector(".dropdown_list");
  const dropdownIcon = document.querySelector(".dropdown_icon");

  dropdownTitle.addEventListener("click", () => {
    dropdownList.classList.toggle("hide");
    dropdownIcon.classList.toggle("rotate");
  });
}
// ----------

// Article logics
{
  const articleIcons = document.querySelectorAll(".article_icon");
  articleIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.parentElement.style.display = "none";
    });
  });
}

// ----------

// Slider logics
{
  let sliderImages = document.querySelectorAll(".slider_image");
  let nextBtn = document.querySelector(".next_btn");
  let prevBtn = document.querySelector(".prev_btn");
  let controlBtns = document.querySelectorAll(".control_btn");

  const next = () => {
    for (let i = 0; i < sliderImages.length; i++) {
      if (sliderImages[i].getAttribute("class").includes("active")) {
        sliderImages[i].classList.remove("active");
        if (i === sliderImages.length - 1) {
          i = -1;
        }
        sliderImages[i + 1].classList.add("active");
        break;
      }
    }
    dotsAction();
  };

  const prev = () => {
    for (let i = 0; i < sliderImages.length; i++) {
      if (sliderImages[i].getAttribute("class").includes("active")) {
        sliderImages[i].classList.remove("active");
        if (i === 0) {
          i = sliderImages.length - 1;
        }
        sliderImages[i - 1].classList.add("active");
        break;
      }
    }
    dotsAction();
  };

  let dots = document.querySelector(".dots");
  sliderImages.forEach((v, i) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dots.append(dot);
  });

  const dotsAction = () => {
    let dts = document.querySelectorAll(".dot");
    sliderImages.forEach((v, i) => {
      dts[i].classList.remove("active");
      if (v.getAttribute("class").includes("active")) {
        dts[i].classList.add("active");
      }
    });
    dts.forEach((v, i) => {
      v.addEventListener("click", () => {
        sliderImages.forEach((v) => v.classList.remove("active"));
        sliderImages[i].classList.add("active");
        dts.forEach((v) => v.classList.remove("active"));
        v.classList.add("active");
      });
    });
  };
  dotsAction();

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
}

// ----------

// Pitch logics
{
  let pitch = document.querySelector(".pitch");
  let ball = document.querySelector(".ball");
  pitch.addEventListener("click", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(e);
    ball.style.cssText = `
			position: absolute;
			top: ${y - 35}px;
			left: ${x - 35}px;
		`;
  });
}
