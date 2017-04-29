function blink(ob) {
    if (ob.style.visibility == "visible") {
        ob.style.visibility = "hidden";
    } else {
        ob.style.visibility = "visible";
    }
}
setInterval("blink(bl)", 500);
