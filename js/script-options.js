
var tooltipSlider = document.getElementById('slider-tooltips');
var tooltipSlider2 = document.getElementById('slider-tooltips-2');

noUiSlider.create(tooltipSlider, {
    start: 3250,
    connect: [true, false],
    tooltips: [true],
    step: 10,
    range: {
        'min': 0,
        'max': 10000
    },
    format: wNumb({
      decimals: 0,
    })

});

noUiSlider.create(tooltipSlider2, {
    start: 3250,
    connect: [true, false],
    tooltips: [true],
    step: 10,
    range: {
        'min': 0,
        'max': 10000
    },
    format: wNumb({
      decimals: 0,
    })
});

