import { marked } from "marked";

class ClassRender{

	constructor(data) {
			this.data = data;
			this.populateClassDOM(data);
	}

	populateClassDOM(data){
		const _classList = document.getElementById('visualContainer');
		const list = document.createElement('ul');
		list.classList.add('classTitles');

		data.results.forEach(_class => {

			const classDiv = document.createElement('div');
			const classEle = document.createElement('button');
			classEle.classList.add('title');
			classEle.textContent = _class.name;

			const image = document.createElement('img');
			image.classList.add("class-image");
			image.src = `../../assets/class_icons/${_class.name}.png`;

			classDiv.appendChild(image);
			classDiv.appendChild(classEle);

			classEle.addEventListener('click', ev => {
				renderClassDesc(ev, _class);
			});
			list.appendChild(classDiv);

		});

		_classList.innerHTML = '';
		_classList.appendChild(list);
	};
};

const renderClassDesc = (ev, _class) => {
	 const classInfo = document.getElementById('dataContainer');
	 const list = document.createElement('ul');
	 const targetInfo = [_class.desc, _class.prof_armor, _class.prof_weapons, _class.prof_tools, _class.prof_saving_throws, _class.prof_skills, _class.equipment];

	 targetInfo.forEach(info => {
		 const classStats = document.createElement('p');
		 classStats.innerHTML = marked.parse(info);
		 list.appendChild(classStats);
	 });

	 classInfo.innerHTML = '';
	 classInfo.appendChild(list);

};

export default ClassRender;