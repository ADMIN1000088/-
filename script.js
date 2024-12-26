// 获取轮播图元素
const carouselInner = document.querySelector('.carousel-inner');
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// 自动切换轮播图的函数
function switchCarousel() {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add('active');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 每隔2.37秒切换一次图片
setInterval(switchCarousel, 2370);
