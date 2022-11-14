const showHamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");
function myFunction() {
	showHamburger.classList.toggle("showMenu");
}

mobileMenu.addEventListener("click", myFunction);
