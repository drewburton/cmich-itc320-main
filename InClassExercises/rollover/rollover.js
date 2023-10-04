"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers for hovering an image
        /*
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
        */
        setTimeout(() => image.src = newURL, 1000);
        setTimeout(() => image.src = oldURL, 2000);
    }
});