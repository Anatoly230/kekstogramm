const slider = document.querySelector('.effect-level__slider');

// function sliderGenerate(){

// }
noUiSlider.create(slider, {
  start: [0],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,
});

function changeRange(max = 1, min = 0) {
  slider.noUiSlider.updateOptions({
    range: {
      'min': Number(min),
      'max': Number(max),
    }
  });
}

function changeStep(sliderStep = 0.1) {
  slider.noUiSlider.updateOptions({
    step: Number(sliderStep),
  });
}

function changeStart(sliderStart = 0) {
  slider.noUiSlider.updateOptions({
    start: [Number(sliderStart)],
  });
}

function resetSlider(value) {
  changeRange(value);
  changeStart(value);
  changeStep(Number(value) / 10)
}

export { slider, resetSlider, changeStart};