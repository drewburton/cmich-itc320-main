"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);
const setErrorField = (selector, message) => { $(selector).nextElementSibling.textContent = message; };

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        setErrorField("#miles", "Miles driven must be a valid number greater than zero");
        focusAndSelect("#miles");
    }
    if (isNaN(gallons) || gallons <= 0) {
        setErrorField("#gallons", "Gallons of gas used must be a valid number greater than zero.");
        focusAndSelect("#gallons");
    }

    if (!isNaN(miles) && !isNaN(gallons) && miles > 0 && gallons > 0) {
        $("#mpg").value = calculateMPG(miles, gallons);
        setErrorField("#miles", "");
        setErrorField("#gallons", "");
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
    setErrorField("#miles", "*");
    setErrorField("#gallons", "*");
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
});