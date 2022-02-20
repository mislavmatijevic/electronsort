import sortExecutor from './sortExecutor.js';

export default () =>
	sortExecutor((array, sortMovements) => {
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < i; j++) {
				if (parseInt(array[i]) < parseInt(array[j])) {
					const placeholder = array[i];
					array[i] = array[j];
					array[j] = placeholder;
					sortMovements.push(`${i}->${j}`);
				}
			}
		}
	});
