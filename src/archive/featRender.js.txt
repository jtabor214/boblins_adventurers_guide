import { marked } from "marked";

class FeatRender{

  constructor(data) {
    this.data = data;
	  this.populateFeatDOM(data);
  }

  populateFeatDOM(data){
    const featList = document.getElementById('visualContainer');
    const list = document.createElement('ul');
    list.classList.add('featTitles');

    data.results.forEach(feat => {
      const featEle = document.createElement('button');
      featEle.classList.add('title');
      featEle.textContent = feat.name;
      featEle.addEventListener('click', ev => {
        renderFeatDesc(ev, feat);
      });

      list.appendChild(featEle);
    });

    featList.innerHTML = '';
    featList.appendChild(list);
  };
};

const renderFeatDesc = (ev, feat) => {
  const featInfo = document.getElementById('dataContainer');
  const list = document.createElement('ul');
  const targetInfo = [feat.name, feat.desc, feat.prerequisite, feat.effects_desc.toString()]; 

  targetInfo.forEach(info => {
    
    if (!info){
      info = "";
    }

    const featStats = document.createElement('p');
    featStats.innerHTML = marked.parse(info);
    list.appendChild(featStats);
  });

  featInfo.innerHTML = '';
  featInfo.appendChild(list);

};

export default FeatRender;