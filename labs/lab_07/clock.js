"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let ampm = "PM";
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours -= 12;
    } else { // adjust 12 noon and 12 midnight
        ampm = "AM";
    }

    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(minutes);
    $("#seconds").textContent = padSingleDigit(seconds);
    $("#ampm").textContent = ampm;
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds >= 1000) {
        elapsedMilliseconds -= 1000;
        elapsedSeconds += 1;
    }

    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsedSeconds >= 60) {
        elapsedSeconds -= 60;
        elapsedMinutes += 1;
    }

    //display new stopwatch time
    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, "0");
};

// event handler functions
const startStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();

    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.
    if (!stopwatchTimer) {
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }
};

const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;

    // reset elapsed variables and clear stopwatch display
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;

    $("#s_minutes").textContent = padSingleDigit(elapsedMinutes);
    $("#s_seconds").textContent = padSingleDigit(elapsedSeconds);
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, "0");
};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);

    // set up stopwatch event handlers
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});
