// 변수쓰는 방법 : var / let vc;(숫자 등 값이 변할떄) / const cv =''(현상을 담아둘때)

const TOP_BANNER = document.querySelector('.TopBanner');
const TOP_BANNER_BTN = document.querySelector('.TopBanner span');

TOP_BANNER_BTN.addEventListener('click', () => {
    TOP_BANNER.classList.add('on');
});

/* <헤더 메뉴바=gnb 스크롤에 따라 변경 */
const HEADER = document.querySelector('.Header');
window.addEventListener('scroll', () => {
    //스크롤 값을 구해서 0이상이면 on붙히고 아니면 뗀다
    const SCT = window.scrollY;
    console.log(SCT);
    SCT > 0 ? HEADER.classList.add('on') : HEADER.classList.remove('on');
});







/* <메인비쥬얼 슬라이드 돌리기>*/
const SLIDE_NUM = document.querySelector('.slide_num strong');
const SLIDE_NUM_T = document.querySelector('.slide_num span');
const SLIDE_LIST = document.querySelectorAll('.MainVisual .list li');

console.log(SLIDE_LIST);

const MAIN_SLIDE = new Swiper('.main_slide', {
    loop: true,
    // <▼페이지별 slice_num 변경
    slideActiveClass: 'on',
    on: {
        init: function () {
            // console.log(this.realIndex, this.slides.length)
            SLIDE_NUM.innerHTML = (this.realIndex + 1);
            SLIDE_NUM_T.innerHTML = this.slides.length;
        },
        slideChangeTransitionStart: function () {
            SLIDE_NUM.innerHTML = this.realIndex + 1;
            // SLIDE_NUM_T.innerHTML = this.slides.length;
            // ▼페이지별 list 변경
            SLIDE_LIST.forEach(it => it.classList.remove('on'));
            SLIDE_LIST[this.realIndex].classList.add('on');
        }
    }
});

// ▼list누르면 해당 페이지로 변경
SLIDE_LIST.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        MAIN_SLIDE.slideTo(idx)
    })
})