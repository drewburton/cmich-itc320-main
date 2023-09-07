"use strict";

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while (isNaN(investment));

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while (isNaN(rate));

// get number of years - loop until user enters a number
let years = 0;
do {
    years = parseInt(prompt("Enter number of years", 10));
}
while (isNaN(years));

// calulate future value
let futureValue = investment;
for (let i = 1; i <= years; i++) {
    futureValue += futureValue * rate / 100;
}

// calculate monthy interest future value
let futureValueMonthly = investment;
for (let i = 1; i <= years * 12; i++) {
    futureValueMonthly += futureValueMonthly * (rate / 12) / 100;
}

// display results
document.write('<h3>Future Value With Yearly Interest</h3>');
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

document.write('<h3>Future Value With Monthly Interest</h3>');
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future Value:</label> ${futureValueMonthly.toFixed(2)}</p>`);
