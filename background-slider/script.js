let body = document.body;
let slider = document.querySelectorAll('.slide')
let left = document.getElementById('left')
let right = document.getElementById('right')

let activeSlider = 0;

right.addEventListener('click', () => {
  activeSlider++

  if(activeSlider > slider.length-1) {
    activeSlider = 0
  }

  setBgToBody()
  setActivitySlide()
})

left.addEventListener('click', () => {
  activeSlider--

  if(activeSlider < 0) {
    activeSlider = slider.length-1
  }

  setBgToBody()
  setActivitySlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slider[activeSlider].style.backgroundImage
}

function setActivitySlide() {
  slider.forEach((slide) => slide.classList.remove('active'))

  slider[activeSlider].classList.add('active')
}