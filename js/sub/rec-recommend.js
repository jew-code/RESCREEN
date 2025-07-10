document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // 선택적 매개변수
    direction: "horizontal",
    loop: false, // 연속 루프를 원하면 true로 설정

    // 한 뷰에 표시할 슬라이드 수
    slidesPerView: 4, // 원하는 레이아웃과 화면 크기에 따라 이 숫자 조정
    // 이미지처럼 4개의 카드인 경우 4가 좋은 시작점입니다.
    spaceBetween: 20, // 슬라이드 사이의 간격 (픽셀), 필요에 따라 조정

    // 반응형으로 만들려면
    breakpoints: {
      // 창 너비가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // 창 너비가 768px 이상일 때
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 창 너비가 1024px 이상일 때
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // 창 너비가 1200px 이상일 때 (또는 원하는 데스크탑 breakpoint)
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },

    // 내비게이션 화살표
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // (선택 사항) 페이지네이션 점을 원한다면
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },

    // (선택 사항) 키보드 제어
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // (선택 사항) 마우스 휠 제어
    mousewheel: {
      invert: false,
    },
  });
});
