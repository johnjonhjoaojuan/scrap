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