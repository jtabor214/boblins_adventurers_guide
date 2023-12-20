import { marked } from "marked";
// import dwarf from "../../assets/characters/Dwarf.png";


class RaceRender{
  
  constructor(data) {
		  this.data = data;
		  this.populateRaceDOM(data);
  }

  populateRaceDOM(data){
	  const raceList = document.getElementById('visualContainer');
    const list = document.createElement('ul');
		list.classList.add('raceNames');

    data.results.forEach(race => {
      
      const raceDiv = document.createElement('div');
      const raceEle = document.createElement('button');
      raceEle.classList.add('name');
      raceEle.textContent = race.name;

      const image = document.createElement('img');
      image.classList.add("race-image");
      image.src = `./assets/characters/${race.name.replace(/-/g, '').toLowerCase()}.png`;
      // image.src = dwarf;

      raceDiv.appendChild(image);
      raceDiv.appendChild(raceEle);

			raceEle.addEventListener('click', ev => {
				renderRaceDesc(ev, race);
			});
      list.appendChild(raceDiv);
    
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