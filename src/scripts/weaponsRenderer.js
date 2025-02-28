import BaseRenderer from "./baseRenderer";

class WeaponsRenderer extends BaseRenderer {
  constructor(data) {
    super(data, {
      containerClass: 'weaponNames',
      displayFields: [
        'name',
        'category',
        'cost',
        'damage_dice',
        'damage_type',
        'weight',
        'properties'
      ],
      gridColumns: 3
    });
  }
}

export default WeaponsRenderer