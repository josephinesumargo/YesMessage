function yes() {
    document.getElementById("decisionImage").src = "images/yayy.gif";
    window.alert("YAYY! I know I am beautiful! :)");
}

function no(here) {
    here.style.position = "absolute";
    here.style.left = `${Math.floor(Math.random() * 90)}%`;
    here.style.top = `${Math.floor(Math.random() * 90)}%`;
}
