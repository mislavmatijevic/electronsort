import { array } from '../context/elements.js';
import drawMoves from '../DOM/drawMoves.js';

export default async () => {
	const sortMovements = new Array();
	console.log(array);
	for (let i = array.length - 1; i > 0; i--) {
		let max = 0;
		for (let j = 1; j <= i; j++) {
			if (array[j] > array[max]) {
				max = j;
			}
			if (max != i) {
				let pom = array[i];
				array[i] = array[max];
				array[max] = pom;
				sortMovements.push(`${i}->${max}`);
			}
		}
	}

	drawMoves(sortMovements);
};
