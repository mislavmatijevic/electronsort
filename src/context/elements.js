import drawElements from '../DOM/drawElements.js';

export const array = [];
export function addElements(elements) {
	array.length = 0;
	for (const element of elements) {
		if (new RegExp(/^\d+$/).test(element)) {
			array.push(element);
			drawElements(array);
		}
	}
}

export default { array };
