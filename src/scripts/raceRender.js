import { marked } from "marked";

class RaceRender{
  
  constructor(data) {
		  this.data = data;
		  this.populateRaceDOM(data);
  }

  populateRaceDOM(data){
	  const raceList = document.getElementById('visualContainer');
    const list = document.createElement('ul');
		// const raceData = Array.from(data)

    data.results.forEach(race => {
      const raceEle = document.createElement('li');
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

  // unecessary
  targetInfo.forEach(info => {
    const raceStats = document.createElement('li');
    raceStats.innerHTML = marked.parse(info);

    // markdown translation goes here
    list.appendChild(raceStats);
  });
  console.log(raceInfo);

  raceInfo.innerHTML = '';
  raceInfo.appendChild(list);

};




export default RaceRender;