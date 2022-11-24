const title1 = document.querySelector(".footerMobile__title1");
const title2 = document.querySelector(".footerMobile__title2");
const title3 = document.querySelector(".footerMobile__title3");
const title4 = document.querySelector(".footerMobile__title4");

const list1 = document.querySelector(".footerMobile__list1");
const list2 = document.querySelector(".footerMobile__list2");
const list3 = document.querySelector(".footerMobile__list3");
const list4 = document.querySelector(".footerMobile__list4");

x = 0;
function showingList1() {
	if (x % 2 == 0) {
		list1.style.display = "block";
		list2.style.display = "none";
		list3.style.display = "none";
		list4.style.display = "none";
		x += 1;
	} else if (x % 2 != 0) {
		x -= 1;
		list1.style.display = "none";
	}
}
function showingList2() {
	if (x % 2 == 0) {
		list1.style.display = "none";
		list2.style.display = "block";
		list3.style.display = "none";
		list4.style.display = "none";
		x += 1;
	} else if (x % 2 != 0) {
		x -= 1;
		list2.style.display = "none";
	}
}
function showingList3() {
	if (x % 2 == 0) {
		list1.style.display = "none";
		list2.style.display = "none";
		list3.style.display = "block";
		list4.style.display = "none";
		x += 1;
	} else if (x % 2 != 0) {
		x -= 1;
		list3.style.display = "none";
	}
}
function showingList4() {
	if (x % 2 == 0) {
		list1.style.display = "none";
		list2.style.display = "none";
		list3.style.display = "none";
		list4.style.display = "block";
		x += 1;
	} else if (x % 2 != 0) {
		x -= 1;
		list4.style.display = "none";
	}
}

title1.addEventListener("click", showingList1);
title2.addEventListener("click", showingList2);
title3.addEventListener("click", showingList3);
title4.addEventListener("click", showingList4);
