let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list'); 
let thumbnailBorderDom = document.querySelector('.thumbnail'); 
let timeDom = document.querySelector('.time'); 

thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelectorAll('.item')[0]);

let timeAutoNext = 8000;

nextDom.onclick = function() {
    showSlider('next');    
}

prevDom.onclick = function() {
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click(); 
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item'); 
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); 
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev'); 
    }, 600); 

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click(); 
    }, timeAutoNext);
}
