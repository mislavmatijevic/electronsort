import sortExecutor from './sortExecutor.js';

export default () =>
	sortExecutor((array, sortMovements) => {
		for (let i = 1; i < array.length; i++) {
			let j = i - 1;
			const borderElement = array[i];
			while (j >= 0 && parseInt(array[j]) > parseInt(borderElement)) {
				array[j + 1] = array[j];
				sortMovements.push(`${j}->${j + 1}`);
				j--;
			}
			array[j + 1] = borderElement;
		}
	});
