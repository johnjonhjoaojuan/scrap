console.log('Script is up and running - Beginning of JavaScript');

/* Old image slideshow
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/prg1.png") {
            myImage.setAttribute("src", "images/prg2.png");
        } else { if (mySrc === "images/prg2.png"){
            myImage.setAttribute("src", "images/prg3.png");
            } else { if (mySrc === "images/prg3.png") {
                myImage.setAttribute("src", "images/prg4.png");
                } else { myImage.setAttribute("src", "images/prg1.png")}
                    }
                }
            }
    );
*/

//Fixed Sidenavigator
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded. Script is running');

    const banner = document.querySelector('.page-header');
    const sidenav = document.querySelector('.sidenav');

    // Banner and Sidenav element check
    if (!banner || !sidenav) {
        console.error('Banner or sidebar element not found');
        return;
    }

    const bannerHeight = banner.offsetHeight;
    const offset = 10; 

    document.addEventListener('scroll', function() {

        const bannerBottom = banner.getBoundingClientRect().bottom;

        if(bannerBottom <= offset) {
            console.log('Fixing sidebar to top with new offset');
            sidenav.style.position = 'fixed';
            sidenav.style.top = '0';
        } else {
            console.log('Positioning sidebar below banner');
            sidenav.style.position = 'absolute';
            sidenav.style.top = `${bannerHeight}px`;
        }
    });
});

console.log('Banner Bottom:', bannerBottom);
console.log('Sidebar Position:', sidenav.style.position);
console.log('Sidebar Top:', sidenav.style.top);

// Open and Close button for the Sidenavigation

function openNav() {
    document.getElementById("sidenavBT").style.display = "";
    document.getElementById("openSide").style.display = "none"

}
function closeNav() {
    document.getElementById("sidenavBT").style.display = "none";
    document.getElementById("openSide").style.display = "block"
    

}
// Reader Mode

console.log('Status of Sidebar: ', sidenav.style.display)


