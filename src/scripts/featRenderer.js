import BaseRenderer from "./baseRenderer";

class FeatRenderer extends BaseRenderer {
  constructor(data) {
    super(data, {
      containerClass: 'featTitles',
      displayFields: [
        'name',
        'desc',
        'prerequisite',
        'effects_desc'
      ],
      gridColumns: 2
    });
  }
}

export default FeatRenderer;