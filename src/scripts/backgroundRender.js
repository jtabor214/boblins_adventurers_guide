import { marked } from "marked";

class BackgroundRender{

  constructor(data) {
    this.data = data;
	this.populateBackgroundDOM(data);
  }

	populateBackgroundDOM(data){
		const backgroundList = document.getElementById('visualContainer');
		const list = document.createElement('ul');
		list.classList.add('backgroundTitles');

		data.results.forEach(background => {
			const backgroundDiv = document.createElement('div');
			const backgroundEle = document.createElement('button');
			backgroundEle.classList.add('title');
			backgroundEle.textContent = background.name;

			const image = document.createElement('img');
			image.classList.add("background-image");
			image.src = `../../assets/background_icons/${background.name}.png`;

			backgroundDiv.appendChild(image);
			backgroundDiv.appendChild(backgroundEle);
			

			backgroundEle.addEventListener('click', ev => {
				renderBackgroundDesc(ev, background);
			});

			list.appendChild(backgroundDiv);
		});

		backgroundList.innerHTML = '';
		backgroundList.appendChild(list);
	};
};

const renderBackgroundDesc = (ev, background) => {
	const backgroundInfo = document.getElementById('dataContainer');
	const list = document.createElement('ul');
	const targetInfo = [background.desc, background.skill_proficiencies, background.equipment, background.suggested_characteristics];

	targetInfo.forEach(info => {
		const backgroundStats = document.createElement('p');
		backgroundStats.innerHTML = marked.parse(info);
		list.appendChild(backgroundStats);
	});

	backgroundInfo.innerHTML = '';
	backgroundInfo.appendChild(list);

};

export default BackgroundRender;