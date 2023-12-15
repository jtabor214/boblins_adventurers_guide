// const { default: Example } = require("./scripts/example");
const { default: RaceRender} = require("./scripts/raceRender");

// document.addEventListener("DOMContentLoaded", () => {
//   const main = document.getElementById("main");
//   new Example(main);
//   // console.log("hello world");
// });
document.addEventListener("DOMContentLoaded", () => {
	 const raceTab = document.getElementById("race-tab");
   raceTab.addEventListener('click', renderRaceInfo);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const raceName = document.getElementById("race")
// })

const renderRaceInfo = async () => {
  const response = await fetch ("https://api.open5e.com/races/?document__slug__not_in=toh");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    new RaceRender(data);
  }
};

window.renderRaceInfo = renderRaceInfo;

const renderClassInfo = async () => {
  const response = await fetch ("https://api.open5e.com/classes/");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    
  }
};

window.renderClassInfo = renderClassInfo;

const renderBackgroundInfo = async () => {
  const response = await fetch ("https://api.open5e.com/backgrounds/?document__slug__in=a5e");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
};

window.renderBackgroundInfo =  renderBackgroundInfo;

// const renderFeatInfo = async () => {
//   const response = await fetch ("");
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   }
// };

// window.renderFeatInfo =  renderFeatInfo;