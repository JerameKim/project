// Render the first slide on load
var slideIdx = 1;
slideAt(slideIdx);

// Runs stepForward every 2 seconds for the autoscroll effect
window.setInterval(stepForward, 2000);

// moves forward one
function stepForward() {
    showSlides((slideIdx += 1));
}

// Moves slide 1 forward or 1 backward
function stepBackward() {
    showSlides((slideIdx -= 1));
}

// Reveals slides after moving a step forward
function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    var mark = document.getElementsByClassName("fas fa-circle");

    // If we move outside of length, reset to beginning of slideshow
    if (n > slides.length) {
        slideIdx = 1;
    }
    // if we are at the beginning moving backward, loop around
    if (n == 0) {
        slideIdx = slides.length;
    }

    // hide the slides and marks we dont' want to see
    for (j = 0; j < mark.length; j++) {
        slides[j].style.display = "none";
        mark[j].className = "fas fa-circle unmarked";
    }

    // Show the slide we want
    slides[slideIdx - 1].style.display = "block";
    // Remove style from circle so it can be seen as "selected"
    mark[slideIdx - 1].className = "fas fa-circle";
}

function slideAt(n) {
    var slideIdx = n;
    var slides = document.getElementsByClassName("slide");
    var mark = document.getElementsByClassName("fas fa-circle");

    // hide the other slides and edit the marks's style
    for (j = 0; j < mark.length; j++) {
        slides[j].style.display = "none";
        mark[j].className = "fas fa-circle unmarked";
    }

    // Show the slide we want
    slides[slideIdx - 1].style.display = "block";
    // Remove style from circle so it can be seen as "selected"
    mark[slideIdx - 1].className = "fas fa-circle";
}

function changeTab(evt, tabId) {
    // Change the tabContent and tabLink to be cleared out so they may be set
    var tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    var tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = "tabLink";
    }

    // Display current tab and mark tab indicators
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className = "tabLink active";
}
