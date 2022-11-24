const sliderBox = document.querySelector(".productList__slider");

const productTile = document.querySelector(".productList__tile");

const arrowPrev = document.querySelector(".productList__arrow--left");
const arrowNext = document.querySelector(".productList__arrow--right");

function tileMover() {
	sliderBox.style.transform = `translateX(-352px)`;
}

arrowNext.addEventListener("click", tileMover);
