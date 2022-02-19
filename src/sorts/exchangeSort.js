import { array } from '../context/elements.js';
import drawMoves from '../DOM/drawMoves.js';

export default async () => {
	const sortMovements = new Array();
	console.log(array);
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (parseInt(array[i]) < parseInt(array[j])) {
				const element = array[i];
				array[i] = array[j];
				array[j] = element;
				sortMovements.push(`${i}->${j}`);
			}
		}
	}

	drawMoves(sortMovements);
};
