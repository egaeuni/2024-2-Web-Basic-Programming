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
    var movieElements = document.getElementsByClassName("watched");
    for (var i = 0; i < movieElements.length; i++) {
        var movieId = movieElements[i].getAttribute("data-movie");
        if (localStorage.getItem(movieId + "_watched") === "true") {
            movieElements[i].style.display = "none"; // 해당 영화 항목만 숨기기
        }
    }
};