const slides = document.querySelector('.slides')
const next = document.querySelector('.arrow--next');
const prev = document.querySelector('.arrow--prev');

let slidesWidth = (slides.childElementCount - 3) * 100;
let right = +slides.style.right;

next.addEventListener('click', (e) => {
    e.preventDefault();
    right += 100;
    if (right >= slidesWidth) {
        right = slidesWidth;
    }
    slides.style.right = right + 'px';
})

prev.addEventListener('click', (e) => {
    e.preventDefault();
    right -= 100;
    if (right <= 0) {
        right = 0;
    }
    slides.style.right = right + 'px';
})