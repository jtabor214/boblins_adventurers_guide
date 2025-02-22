import { marked } from "marked";

class BaseRenderer {
  constructor(data, config) {
    this.data = data;

    this.config = {
      containerClass: '',
      imagePrefix: '',
      imageType: '',
      displayFields: [],
      gridColumns: 1,
      ...config
    };

    this.populateDOM(data)
  }

  populateDOM(data) {
    const container = document.getElementById('visualContainer');
    const list = document.createElement('ul');
    list.classList.add(this.config.containerClass)

    data.results.forEach(item => {
      const itemContainer = document.createElement('div');
      const button = document.createElement('button');
      button.classList.add('title');
      button.textContent = item.name;

      if (this.config.imagePrefix) {
        const image = document.createElement('img');
        image.classList.add (`${this.config.imageType}-image`);
        const imageName = item.name.replace(/-/g, '').toLowerCase();
        image.src = `./assets/${this.config.imagePrefix}/${imageName}.png`;
        itemContainer.appendChild(image);
      }

      itemContainer.appendChild(button);
      button.addEventListener('click', () => this.renderDescription(item));
      list.appendChild(itemContainer);
    });

    container.innerHTML = '';
    container.appendChild(list);
  }

  renderDescription(item) {
    const container = document.getElementById('dataContainer');
    const list = document.createElement('ul');

    const info = this.config.displayFields.map(field => item[field]).filter(Boolean);

    info.forEach(content => {
      const element = document.createElement('p');
      element.innerHTML = marked.parse(content.toString());
      list.appendChild(element);
    });

    container.innerHTML = '';
    container.appendChild(list);
  }
}

export default BaseRenderer;