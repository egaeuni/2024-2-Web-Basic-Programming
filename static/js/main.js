function init() {
    let images = document.getElementsByClassName("poster");
        for (let img of images) {
            img.addEventListener('mouseover', zoomIn);
            img.addEventListener('mouseout', zoomOut);
        }
        let table = document.getElementById("taste");
        table.addEventListener('click', change);
    }

function zoomIn() {
    this.classList.add("scale-up");
}

function zoomOut() {
    this.classList.remove("scale-up");
}

document.addEventListener('DOMContentLoaded', init);

window.onload = function () {
    if (localStorage.getItem("watched") === "true") {
    var movieElements = document.getElementsByClassName("watched");
    for (var i = 0; i < movieElements.length; i++) {
        movieElements[i].style.display = "none"; // 영화 항목 숨기기
    }
    }
};