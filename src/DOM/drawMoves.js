import { array } from '../context/elements.js';

const statCounter = document.querySelector('.stats__movements-counter');

const performMove = (position1, position2) =>
	new Promise((resolve, reject) =>
		setTimeout(() => {
			if (position1 === undefined || position2 === undefined) {
				reject('Positions undefined');
			}

			const firstElement = document.getElementById(`section-circle-${position2}`);
			const secondElement = document.getElementById(`section-circle-${position1}`);

			if (firstElement === null || secondElement === null) {
				reject('Encountered a null element');
			}

			firstElement.id = `section-circle-${position1}`;
			secondElement.id = `section-circle-${position2}`;

			let newFirstElementPosition = position1 * 60;
			let newSecondElementPosition = position2 * 60;

			firstElement.style.transform = `translateX(${newFirstElementPosition}px)`;
			secondElement.style.transform = `translateX(${newSecondElementPosition}px)`;

			resolve();
		}, 450)
	);

export default async (sortMovements) => {
	let counter = 1;
	for (const movePair of sortMovements) {
		const positions = movePair.split('->');
		await performMove(positions[0], positions[1]);
		statCounter.textContent = counter++;
	}

	for (const index in array) {
		const domElement = document.getElementById(`section-circle-${index}`);
		domElement.style.backgroundColor = 'green';
	}
};
