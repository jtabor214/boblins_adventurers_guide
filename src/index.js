import RaceRenderer from "./scripts/raceRenderer";
import ClassRenderer from "./scripts/classRenderer";
import BackgroundRenderer from "./scripts/backgroundRenderer";
import FeatRenderer from "./scripts/featRenderer";
import WeaponRenderer from "./scripts/weaponRenderer";
// const { default: MagicItemRender} = require("./scripts/magicItemRender");

const backgroundMusic = document.getElementById("music");
backgroundMusic.volume = 0.2;

document.addEventListener("DOMContentLoaded", () => {
  const audioEle = document.getElementById('music');
  const audioButton = document.getElementById('audio-button');
  const speakerIcon = document.getElementById('speaker-icon');

  audioButton.addEventListener('click', () => {
    if (audioEle.paused) {
      audioEle.play();
      speakerIcon.classList.remove('fa-play');
      speakerIcon.classList.add('fa-pause');
    } else {
      audioEle.pause();
      speakerIcon.classList.remove('fa-pause');
      speakerIcon.classList.add('fa-play');
    }
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const openModal = document.getElementById('modal-tab');
    const closeModal = document.getElementById('close-modal-button');
    const modalEle = document.getElementById("message");

    // modalEle.style.display = 'flex';

    openModal.addEventListener('click', () => {
      window.location.reload();
      // modalEle.style.display = 'flex';
    });

    closeModal.addEventListener('click', () =>{
      modalEle.style.display = 'none';
    });

    // window.addEventListener('click', (ev) => {
    //   if (ev.target !== openModal) {
    //     modalEle.style.display = 'none';
    //   }
    // });
  });

const TAB_CONFIG = {
'raceTab': {
  endpoint: 'https://api.open5e.com/races/?document__slug__not_in=toh',
  renderer: RaceRenderer
},
 'classTab': {
  endpoint: 'https://api.open5e.com/classes/',
  renderer: ClassRenderer
},
'backgroundsTab': {
  endpoint: 'https://api.open5e.com/backgrounds/?document__slug__in=a5e',
  renderer: BackgroundRenderer
},
'featsTab': {
  endpoint: 'https://api.open5e.com/v1/feats/',
  renderer: FeatRenderer
},
'weaponsTab': {
  endpoint: 'https://api.open5e.com/v1/weapons/?document__slug__not_in=toh',
  renderer: WeaponRenderer 
}};

function setTabHandlers() {
  Object.entries(TAB_CONFIG).forEach(([tabId, config]) => {
    const tabElement = document.getElementById(tabId);
    if (!tabElement) return;

    tabElement.addEventListener('click', async () => {
      try {
        const response = await fetch(config.endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        new config.renderer(data);
      } catch (error) {
        console.error(`Error loading data for ${tabId}:`, error);
      }
    });
  });
}

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

