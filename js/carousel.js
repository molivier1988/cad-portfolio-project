// Variables

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel__btn--left');
const nextBtn = document.querySelector('.carousel__btn--right');
const navIndicators = document.querySelector('.carousel__nav');
const dots = Array.from(navIndicators.children);
const slideWidth = slides[0].getBoundingClientRect().width;


// Portfolio Section------------------------------------------------------------

/* Arrange portfolio slides next to each other. We achieve this by taking the const slideWidth multiplying this by the slides index number and adding px. We than apply this number to the style.left, and pass this function as an argument to the statement below resulting in each slide (except the 1st) being shifted left.*/
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

// Then we use function above in a forEach loop to set the slides position
slides.forEach(setSlidePosition);

// Move slides when left or right buttons are clicked
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// Update current nav dots current slide
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Hide left when on first slide.
// Hide right arrow when on last slide.
const hideShowNavArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
}

// When I click left move slides to the left
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide'); //Get current
    const prevSlide = currentSlide.previousElementSibling; //Get previous
    const currentDot = navIndicators.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowNavArrows(slides, prevBtn, nextBtn, prevIndex);    
})

// When I click right move slides to the right
nextBtn.addEventListener('click', e => {    
    const currentSlide = track.querySelector('.current-slide'); //Get current
    const nextSlide = currentSlide.nextElementSibling; //Get next
    const currentDot = navIndicators.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowNavArrows(slides, prevBtn, nextBtn, nextIndex);
})

// When I click nav indicators, move to that slide
navIndicators.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = navIndicators.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);    
    updateDots(currentDot, targetDot);
    hideShowNavArrows(slides, prevBtn, nextBtn, targetIndex);
})