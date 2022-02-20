import sortExecutor from './sortExecutor.js';

export default () =>
	sortExecutor((array, sortMovements) => {
		while (true) {
			let changed = false;
			for (let j = 0; j < array.length - 1; j++) {
				if (parseInt(array[j]) > parseInt(array[j + 1])) {
					const placeholder = array[j];
					array[j] = array[j + 1];
					array[j + 1] = placeholder;
					changed = true;
					sortMovements.push(`${j}->${j + 1}`);
				}
			}
			if (!changed) break;
		}
	});
