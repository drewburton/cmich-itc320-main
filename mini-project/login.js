"use strict";

const $ = selector => document.querySelector(selector);

const login = () => {
	let password = prompt("Enter your password:");
	while (password != "admin") {
		alert("Incorrect password. Please try again.");
		password = prompt("Enter your password:");
	}
	window.location.href = "to_do_list.html";
};

document.addEventListener("DOMContentLoaded", () => {
	$("#login").addEventListener("click", login);
});