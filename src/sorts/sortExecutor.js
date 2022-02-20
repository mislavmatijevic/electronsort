import { array } from '../context/elements.js';
import drawMoves from '../DOM/drawMoves.js';

export default (sortCallback) => {
	const sortMovements = new Array();

	console.log(array);
	sortCallback(array, sortMovements);
	console.log(array);

	drawMoves(sortMovements);
};
