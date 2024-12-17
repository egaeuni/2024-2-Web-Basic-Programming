// 영화를 시청 완료로 표시하는 함수
function markAsWatched(movieId) {
  // 로컬 스토리지에 시청 완료 정보를 저장
  // 키는 'movieId_watched', 값은 'true'로 설정
  localStorage.setItem(movieId + "_watched", "true");

  // 사용자에게 시청 완료 메시지를 알림으로 표시
  alert(movieId + " 시청 완료!");
}
