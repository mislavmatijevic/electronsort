import { array } from '../context/elements.js';
import drawMoves from '../DOM/drawMoves.js';

export default async () => {
	const sortMovements = new Array();
	console.log(array);
	while (true) {
		let changed = false;
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				let pom = array[j];
				array[j] = array[j + 1];
				array[j + 1] = pom;
				changed = true;
				sortMovements.push(`${j}->${j + 1}`);
			}
		}
		if (!changed) break;
	}

	drawMoves(sortMovements);
};
