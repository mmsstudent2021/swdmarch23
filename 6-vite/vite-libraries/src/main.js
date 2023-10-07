import { Carousel } from "bootstrap";
import "./app.scss";
// import "../node_modules/venobox/dist/venobox";
import "../node_modules/waypoints/lib/noframework.waypoints";
import AOS from 'aos';
AOS.init();


const nav = document.querySelector(".my-nav");
const sideImg = document.querySelector(".side-img");


const sanKyiTar = document.querySelector("#sanKyiTar");
const wp1 = new Waypoint({
    element : sanKyiTar,
    handler : () => {
        nav.classList.replace("bg-primary","bg-danger")
    }
})

const s2 = document.querySelector("#s2");
const wp2 = new Waypoint({
    element : s2,
    handler : () => {
        nav.classList.replace("bg-danger","bg-success")
        
    }
})

const s3 = document.querySelector("#s3");
const wp3 = new Waypoint({
    element : s3,
    handler:() => {
        sideImg.classList.add("active");
    }
})

const s4 = document.querySelector("#s4");
const wp4 = new Waypoint({
    element : s4,
    handler:() => {
        sideImg.classList.remove("active");
    }
})



// import * as bootstrap from "bootstrap";

// window.myName = "hein htet zan";




// const venobox = new VenoBox({
//     selector: '.venobox',
//     // overlayColor : "#377dff60",
//     share : true,
//     spinner : "plane"
// });

// console.log(venobox);


// const sliderElement = document.querySelector("#carouselExampleIndicators");
// // const slider = new bootstrap.Carousel(sliderElement);
// const slider = new Carousel(sliderElement,{
//     interval:2000,
//     ride : "carousel",
//     wrap : true
// });

// const textSliderElement = document.querySelector("#textSlide");
// const textSlider = new Carousel(textSliderElement);


// const next = document.querySelector("#next");
// next.addEventListener("click",() => {
//     slider.next() 
//     textSlider.next()
//     // slider.prev() 
//     // slider.to(2) 
// })

// console.log(sliderElement);
// console.log(slider);