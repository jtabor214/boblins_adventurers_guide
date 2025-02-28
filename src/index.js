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



document.addEventListener("DOMContentLoaded", () => {
	 const raceTab = document.getElementById("race-tab");
   raceTab.addEventListener('click', async () => {
    const response = await fetch("https://api.open5e.com/races/?document__slug__not_in=toh");
    if (response.ok) {
      const data = await response.json();
      new RaceRenderer(data);
    }
   });
});

document.addEventListener("DOMContentLoaded", () => {
  const classTab = document.getElementById("class-tab");
  classTab.addEventListener('click', async () => {
    const response = await fetch("https://api.open5e.com/classes/");
    if (response.ok) {
      const data = await response.json();
      new ClassRenderer(data);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backgroundsTab = document.getElementById("backgrounds-tab");
  backgroundsTab.addEventListener('click', async () => {
    const response = await fetch("https://api.open5e.com/backgrounds/?document__slug__in=a5e");
    if (response.ok) {
      const data = await response.json();
      new BackgroundRenderer(data);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const featsTab = document.getElementById("feats-tab");
  featsTab.addEventListener('click', async() => {
    const response = await fetch("https://api.open5e.com/v1/feats/");
    if (response.ok) {
      const data = await response.json();
      new FeatRenderer(data);
    }
  });
});

document.addEventListener("DOMContentLoaded", () =>{
  const weaponsTab = document.getElementById("weapons-tab");
  weaponsTab.addEventListener('click', renderWeaponInfo);
});

const renderWeaponInfo = async () => {
  const response = await fetch ("https://api.open5e.com/v1/weapons/?document__slug__not_in=toh");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    new WeaponRender(data);
  }
};

window.renderWeaponInfo = renderWeaponInfo;

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

