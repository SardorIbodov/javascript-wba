// Dropdown logics
const dropdownTitle = document.querySelector(".dropdown_title");
const dropdownList = document.querySelector(".dropdown_list");
const dropdownIcon = document.querySelector(".dropdown_icon");

dropdownTitle.addEventListener("click", () => {
  dropdownList.classList.toggle("hide");
  dropdownIcon.classList.toggle("rotate");
});
// ----------

// Article logics
const articleIcons = document.querySelectorAll(".article_icon");
articleIcons.forEach(icon => {
	icon.addEventListener("click", () => {
		icon.parentElement.style.display = "none";
	})
})
// ----------


