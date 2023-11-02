"use strict";

const getRandomNumber = max => {
    let random = null;
    if (!isNaN(max)) {
        random = Math.random();             // value >= 0.0 and < 1.0
        random = Math.floor(random * max);  // value is an integer between 0 and max - 1
        random = random + 1;                // value is an integer between 1 and max
    }
    return random;
};

$(document).ready(() => {
    $("#generate").click(() => {
        const input = $("#num").val();
        $("#password").val(""); // clear previous entry

        if (isNaN(input)) {
            alert("Please enter a valid number");
        } else {
            const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
            let password = "";
            for (let i = 0; i < parseInt(input); i++) {
                let char_index = Math.floor(Math.random() * chars.length);
                password += chars[char_index];
            }
            $("#password").val(password);
        }
    }); // end click()

    $("#clear").click(() => {
        $("#num").val("");
        $("#password").val("");
        $("#num").focus();
    }); // end click()

    // set focus on initial load
    $("#num").focus();
}); // end ready()