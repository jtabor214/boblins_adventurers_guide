import { marked } from "marked";

// import dragonborn from '../../assets/characters/dragonborn.png';

class RaceRender{
  
  constructor(data) {
		  this.data = data;
		  this.populateRaceDOM(data);
      // this.image = new Image();
      // this.images = ['../../assets/characters/dragonborn.png',
      //  '../../assets/characters/dwarf.png',
      //  '../../assets/characters/elf.png',
      //  '../../assets/characters/halfling.png', 
      //  '../../assets/characters/human.png',
      //  '../../assets/characters/dragonborn.png', 
      //  '../../assets/characters/gnome.png', 
      //  '../../assets/characters/halfelf.png', 
      //  '../../assets/characters/halforc.png', 
      //  '../../assets/characters/tiefling.png'];

  }

  populateRaceDOM(data){
	  const raceList = document.getElementById('visualContainer');
    const list = document.createElement('ul');
		list.classList.add('raceNames');

    data.results.forEach(race => {
      console.log(this);
      const raceEle = document.createElement('button');
      raceEle.classList.add('name');
      raceEle.textContent = race.name;

			raceEle.addEventListener('click', ev => {
				renderRaceDesc(ev, race);
			});
      list.appendChild(raceEle);
    
    });

		raceList.innerHTML = '';
    raceList.appendChild(list);
    
  };
}

const renderRaceDesc =  (ev, race) => {
  const raceInfo = document.getElementById('dataContainer');
  const list = document.createElement('ul');
  const targetInfo = [race.desc, race.size, race.traits, race.vision];


  targetInfo.forEach(info => {
    const raceStats = document.createElement('p');
    raceStats.innerHTML = marked.parse(info);
    list.appendChild(raceStats);
  });
  

  raceInfo.innerHTML = '';
  raceInfo.appendChild(list);

};

export default RaceRender;