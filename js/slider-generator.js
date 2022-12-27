const slider = document.querySelector('.effect-level__slider');


noUiSlider.create(slider, {
  start: [0],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,
});

export {slider};