document.addEventListener("DOMContentLoaded", function () {
  const ingButton = document.querySelector(".ing");
  const willButton = document.querySelector(".will");
  const cardWrap = document.querySelector(".card-wrap");
  const cardWrap2 = document.querySelector(".card-wrap2");
  const bottomLine = document.querySelector(".bottom-line");

  // 밑줄 및 카드 표시를 업데이트하는 함수
  function updateDisplay(
    activeButton,
    inactiveButton,
    activeCard,
    inactiveCard
  ) {
    // 모든 h2에서 'active' 클래스 제거
    ingButton.classList.remove("active");
    willButton.classList.remove("active");

    // 클릭된 버튼에 'active' 클래스 추가
    activeButton.classList.add("active");

    // 카드 가시성 토글
    activeCard.style.display = "flex";
    inactiveCard.style.display = "none";

    // 밑줄 위치 및 너비 업데이트
    const buttonRect = activeButton.getBoundingClientRect();
    const parentRect = activeButton
      .closest(".choice-text")
      .getBoundingClientRect();

    bottomLine.style.width = `${buttonRect.width}px`;
    // bottomLine.style.transform = `translateX(${buttonRect.left - parentRect.left}px)`;
    // gap: 44px, margin-left: 20px 고려하여 정확한 위치 계산
    // 첫 번째 버튼 (ingButton)의 경우 left 값은 margin-left: 20px을 고려해야 함
    // 두 번째 버튼 (willButton)의 경우 left 값은 ingButton 너비 + gap + margin-left를 고려해야 함
    let translateXValue;
    if (activeButton === ingButton) {
      translateXValue = 20; // .choice-text의 margin-left와 동일
    } else {
      // activeButton === willButton
      // ingButton의 너비 + gap (44px) + .choice-text의 margin-left (20px)
      const ingButtonWidth = ingButton.getBoundingClientRect().width;
      translateXValue = 20 + ingButtonWidth + 44;
    }
    bottomLine.style.transform = `translateX(${translateXValue}px)`;
  }

  // 초기 상태 설정: '펀딩중' 활성화
  updateDisplay(ingButton, willButton, cardWrap, cardWrap2);

  // 이벤트 리스너
  ingButton.addEventListener("click", function (event) {
    event.preventDefault(); // <a> 태그의 기본 동작 방지
    updateDisplay(ingButton, willButton, cardWrap, cardWrap2);
  });

  willButton.addEventListener("click", function (event) {
    event.preventDefault(); // <a> 태그의 기본 동작 방지
    updateDisplay(willButton, ingButton, cardWrap2, cardWrap);
  });
});
