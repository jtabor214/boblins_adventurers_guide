import { marked } from "marked";

class WeaponRender{

	constructor(data){
		this.data = data;
		this.populateWeaponDOM(data);
	}

	populateWeaponDOM(data){
		const weaponList = document.getElementById('visualContainer');
		const list = document.createElement('ul');
		list.classList.add('weaponNames');

		data.results.forEach(weapon => {
			const weaponEle = document.createElement('button');
			weaponEle.classList.add('name');
			weaponEle.textContent = weapon.name;
			weaponEle.addEventListener('click', ev => {
				renderWeaponDesc(ev, weapon);
			});

			list.appendChild(weaponEle);
		});

		weaponList.innerHTML = '';
		weaponList.appendChild(list);
	};
};

const renderWeaponDesc = (ev, weapon) => {
	const weaponInfo = document.getElementById('dataContainer');
	const list = document.createElement('ul');
	const targetInfo = [weapon.name, weapon.category, weapon.cost, weapon.damage_dice, weapon.damage_type, weapon.weight, weapon.properties.toString()];

	targetInfo.forEach(info =>{
		const weaponStats = document.createElement('p');
		weaponStats.innerHTML = marked.parse(info);
		list.appendChild(weaponStats);
	});

	weaponInfo.innerHTML = '';
	weaponInfo.appendChild(list);

};

export default WeaponRender;


