import BaseRenderer from "./baseRenderer";

class BackgroundRenderer extends BaseRenderer {
  constructor(data) {
    super(data, {
      containerClass: 'backgroundTitles',
      imagePrefix: 'background_icons',
      imageType: 'background',
      displayFields: [
        'desc',
        'skill_proficiencies',
        'equipment',
        'suggested_characteristics'
      ],
      gridColumns: 3
    });
  }
}

export default BackgroundRenderer