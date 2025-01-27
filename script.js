window.onload = function () {
    const backgroundAudioCity = document.getElementById("city-audio");
    backgroundAudioCity.volume = 0;

    const backgroundAudioOcean = document.getElementById("ocean-audio");
    backgroundAudioOcean.volume = 0;

    const backgroundAudioWind = document.getElementById("wind-audio");
    backgroundAudioWind.volume = 0;
    
    const backgroundAudioTraffic = document.getElementById("traffic-audio");
    backgroundAudioTraffic.volume = 0;
}

// default range background color
const rangBgColor = {
    bgColorA: "#FF5252",
    bgColorB: "#e7e7e7"
};

/* --------------------------------
 *  CITY
 * ------------------------------------
 */

var audioCity = document.querySelector("#city-audio");
let volumeCity = document.querySelector("#city-slider");
let sliderCity = document.querySelector(".slider-container-city"); 
let sliderValueCity = document.querySelector(".slider-title #value1");
var isPlayingCity = false;

fillValueCity(sliderCity.querySelector("input"));

volumeCity.addEventListener("change", function (e) {
    audioCity.volume = e.currentTarget.value / 100;
})

// add input event listener to get slider value.
sliderCity.addEventListener("input", (ev) => {
    console.log("City : " + ev.target.value);
    let convertValue = ev.target.value;
    sliderValueCity.innerHTML = convertValue + "%";
    fillValueCity(ev.target);
});


// fill input value $fun
function fillValueCity(slider) {
    let calcPercentage =
        100 * ((slider.value - slider.min) / (slider.max - slider.min));
    sliderValueCity.innerHTML = slider.value + "%";
    slider.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;
}

audioCity.onplaying = function () { isPlayingCity = true; };
audioCity.onpause = function () { isPlayingCity = false; };

/* --------------------------------
 *  OCEAN
 * ------------------------------------
 */

// Ocean
let audioOcean = document.querySelector("#ocean-audio");
let volumeOcean = document.querySelector("#ocean-slider");
let sliderOcean = document.querySelector(".slider-container-ocean");
let sliderValueOcean = document.querySelector(".slider-title #value2");
var isPlayingOcean = false;


fillValueOcean(sliderOcean.querySelector("input"));

volumeOcean.addEventListener("change", function (e) {
    audioOcean.volume = e.currentTarget.value / 100;
})

// add input event listener to get slider value.
sliderOcean.addEventListener("input", (ev) => {
    console.log("Ocean : " + ev.target.value);
    let convertValue = ev.target.value;
    sliderValueOcean.innerHTML = convertValue + "%";
    fillValueOcean(ev.target);
});


// fill input value $fun
function fillValueOcean(slider) {
    let calcPercentage =
        100 * ((slider.value - slider.min) / (slider.max - slider.min));
    sliderValueOcean.innerHTML = slider.value + "%";
    slider.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;
}


audioOcean.onplaying = function () { isPlayingOcean = true; };
audioOcean.onpause = function () { isPlayingOcean = false; };

/* --------------------------------
 *  WIND
 * ------------------------------------
 */

// Wind
let audioWind = document.querySelector("#wind-audio");
let volumeWind = document.querySelector("#wind-slider");
let sliderWind = document.querySelector(".slider-container-wind");
let sliderValueWind = document.querySelector(".slider-title #value3");
var isPlayingWind = false;


fillValueWind(sliderWind.querySelector("input"));

volumeWind.addEventListener("change", function (e) {
    audioWind.volume = e.currentTarget.value / 100;
})

// add input event listener to get slider value.
sliderWind.addEventListener("input", (ev) => {
    console.log("Wind : " + ev.target.value);
    let convertValue = ev.target.value;
    sliderValueWind.innerHTML = convertValue + "%";
    fillValueWind(ev.target);
});


// fill input value $fun
function fillValueWind(slider) {
    let calcPercentage =
        100 * ((slider.value - slider.min) / (slider.max - slider.min));
    sliderValueWind.innerHTML = slider.value + "%";
    slider.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;
}


audioWind.onplaying = function () { isPlayingWind = true; };
audioWind.onpause = function () { isPlayingWind = false; };

/* --------------------------------
 *  TRAFFIC
 * ------------------------------------
 */

// Traffic
let audioTraffic = document.querySelector("#traffic-audio");
let volumeTraffic = document.querySelector("#traffic-slider");
let sliderTraffic = document.querySelector(".slider-container-traffic");
let sliderValueTraffic = document.querySelector(".slider-title #value4");
var isPlayingTraffic = false;


fillValueTraffic(sliderTraffic.querySelector("input"));

volumeTraffic.addEventListener("change", function (e) {
    audioTraffic.volume = e.currentTarget.value / 100;
})

// add input event listener to get slider value.
sliderTraffic.addEventListener("input", (ev) => {
    console.log("Traffic : " + ev.target.value);
    let convertValue = ev.target.value;
    sliderValueTraffic.innerHTML = convertValue + "%";
    fillValueTraffic(ev.target);
});


// fill input value $fun
function fillValueTraffic(slider) {
    let calcPercentage =
        100 * ((slider.value - slider.min) / (slider.max - slider.min));
    sliderValueTraffic.innerHTML = slider.value + "%";
    slider.style.background = `linear-gradient(90deg, ${rangBgColor.bgColorA} ${calcPercentage}%, ${rangBgColor.bgColorB} ${calcPercentage}%)`;
}


audioTraffic.onplaying = function () { isPlayingTraffic = true; };
audioTraffic.onpause = function () { isPlayingTraffic = false; };


/* play pause button */

function togglePlay() {
    isPlayingCity ? audioCity.pause() : audioCity.play();
    isPlayingOcean ? audioOcean.pause() : audioOcean.play();
    isPlayingWind ? audioWind.pause() : audioWind.play();
    isPlayingTraffic ? audioTraffic.pause() : audioTraffic.play();
};

