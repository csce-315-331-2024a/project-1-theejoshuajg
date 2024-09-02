//script for the image slider
const imageList = ["./assests/Kyle_Field_Panorama.jpg", "./assests/zach.jpeg", "./assests/rec.jpeg"];

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