"use strict";

const $ = selector => document.querySelector(selector);

$("#subtotal").focus();

const processEntries = () => {
	let subtotal = parseFloat($("#subtotal").value);
	let taxRate = parseFloat($("#tax_rate").value);

	if (subtotal < 0 || subtotal > 10000 || isNaN(subtotal)) {
		alert("Subtotal must be > 0 and < 10000");
		$("#subtotal").value = "";
		$("#subtotal").focus();
		return;
	}
	if (taxRate < 0 || taxRate > 12 || isNaN(taxRate)) {
		alert("Tax Rate must be > 0 and < 12");
		$("#tax_rate").value = "";
		$("#tax_rate").focus();
		return;
	}

	let salesTax = subtotal * (taxRate / 100);
	let total = subtotal + salesTax;

	$("#tax").value = salesTax.toFixed(2);
	$("#total").value = total.toFixed(2);

	$("#subtotal").focus();
};

const clear = () => {
	clearSubtotal();
	clearTaxRate();
	$("#tax").value = "";
	$("#total").value = "";

	$("#subtotal").focus();
};

const clearSubtotal = () => {
	$("#subtotal").value = "";
};

const clearTaxRate = () => {
	$("#tax_rate").value = ""
};

document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntries);
	$("#clear").addEventListener("click", clear);
	$("#subtotal").addEventListener("click", clearSubtotal);
	$("#tax_rate").addEventListener("click", clearTaxRate);
});
