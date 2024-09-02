//script for the image slider
const imageList = ["./assests/summary-generator.png", "./assests/R1649-logo.jpeg", "./assests/beevoyage.png", "./assests/sogeti-logo.png"];
const textList = ["One of the first solo projects I did was the summary generator website. This project was a simple website that utilized the chatgpt API in order to generate a 300 word summary of whatever book you asked it. This project also had a log in feature to allow users to save their summaries across devices. For this project I used HTML, CSS, Javascript, and python. Python was used for database and for the API calls, while the other languages were used for the website itself.",
"For my first internship, I worked at a startup called R1649 in order to develop their website. We created the website using the basic web development languages as well as react. This website allowed users to learn key information about the company and potentially get involved if it applied to them. After we fully developed the website we did have to refactor it over into next.js.",
"My next big project was an app called BeeVoyage. This was a travel companion app that would help the user with planning important parts of their trip. Using swift we were able to create an app that utilized firebase to store the data, and the chatgpt api to help with a special feature in the app. The app allows you to save important dates in your trip and other relevant information for the trip. It also can generate a packing list for you depending on what your destination it and how long you plan on being there.",
"For my most recent internship I got the opportunity to work as a software engineer for Capgemini’s Sogeti branch. During this internship we took an old legacy application and converted it into a new more modern framework. The legacy application was written in C# using .NET framework 4.8; this framework is not only hard to develop on but it is also not cross platform. The new framework we decided on was .NET MAUI. This new application can now be developed more easily and an be used by the client on boht macs and windows."
];
const projectLinks = ["https://github.com/joshuajgeorge/summary-generator", "https://r1649.com/", "https://github.com/theejoshuajg/BeeVoyage", "https://www.us.sogeti.com/"];
let currindex = 0;

const sliderImage = document.getElementById("active-image");
const sliderText = document.getElementById("active-description");
const projectLink = document.getElementById("project-link")
const nextButton =  document.getElementById("next");
const backButton = document.getElementById("back");


nextButton.addEventListener("click", () => {
    currindex = (currindex+1) % imageList.length;
    sliderImage.src = imageList[currindex];
    sliderText.textContent = textList[currindex];
    projectLink.href = projectLinks[currindex];
});

backButton.addEventListener("click", () => {
    currindex = ((currindex-1+imageList.length) % imageList.length);
    sliderImage.src = imageList[currindex];
    sliderText.textContent = textList[currindex];
    projectLink.href = projectLinks[currindex];
});