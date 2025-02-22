import BaseRenderer from "./baseRenderer";

class ClassRenderer extends BaseRenderer {
	constructor(data) {
		super(data, {
			containerClass: 'classTitles',
			imagePrefix: 'class_icons',
			imageType: 'class',
			displayFields: [
				'desc',
				'prof_armor',
				'prof_weapons',
				'prof_tools',
				'prof-saving-throws',
				'prof_skills',
				'equipment'
			],
			gridColumns: 2
		});
	}
}

export default ClassRenderer;