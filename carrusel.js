const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

let activeIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${activeIndex * 100}%`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[activeIndex].classList.add('active');
}

updateCarousel();

setInterval(() => {
    activeIndex = (activeIndex + 1) % 3;
    updateCarousel();
}, 10000); // Change 10000 to 10000 for 10 seconds

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activeIndex = index;
        updateCarousel();
    });
});
