function init() {
    let images = document.getElementsByClassName("poster");
        for (let img of images) {
            img.addEventListener('mouseover', zoomIn);
            img.addEventListener('mouseout', zoomOut);
        }
        let table = document.getElementById("taste");
        table.addEventListener('click', change);
    }

function change() {
    const fragment = document.createDocumentFragment();

    const img1 = document.createElement('img');
        img1.src = "media/main/like.png";
        fragment.appendChild(img1);
        
        const p1 = document.createElement('p');
        p1.textContent = "키워드: SF | 판타지 | 사랑 | 성장 | 뮤지컬";
        fragment.appendChild(p1);
            
        const img2 = document.createElement('img');
        img2.src = "media/main/dislike.png";
        fragment.appendChild(img2);
            
        const p2 = document.createElement('p');
        p2.textContent = "키워드: 범죄 | 액션 | 느와르 | 멜로 | 로맨스";
        fragment.appendChild(p2);
            
        this.innerHTML = '';
        this.appendChild(fragment);
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