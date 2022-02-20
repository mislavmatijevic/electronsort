import sortExecutor from './sortExecutor.js';

export default () =>
	sortExecutor((array, sortMovements) => {
		for (let i = array.length - 1; i > 0; i--) {
			let max = 0;
			for (let j = 1; j <= i; j++) {
				if (parseInt(array[j]) >= parseInt(array[max])) {
					max = j;
				}
			}
			if (max !== i) {
				const previousMax = array[i];
				array[i] = array[max];
				array[max] = previousMax;
				sortMovements.push(`${i}->${max}`);
			}
		}
	});
