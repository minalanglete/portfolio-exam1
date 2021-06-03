const filter = document.querySelector(".filter");
const showCategories = document.querySelector(".categories");
const filterCategories = document.querySelector(".filter-categories");

showCategories.addEventListener("click", function () {
    filterCategories.classList.toggle("show");
});