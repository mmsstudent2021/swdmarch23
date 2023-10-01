import { Carousel } from "bootstrap";
import "./app.scss";
// import * as bootstrap from "bootstrap";



const sliderElement = document.querySelector("#carouselExampleIndicators");
// const slider = new bootstrap.Carousel(sliderElement);
const slider = new Carousel(sliderElement,{
    interval:2000,
    ride : "carousel",
    wrap : true
});

const textSliderElement = document.querySelector("#textSlide");
const textSlider = new Carousel(textSliderElement);


const next = document.querySelector("#next");
next.addEventListener("click",() => {
    slider.next() 
    textSlider.next()
    // slider.prev() 
    // slider.to(2) 
})

console.log(sliderElement);
console.log(slider);