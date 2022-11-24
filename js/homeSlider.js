const next = document.querySelector(".homeSlider__next");
const prev = document.querySelector(".homeSlider__prev");

let slideIndex = [1, 1];
let slideName = ["homeSlider__photo"];
showSlides(1, 0);
showSlides(1, 1);

function showSlides(n, no) {
	let i;
	let x = document.getElementsByClassName(slideName[no]);
	if (n > x.length) {
		slideIndex[no] = 1;
	}
	if (n < 1) {
		slideIndex[no] = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex[no] - 1].style.display = "block";
}
function plusSlides(n, no) {
	showSlides((slideIndex[no] += n), no);
}
// next.addEventListener("click", plusSlides(1, 0));
// prev.addEventListener("click", plusSlides(-1, 0));
