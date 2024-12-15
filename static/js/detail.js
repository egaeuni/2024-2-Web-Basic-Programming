function markAsWatched() {
  // 로컬 스토리지에 시청 완료 정보를 저장
    localStorage.setItem("watched", "true");
    alert("시청 완료!");
}
