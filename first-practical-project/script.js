const more_avengers = document.getElementById("more_avengers");
const component = document.querySelector(".component");

more_avengers.addEventListener("click", () => {
    component.classList.toggle("show");
});