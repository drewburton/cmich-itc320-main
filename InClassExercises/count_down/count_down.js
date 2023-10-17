"use strict";

$(document).ready(() => {

    $("#countdown").click(() => {
        const eventName = $("#event").val();
        const eventDate = $("#date").val();
        const messageLbl = $("#message");

        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) {
            messageLbl.text("Please enter both a name and a date.");
            return;
        }

        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length != 3) {
            messageLbl.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }
        // make sure event date string has a 4-digit year
        const year = eventDate.substring(eventDate.length - 4);
        if (isNaN(year)) {
            messageLbl.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }
        // make sure valid month is entered
        const month = dateParts[0];
        if (!month || month < 1 || month > 12) {
            messageLbl.text("Please enter a valid month.");
            return;
        }
        // make sure valid day is entereda
        // 31 days January, March, May, July, August, October, and December.
        // 30 days April, June, September, and November
        const day = dateParts[1];
        if (!day || day < 0) {
            messageLbl.text("Please enter a valid day.");
            return;
        } else if (month == 1 || month == 3 || month == 5 ||
            month == 7 || month == 8 || month == 10 || month == 12) {
            if (day > 31) {
                messageLbl.text("Please enter a valid day.");
                return
            }
        } else if (month == 4 || month == 7 || month == 9 || month == 11) {
            if (day > 30) {
                messageLbl.text("Please enter a valid day");
                return;
            }
        } else if (month == 2) {
            // check for a leap year (if february has 29 days)
            if (new Date(year, 1, 29).getDate() == 29 && day > 29) {
                messageLbl.text("Please enter a valid day");
                return;
            } else if (new Date(year, 1, 29).getDate() != 29 && day > 28) {
                messageLbl.text("Please enter a valid day");
                return;
            }
        }
        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        if (date == "Invalid Date") {
            messageLbl.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = eventName.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0, 1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        }
        formattedName = formattedName.trimEnd();

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil(msFromToday / msForOneDay);

        // create and display message 
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${formattedName}! (${date})`;
        }
        else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
        }
        messageLbl.text(msg);
    });

    $("#event").focus();
});