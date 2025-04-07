/** @format */

const ratingState = document.getElementById("rating-state");
const submitButton = document.getElementById("submit");
const thanksState = document.getElementById("thank-you-state");
const ratingNumber = Array.from(document.getElementsByTagName("li"));
const numberSelected = document.getElementById("number-selected");

let selectedRating = null;
ratingNumber.forEach((li) => {
	li.addEventListener("click", function () {
		ratingNumber.forEach((item) => (item.style.backgroundColor = ""));
		li.style.backgroundColor = "white";
		selectedRating = li.getAttribute("data-value");
	});
});

submitButton.addEventListener("click", function (event) {
	event.preventDefault();
	if (selectedRating) {
		ratingState.style.display = "none";
		thanksState.style.display = "flex";
		numberSelected.innerHTML = `You selected ${selectedRating} out of 5`;
	} else {
		alert("please select a rating before submitting");
	}
});
