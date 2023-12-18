import { marked } from "marked";

class MagicItemRender{

	constructor(data){
		this.data = data;
		this.populateMagicItemDOM(data);
}

	populateMagicItemDOM(data){
		const itemList = document.getElementById('visualContainer');
		const list = document.createElement('ul');
		list.classList.add('itemNames');

		data.results.forEach(item => {
			const itemEle = document.createElement('button');
			itemEle.classList.add('name');
			itemEle.textContent = item.name;
			itemEle.addEventListener('click', ev => {
				renderMagicItemDesc(ev, item);
			});

			list.appendChild(itemEle);
		});

		itemList.innerHTML = '';
		itemList.appendChild(list);
	};
};

const renderMagicItemDesc = (ev, item) => {
	const itemInfo = document.getElementById('dataContainer');
	const list = document.createElement('ul');
	const targetInfo = [item.name, item.type, item.desc, item.rarity];

	targetInfo.forEach(info =>{
		const itemStats = document.createElement('p');
		itemStats.innerHTML = marked.parse(info);
		list.appendChild(itemStats);
	});

	itemInfo.innerHTML = '';
	itemInfo.appendChild(list);

};

export default MagicItemRender;