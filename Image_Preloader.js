/**************************************************
 * Image Preloader
 *
 * Prevent stuttering and other negative effects
 * by loading your images before your content
 * appears.
 *
 * Place your image URLS within the imageUrls array.
 *
 * @author Joel Regus
 **************************************************/

(function() {
    "use strict";

    var imageUrls = [],
        images = [],
        totalImages = imageUrls.length,
        imagesLoaded = 0,
        i;

    function onComplete() {
        /* Do Something */
    }

    function onImageLoad() {
        imagesLoaded++;

        if (imagesLoaded === totalImages) {
            onComplete();
        }
    }

    for (i = 0; i < totalImages; i++) {
        images[i] = new Image();
        images[i].onload = onImageLoad;
        images[i].src = imageUrls[i];
    }

}());
