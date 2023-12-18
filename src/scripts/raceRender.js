import { marked } from "marked";

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
      const raceEle = document.createElement('li');
      raceEle.classList.add('name');
      raceEle.textContent = race.name;
			raceEle.addEventListener('click', ev => {
				renderRaceDesc(ev, race);
			});
      list.appendChild(raceEle);
      // const icon = document.createElement('IMG');
      // const propImg = 'bungie.net' + displayProperties.icon;
      // icon.src = propImg;
      // ul.appendChild(icon);
    });

		raceList.innerHTML = '';
    raceList.appendChild(list);
  };
}

const renderRaceDesc =  (ev, race) => {
  const raceInfo = document.getElementById('dataContainer');
  const list = document.createElement('ul');
  const targetInfo = [race.desc, race.size, race.traits, race.vision];

  // unecessary
  targetInfo.forEach(info => {
    const raceStats = document.createElement('p');
    raceStats.innerHTML = marked.parse(info);

    // markdown translation goes here
    list.appendChild(raceStats);
  });
  console.log(raceInfo);

  raceInfo.innerHTML = '';
  raceInfo.appendChild(list);

};

export default RaceRender;