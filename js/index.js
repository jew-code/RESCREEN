// 메인비주얼 부분 자바
document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background-image");
  // 'all-text'로 시작하는 모든 div 요소를 선택합니다.
  // HTML에 all-text01, all-text02 등의 클래스가 명확하게 구분되어 있으므로,
  // 이 선택자는 정확합니다.
  const allTextSections = document.querySelectorAll(
    '.main-content > div[class^="all-text"]'
  );
  const thumbnails = document.querySelectorAll(".thumbnails img");

  const contentData = [
    {
      bg: "./img/mainvisual/main_visual.jpg", // 썸네일1 (기본)
      textClass: "all-text01",
    },
    {
      bg: "./img/mainvisual/mainvisual02.jpg", // 썸네일2 배경 이미지 경로 예시 (확인 필수)
      textClass: "all-text02",
    },
    {
      bg: "./img/mainvisual/silence_lambs_bg.jpg", // 썸네일3 배경 이미지 경로 예시 (확인 필수)
      textClass: "all-text03",
    },
    {
      bg: "./img/mainvisual/midsommar_bg.jpg", // 썸네일4 배경 이미지 경로 예시 (확인 필수)
      textClass: "all-text04",
    },
  ];

  // 페이지 로드 시 초기 상태 설정 함수
  const initializePage = () => {
    // 모든 텍스트 섹션과 썸네일의 'active' 클래스를 제거하여 초기화합니다.
    allTextSections.forEach((text) => {
      text.classList.remove("active");
    });
    thumbnails.forEach((thumb) => {
      thumb.classList.remove("active");
    });

    // 첫 번째 텍스트 섹션(all-text01)과 첫 번째 썸네일을 활성화합니다.
    allTextSections[0].classList.add("active");
    thumbnails[0].classList.add("active");
    // 첫 번째 배경 이미지로 설정합니다.
    background.style.backgroundImage = `url(${contentData[0].bg})`;
  };

  // 초기 상태 설정 함수를 호출하여 페이지 로드 시 올바른 상태를 만듭니다.
  initializePage();

  // 각 썸네일에 클릭 이벤트 리스너를 추가합니다.
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      // 모든 텍스트 섹션에서 'active' 클래스를 제거하여 현재 보이는 텍스트를 숨깁니다.
      allTextSections.forEach((text) => text.classList.remove("active"));

      // 모든 썸네일에서 'active' 클래스를 제거하여 시각적 활성화를 해제합니다.
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));

      // 클릭된 썸네일에 'active' 클래스를 추가하여 시각적으로 활성화합니다.
      thumbnail.classList.add("active");

      // 해당하는 배경 이미지를 변경합니다.
      background.style.backgroundImage = `url(${contentData[index].bg})`;

      // *** 중요 수정 부분 ***
      // 클릭된 썸네일의 'index'에 해당하는 allTextSection 요소를 활성화합니다.
      // allTextSections 배열은 HTML에 정의된 순서대로 all-text01, all-text02... 이므로,
      // index를 사용하여 정확한 요소를 선택할 수 있습니다.
      allTextSections[index].classList.add("active");
    });
  });
});

//카드슬라이더 자바
