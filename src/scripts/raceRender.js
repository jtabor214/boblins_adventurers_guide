class RaceRender{
  constructor(data) {
		  this.data = data;
		  this.populateRaceDOM(data);
  }

  populateRaceDOM(data){
	  const raceList = document.getElementById('raceList');
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

		// raceList.innerHTML = '';
    raceList.appendChild(list);
  };
}

const renderRaceDesc =  (ev, race) => {
  const raceInfo = document.getElementById('raceInfo');
  const list = document.createElement('ul');
  const targetInfo = [race.desc, race.size_raw, race.size, race.traits, race.vision];

  // unecessary
  targetInfo.forEach(info => {
    const raceStats = document.createElement('li');
    raceStats.textContent = info;
    list.appendChild(raceStats);
  });
  console.log(raceInfo);

  // raceInfo.innerHTML = '';
  raceInfo.appendChild(list);

};




export default RaceRender;