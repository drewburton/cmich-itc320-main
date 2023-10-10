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

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero

    // if seconds total 60, increment minutes by one and reset seconds to zero

    //display new stopwatch time

};

// event handler functions
const startStopwatch = evt => {
    // prevent default action of link

    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.

};

const stopStopwatch = evt => {
    // prevent default action of link

    // stop timer

};

const resetStopwatch = evt => {
    // prevent default action of link

    // stop timer

    // reset elapsed variables and clear stopwatch display

};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);

    // set up stopwatch event handlers
});
