// const { default: Example } = require("./scripts/example");
const { default: RaceRender} = require("./scripts/raceRender");
const { default: ClassRender} = require("./scripts/classRender");
const { default: BackgroundRender} = require("./scripts/backgroundRender");
const { default: FeatRender} = require("./scripts/featRender");

// document.addEventListener("DOMContentLoaded", () => {
//   const main = document.getElementById("main");
//   new Example(main);
//   // console.log("hello world");
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const raceName = document.getElementById("race")
// })

document.addEventListener("DOMContentLoaded", () => {
	 const raceTab = document.getElementById("race-tab");
   raceTab.addEventListener('click', renderRaceInfo);
});

const renderRaceInfo = async () => {
  const response = await fetch ("https://api.open5e.com/races/?document__slug__not_in=toh");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    new RaceRender(data);
  }
};

window.renderRaceInfo = renderRaceInfo;

document.addEventListener("DOMContentLoaded", () => {
  const classTab = document.getElementById("class-tab");
  classTab.addEventListener('click', renderClassInfo);
});

const renderClassInfo = async () => {
  const response = await fetch ("https://api.open5e.com/classes/");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    new ClassRender(data);
  }
};

window.renderClassInfo = renderClassInfo;

document.addEventListener("DOMContentLoaded", () => {
  const backgroundsTab = document.getElementById("backgrounds-tab");
  backgroundsTab.addEventListener('click', renderBackgroundInfo);
});

const renderBackgroundInfo = async () => {
  const response = await fetch ("https://api.open5e.com/backgrounds/?document__slug__in=a5e");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    new BackgroundRender(data);
  }
};

window.renderBackgroundInfo =  renderBackgroundInfo;

document.addEventListener("DOMContentLoaded", () => {
  const featsTab = document.getElementById("feats-tab");
  featsTab.addEventListener('click', renderFeatInfo);
});

const renderFeatInfo = async () => {
  const response = await fetch ("https://api.open5e.com/v1/feats/");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    new FeatRender(data);
  }
};

window.renderFeatInfo =  renderFeatInfo;