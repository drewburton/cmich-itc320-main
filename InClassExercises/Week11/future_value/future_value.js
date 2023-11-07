"use strict"

const calculateClick = () => {
	const investment = parseFloat($('#investment').val());
	const annualRate = parseFloat($('#rate').val());
	const years = parseInt($('#years').val());

	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number greater than zero.");
	}
	else if (isNaN(annualRate) || annualRate <= 0) {
		alert("Annual rate must be a valid number greater than zero.");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Years must be a valid number\nand greater than zero.");
	}
	// if all entries are valid, calulate future value
	else {
		let futureValue = investment;
		for (let i = 1; i <= years; i++) {
			futureValue += futureValue * annualRate / 100;
		}
		$("#future_value").val(futureValue.toFixed(2));
	}
	$('#investment').focus();
};

$(document).ready(() => {
	$('#calculate').click(calculateClick);
	$('#investment').focus();
});