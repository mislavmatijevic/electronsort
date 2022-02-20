import { array } from '../context/elements.js';
import drawMoves from '../DOM/drawMoves.js';

export default async () => {
	const sortMovements = new Array();
	console.log(array);
	for (let i = 1; i < array.length; i++) {
		let j = i - 1;
		let pom = array[i];
		while (j >= 0 && parseInt(array[j]) > parseInt(pom)) {
			array[j + 1] = array[j];
			sortMovements.push(`${j}->${j + 1}`);
			j--;
		}
		array[j + 1] = pom;
	}
	console.log(array);
	drawMoves(sortMovements);
};
