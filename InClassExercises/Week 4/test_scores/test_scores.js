"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score = parseInt($("#score").value);
	let isValid = true;

	// check entries for validity
	if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}

	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}

	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
		$("#name").value = "";
		$("#score").value = "";
		$("#scores_display").value = "";
		// clear the text area
	}
	$("#name").focus();
};

const displayScores = () => {
	for (const index in names) {
		$("#scores_display").value += names[index] + " = " + scores[index] + "\n";
	}
};

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_scores").addEventListener("click", displayScores);
	// add display scores to button
	$("#name").focus();
});
