const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "https://johnjonhjoaojuan.github.io/scrap/images/prg1.png") {
        myImage.setAttribute("src", "https://johnjonhjoaojuan.github.io/scrap/images/prg2.png");
    } else {
        myImage.setAttribute("src", "https://johnjonhjoaojuan.github.io/scrap/images/prg1.png");
    }
});