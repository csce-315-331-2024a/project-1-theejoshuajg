//script for the image slider
const imageList = ["../assests/download (1).jpeg", "../assests/download (2).jpeg", "../assests/download (3).jpeg"];

let currindex = 0;

const sliderImage = document.getElementById("active-image");
const nextButton =  document.getElementById("next");
const backButton = document.getElementById("back");

nextButton.addEventListener("click", () => {
    currindex = (currindex+1) % imageList.length;
    sliderImage.src = imageList[currindex];
});

backButton.addEventListener("click", () => {
    currindex = ((currindex-1+imageList.length) % imageList.length);
    sliderImage.src = imageList[currindex];
});