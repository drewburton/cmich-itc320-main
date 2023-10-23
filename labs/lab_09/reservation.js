"use strict";

const submit_form = evt => {
	let valid = true;

	let arrival_date = $("#arrival_date").val();
	if (new Date(arrival_date) == "Invalid Date") {
		$("#arrival_date").next().text("Must be a valid date.");
		valid = false;
	}

	let nights = $("#nights").val();
	if (!parseInt(nights)) {
		$("#nights").next().text("Must be numeric.");
		valid = false;
	}

	let name = $("#name").val();
	if (!name) {
		$("#name").next().text("Must provide a name.");
		valid = false;
	}

	let email = $("#email").val();
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	if (!email || !emailPattern.test(email)) {
		$("#email").next().text("Must be a valid email address.");
		valid = false;
	}

	let phone = $("#phone").val();
	if (!phone) {
		$("#phone").next().text("This field is required.");
		valid = false;
	}

	if (!valid)
		evt.preventDefault();

	$("#arrival_date").val(arrival_date.toString().trim());
	$("#nights").val(nights.toString().trim());
	$("#name").val(name.toString().trim());
	$("#email").val(email.toString().trim());
	$("#phone").val(phone.toString().trim());
}

$(document).ready(() => {

	$("#arrival_date").focus();
	$("#reservation_form").on("submit", submit_form);
}); // end ready