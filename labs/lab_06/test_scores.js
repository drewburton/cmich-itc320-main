"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const addScore = () => {
	let valid = true;

	// retrieve name input and handle errors
	let nameInput = $("#name");
	let name = nameInput.value;
	if (!name) {
		nameInput.nextElementSibling.textContent = "Please enter a name";
		valid = false;
	} else {
		nameInput.nextElementSibling.textContent = "";
	}

	// retrieve score input and handle errors
	let scoreInput = $("#score");
	let score = parseInt(scoreInput.value);
	if (isNaN(score) || score < 0 || score > 100) {
		scoreInput.nextElementSibling.textContent = "Score must be between 0 and 100.";
		valid = false;
	} else {
		scoreInput.nextElementSibling.textContent = "";
	}

	// if no errors, add name and score to arrays
	if (valid) {
		names.push(name);
		scores.push(score);
	}

	// focus on the name input and clear the contents of the inputs
	nameInput.focus();
	nameInput.value = "";
	scoreInput.value = "";

	// hide the results and scores since the values have changed
	$("#results").textContent = "";
	$("#scores").textContent = "";
};

const displayResults = () => {
	// create the results header
	let headerElement = document.createElement("h2");
	headerElement.textContent = "Results";

	// calculate the average and store in a text element
	let avg = scores.reduce((score1, score2) => score1 + score2) / scores.length;
	let averageElement = document.createElement("p");
	averageElement.textContent = "Average score = " + avg;

	// calculate the highest score and store in a text element
	let indexMax = 0;
	scores.forEach((value, index) =>
		indexMax = value > scores[indexMax] ? index : indexMax);
	let highestElement = document.createElement("p");
	highestElement.textContent = "High score = " + names[indexMax] + " with a score of " + scores[indexMax];

	// get the results div and clear the elements in it
	let resultsContainer = $("#results");
	resultsContainer.textContent = "";

	// add the new elements to the container
	resultsContainer.appendChild(headerElement);
	resultsContainer.appendChild(averageElement);
	resultsContainer.appendChild(highestElement);
};

const displayScores = () => {
	// get the scores div and clear the elements in it
	let scoresContainer = $("#scores");
	scoresContainer.textContent = "";

	let headerElement = document.createElement("h2");
	headerElement.textContent = "Scores";
	scoresContainer.appendChild(headerElement);

	for (let i in scores) {
		let nameElement = document.createElement("label");
		nameElement.textContent = names[i];

		let scoreElement = document.createElement("label");
		scoreElement.textContent = scores[i];

		scoresContainer.appendChild(nameElement);
		scoresContainer.appendChild(scoreElement);
		scoresContainer.appendChild(document.createElement("br"));
	}
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers

	$("#name").focus();

	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});