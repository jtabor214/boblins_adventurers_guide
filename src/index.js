// const { default: Example } = require("./scripts/example");
const { default: RaceRender} = require("./scripts/raceRender");
const { default: ClassRender} = require("./scripts/classRender");
const { default: BackgroundRender} = require("./scripts/backgroundRender");
const { default: FeatRender} = require("./scripts/featRender");
const { default: WeaponRender} = require("./scripts/weaponsRender");
const { default: MagicItemRender} = require("./scripts/magicItemRender");


// document.addEventListener("DOMContentLoaded", () => {
//   const main = document.getElementById("main");
//   new Example(main);
//   // console.log("hello world");
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const raceName = document.getElementById("race")
// })

const backgroundMusic = document.getElementById("music");
backgroundMusic.volume = 0.2;

document.addEventListener("DOMContentLoaded", () => {
  const audioEle = document.getElementById('music');
  const audioButton = document.getElementById('audio-button');
  const speakerIcon = document.getElementById('speakerIcon');

  audioButton.addEventListener('click', () => {
    if (audioEle.paused) {
      audioEle.play();
      speakerIcon.src = "/assets/speaker_icon.ico";
    } else {
      audioEle.pause();
      speakerIcon.src = "/assets/muted_speaker_icon.ico";
    }
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const openModal = document.getElementById('modal-tab');
    const closeModal = document.getElementById('close-modal-button');
    const modalEle = document.getElementById("message");

    modalEle.style.display = 'flex';

    openModal.addEventListener('click', () => {
      window.location.reload();
      // modalEle.style.display = 'flex';
    });

    closeModal.addEventListener('click', () =>{
      modalEle.style.display = 'none';
    });

    window.addEventListener('click', (ev) => {
      if (ev.target !== openModal) {
        modalEle.style.display = 'none';
      }
    });
  });



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

// document.addEventListener("DOMContentLoaded", () =>{
//   const weaponsTab = document.getElementById("weapons-tab");
//   weaponsTab.addEventListener('click', renderWeaponInfo);
// });

// const renderWeaponInfo = async () => {
//   const response = await fetch ("https://api.open5e.com/v1/weapons/?document__slug__not_in=toh");
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     new WeaponRender(data);
//   }
// };

// window.renderWeaponInfo = renderWeaponInfo;

// document.addEventListener("DOMContentLoaded", () => {
//   const armorTab = document.getElementById("armor-tab");
//   armorTab.addEventListener('click', renderArmorInfo);
// });

// const renderArmorInfo = async () => {
//   const response = await fetch ("https://api.open5e.com/v1/armor/");
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     new ArmorRender(data);
//   }
// };

// window.renderArmorInfo = renderArmorInfo;

// document.addEventListener("DOMContentLoaded", () =>{
//   const magicItemsTab = document.getElementById("magic-items-tab");
//   magicItemsTab.addEventListener('click', renderItemInfo);
// });

// const renderItemInfo = async () => {
//   const response = await fetch ("https://api.open5e.com/v1/magicitems/?document__slug__in=wotc-srd&ordering=rarity");
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//     new MagicItemRender(data);
//   }
// };

