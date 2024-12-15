function markAsWatched(movieId) {
  // 로컬 스토리지에 시청 완료 정보를 저장
    localStorage.setItem(movieId + "_watched", "true");
    alert(movieId + " 시청 완료!");
}