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
