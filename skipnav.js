// Vanilla JS version
// link looks like:   <a href="#main" id="skipnav">skipnav</a>
document.querySelector("#skipnav").addEventListener("click", function(event) {
    const element = event.currentTarget;
    const skipToID = "#" + element.getAttribute('href').split('#')[1];
    let target = document.querySelector(skipToID);
    let removeTabIndex = (event) => {
        event.target.setAttribute("tabindex", "");
    };

    if (target.length === 0) {
        console.log("target not found [" + skipToID + "]");
    }

    target.setAttribute("tabindex", -1);
    target.focus();
    target.addEventListener('blur', removeTabIndex);
    target.addEventListener('focusout', removeTabIndex);
});
