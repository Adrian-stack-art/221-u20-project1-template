function goToLocation(path){
    window.locationref = path;
}

function checkKeyPress(e) {
    if (e.keyCode == 32) {
        e.preventDefault ();
        goToLocation('http://my.marist.edu');
    }
}
    window.onload = function () {
        document.body.setAttribute("tabindex", "0");
        document.body.focus();
        document.body.addEventListener("keydown", checkKeyPress);
        const clickTarget = document.getElementById("portal_button");
        if(clickTarget) {
        clickTarget.style.cursor = "pointer";
        clickTarget.addEventListener("click", () => {
            goToLocation("https://facepunch.com");
        });
    }
    };
    



