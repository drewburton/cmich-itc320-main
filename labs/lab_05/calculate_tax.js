"use strict";
const $ = selector => document.querySelector(selector);

let processEntry = () => {
	let income = parseInt($("#income").value);

	if (income < 0 || isNaN(income)) {
		alert("The entered income is invalid");
		$("#income").value = "";
		$("#income").focus();
		return;
	}

	let tax = calculateTax(income);
	$("#tax").value = tax;
	$("#income").focus();
};

function calculateTax(income) {
	let tax;
	if (income <= 9875) {
		tax = income * 0.1;
	} else if (income <= 40125) {
		tax = 987.5 + (income - 9875) * 0.12;
	} else if (income <= 85525) {
		tax = 4617.5 + (income - 40125) * 0.22;
	} else if (income <= 163300) {
		tax = 14605.5 + (income - 85525) * 0.24;
	} else if (income <= 207350) {
		tax = 33271.5 + (income - 163300) * 0.32;
	} else if (income <= 518400) {
		tax = 47367.5 + (income - 207350) * 0.35;
	} else {
		tax = 156235 + (income - 518400) * 0.37;
	}
	return tax.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});