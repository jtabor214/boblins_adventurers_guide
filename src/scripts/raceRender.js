import BaseRenderer from "./baseRenderer";

class RaceRenderer extends BaseRenderer {
  constructor(data) {
    super(data, {
      containerClass:'raceNames',
      imagePrefix:'characters',
      imageType:'race',
      displayFields: ['traits', 'vision'],
      gridColumns: 1
    });
  }

}

export default RaceRenderer;