// DOM이 로드되면 실행될 초기화 함수
function init() {
    // "poster" 클래스를 가진 모든 이미지 요소를 선택
    let images = document.getElementsByClassName("poster");
    // 각 이미지에 대해 마우스 이벤트 리스너 추가
    for (let img of images) {
        img.addEventListener('mouseover', zoomIn);  // 마우스를 올렸을 때 확대
        img.addEventListener('mouseout', zoomOut);  // 마우스를 벗어났을 때 원래 크기로
    }
    // "taste" Id를 가진 테이블 요소 선택
    let table = document.getElementById("taste");

    // 영화 이미지를 동적으로 생성하고, 클릭 시 영화 상세 페이지로 이동하는 기능 추가
    displayMovies();  // wishlistMovies 배열에 있는 영화들을 화면에 표시
}

// 요소를 확대하는 함수
function zoomIn() {
    this.classList.add("scale-up");  // "scale-up" 클래스를 추가하여 확대 효과 적용
}

// 요소를 원래 크기로 되돌리는 함수
function zoomOut() {
    this.classList.remove("scale-up");  // "scale-up" 클래스를 제거하여 확대 효과 해제
}

// 영화 객체 생성자 함수
function WishlistMovie(id, title, detailUrl, imgUrl) {
    this.id = id; // 고유 ID를 추가
    this.title = title;
    this.detailUrl = detailUrl;
    this.imgUrl = imgUrl;
}

// 영화 데이터 배열
const wishlistMovies = [
    new WishlistMovie("wildrobot", "와일드 로봇", "wildrobot.html", "media/main/wish1.jpg"),
    new WishlistMovie("monster", "괴물", "monster.html", "media/main/wish2.jpg"),
];

// 영화 이미지를 동적으로 생성하고 클릭 이벤트를 추가하는 함수
function displayMovies() {
    const movieContainer = document.getElementById("movie-container"); // 영화 이미지들을 추가할 요소

    wishlistMovies.forEach(movie => {
        // 로컬 스토리지에서 해당 영화의 시청 여부 확인
        if (localStorage.getItem(movie.id + "_watched") === "true") {
            return; // 시청 완료한 영화는 추가하지 않음
        }

        const imgElement = document.createElement("img"); // 이미지 요소 생성
        imgElement.src = movie.imgUrl;  // 이미지 소스 설정
        imgElement.alt = movie.title;   // 이미지 설명을 제목으로 설정
        imgElement.classList.add("poster"); // "poster" 클래스를 추가하여 스타일 적용

        // 클릭 시 해당 영화의 detailUrl로 이동하도록 이벤트 추가
        imgElement.onclick = function() {
            // 영화 상세 페이지로 이동
            window.location.href = movie.detailUrl; // detailUrl로 이동
        };

        // zoomIn, zoomOut 기능을 각 이미지에 추가
        imgElement.addEventListener('mouseover', zoomIn);  // 마우스를 올렸을 때 확대
        imgElement.addEventListener('mouseout', zoomOut);  // 마우스를 벗어났을 때 원래 크기로

        movieContainer.appendChild(imgElement); // movieContainer에 이미지 추가
    });
}

// DOM 콘텐츠가 로드되면 init 함수 실행
document.addEventListener('DOMContentLoaded', init);

// 페이지가 완전히 로드된 후 실행되는 함수
window.onload = function () {
    // "watched" 클래스를 가진 모든 요소 선택
    var movieElements = document.getElementsByClassName("watched");
    // 각 영화 요소에 대해 반복
    for (var i = 0; i < movieElements.length; i++) {
        // 각 요소의 "data-movie" 속성 값을 가져옴
        var movieId = movieElements[i].getAttribute("data-movie");
        // 로컬 스토리지에서 해당 영화의 시청 여부 확인
        if (localStorage.getItem(movieId + "_watched") === "true") {
            movieElements[i].style.display = "none";  // 시청한 영화는 화면에서 숨김
        }
    }

    // "wish" ID를 가진 요소를 선택하여 변수에 저장
    let wish = document.getElementById("wish");

    // 선택한 요소의 정보를 문자열로 구성
    let text = "wish.id= " + wish.id + "\n";  // 요소의 ID
    text += "wish.innerHTML = " + wish.innerHTML + "\n";  // 요소의 HTML 내용
    text += "높이 = " + wish.offsetHeight + "\n";  // 요소의 높이 (픽셀 단위)
    text += "너비 = " + wish.offsetWidth + "\n";  // 요소의 너비 (픽셀 단위)

    // 구성된 정보를 알림창으로 표시
    alert(text);
};