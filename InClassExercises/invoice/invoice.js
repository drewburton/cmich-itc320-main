"use strict";

const calculateDiscount = (customer, subtotal) => {
    if (customer == "reg") {
        if (subtotal >= 100 && subtotal < 250) {
            return .1;
        } else if (subtotal >= 250 && subtotal < 500) {
            return .25;
        } else if (subtotal >= 500) {
            return .3;
        } else {
            return 0;
        }
    }
    else if (customer == "loyal") {
        return .3;
    }
    else if (customer == "honored") {
        if (subtotal < 500) {
            return .4;
        }
        else {
            return .5;
        }
    }
};

const formatDate = date => {
    if (date == "Invalid Date")
        return "";

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    return month.toString().padStart(2, '0') + "/" +
        day.toString().padStart(2, '0') + "/" + year;
};

$(document).ready(() => {

    $("#calculate").click(() => {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val();
        subtotal = parseFloat(subtotal);
        if (isNaN(subtotal) || subtotal <= 0) {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }

        let invoiceString = $("#invoice_date").val();
        let invoiceDate = formatDate(new Date(invoiceString));
        if (invoiceString != "" && invoiceDate == "") {
            alert("Invoice Date must be a valid date.");
            $("#clear").click();
            $("#invoice_date").focus();
            return;
        } else if (invoiceString == "") {
            invoiceDate = formatDate(new Date());
        }
        let dueDate = new Date(invoiceString);
        dueDate.setDate(dueDate.getDate() + 30)
        dueDate = formatDate(dueDate);

        $("#invoice_date").val(invoiceDate);
        $("#due_date").val(dueDate);

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;

        $("#subtotal").val(subtotal.toFixed(2));
        $("#percent").val((discountPercent * 100).toFixed(2));
        $("#discount").val(discountAmount.toFixed(2));
        $("#total").val(invoiceTotal.toFixed(2));

        // set focus on type drop-down when done  
        $("#type").focus();

    });

    $("#clear").click(() => {

        $("#type").val("reg");
        $("#subtotal").val("");
        $("#invoice_date").val("");
        $("#percent").val("");
        $("#discount").val("");
        $("#total").val("");
        $("#due_date").val("");

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});

