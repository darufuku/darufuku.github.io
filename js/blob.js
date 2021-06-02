/**
 * Thank you J. Scott Smith for a guide on how to do this!
 * @see: https://codepen.io/jscottsmith/pen/yHuhw
 */

(function() {
    const blobContainer = document.querySelector("#blob-container");

    let top = blobContainer.getBoundingClientRect().top;
    let left = blobContainer.getBoundingClientRect().left;
    let width = blobContainer.offsetWidth;

    window.addEventListener("mousemove", e => {
        let direction = "";

        if (e.pageY < top) {
            direction += "n";
        }

        if (e.pageX > left + width) {
            direction += "e";
        } else if (e.pageX < left) {
            direction += "w";
        }

        blobContainer.className = direction;
        e.stopPropagation();
    });

})();