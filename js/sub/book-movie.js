document.addEventListener("DOMContentLoaded", function () {
  // 요소들을 가져옵니다.
  const ingButton = document.getElementById("showIng");
  const willButton = document.getElementById("showWill");
  const ingMoviesContainer = document.getElementById("ingMovies");
  const willMoviesContainer = document.getElementById("willMovies");
  const bottomLine = document.querySelector(".bottom-line");
  const choiceText = document.querySelector(".choice-text"); // bottom-line 위치 계산을 위해 필요

  // 페이지 로드 시 초기 상태 설정
  // '현재상영작' 버튼을 활성 상태로 만들고 밑줄을 배치합니다.
  ingButton.classList.add("active");
  willButton.classList.remove("active"); // 혹시 모를 경우를 대비하여 비활성 상태로 만듭니다.
  ingMoviesContainer.style.display = "flex"; // 현재 상영작 카드를 보이게 합니다.
  willMoviesContainer.style.display = "none"; // 상영 예정작 카드를 숨깁니다.

  // 밑줄의 초기 위치를 설정하는 함수
  function updateBottomLinePosition(activeButton) {
    const activeRect = activeButton.getBoundingClientRect();
    const choiceTextRect = choiceText.getBoundingClientRect();

    // .choice-text 내부에서의 상대적인 위치를 계산하여 밑줄을 이동시킵니다.
    bottomLine.style.width = activeRect.width + "px";
    bottomLine.style.transform = `translateX(${
      activeRect.left - choiceTextRect.left
    }px)`;
  }

  // 페이지 로드 시 현재상영작에 밑줄 위치 초기화
  updateBottomLinePosition(ingButton);

  // 윈도우 크기 변경 시 밑줄 위치를 다시 계산하도록 설정
  window.addEventListener("resize", () => {
    if (ingButton.classList.contains("active")) {
      updateBottomLinePosition(ingButton);
    } else if (willButton.classList.contains("active")) {
      updateBottomLinePosition(willButton);
    }
  });

  // '현재상영작' 버튼 클릭 이벤트 리스너
  ingButton.addEventListener("click", function (event) {
    event.preventDefault(); // <a> 태그의 기본 동작(페이지 이동)을 막습니다.

    // 버튼 활성/비활성 클래스 토글
    ingButton.classList.add("active");
    willButton.classList.remove("active");

    // 카드 컨테이너 표시/숨김
    ingMoviesContainer.style.display = "flex";
    willMoviesContainer.style.display = "none";

    // 밑줄 위치 업데이트
    updateBottomLinePosition(ingButton);
  });

  // '상영예정작' 버튼 클릭 이벤트 리스너
  willButton.addEventListener("click", function (event) {
    event.preventDefault(); // <a> 태그의 기본 동작(페이지 이동)을 막습니다.

    // 버튼 활성/비활성 클래스 토글
    willButton.classList.add("active");
    ingButton.classList.remove("active");

    // 카드 컨테이너 표시/숨김
    ingMoviesContainer.style.display = "none";
    willMoviesContainer.style.display = "flex";

    // 밑줄 위치 업데이트
    updateBottomLinePosition(willButton);
  });
});
