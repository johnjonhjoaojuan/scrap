console.log('Script is up and running - Beginning of JavaScript');


const images = [
    "images/prg1.png",
    "images/prg2.png",
    "images/prg3.png",
    "images/prg4.png"
];

let currentIndex = 0;

//Function updates image and progress bar
function updateSlide(index) {
    const slideshow = document.getElementById("slideshow");
    const dots = document.querySelectorAll(".dot");

    //Updates image
    slideshow.src = images [index];

    //Updates active dot
    dots.forEach((dot,i) => {
        if (i === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

//Click event listeners on dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        event.stopPropagation();
        currentIndex = index;
        updateSlide(currentIndex);
    });
});
//Click event listener on the image
const slideshow = document.getElementById("slideshow");
slideshow.addEventListener("click", () => {
    currentIndex = (currentIndex +1) % images.length; // Cycle to next image
    updateSlide(currentIndex);
});

//Initialize first image and dot
updateSlide(currentIndex);


// Old image changer
// const myImage = document.querySelector("img");

// myImage.addEventListener("click", () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/prg1.png") {
//         myImage.setAttribute("src", "images/prg2.png");
//     } else { if (mySrc === "images/prg2.png"){
//                 myImage.setAttribute("src", "images/prg3.png");
//            } else { if (mySrc === "images/prg3.png") {
//                         myImage.setAttribute("src", "images/prg4.png");
//                     } else { myImage.setAttribute("src", "images/prg1.png")}
//                     }
//                 }
//             }
// );

//Scrolling stop

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded. Script is running');

    const banner = document.querySelector('.page-header');
    const sidenav = document.querySelector('.sidenav');

    if (!banner || !sidenav) {
        console.error('Banner or sidebar element not found');
        return;
    }

    const bannerHeight = banner.offsetHeight;
    const offset = 10; 

    document.addEventListener('scroll', function() {

        const bannerBottom = banner.getBoundingClientRect().bottom;

        if(bannerBottom <= offset) {
            console.log('Fixing sidebar to top with new offset')
            sidenav.style.position = 'fixed';
            sidenav.style.top = '0';
        } else {
            console.log('Positioning sidebar below banner')
            sidenav.style.position = 'absolute';
            sidenav.style.top = `${bannerHeight}px`;
        }
    });
});

console.log('Banner Bottom:', bannerBottom);
console.log('Sidebar Position:', sidenav.style.position);
console.log('Sidebar Top:', sidenav.style.top);