const elementsNumber = document.getElementById('elements-input');
const section = document.querySelector('.section');
const btnSort = document.getElementById('btnSort');

var array;

elementsNumber.oninput = () => {
	array = elementsNumber.value.split(' ');

	section.innerHTML = '';

	let indexesOfNonDigits = [];

	array.forEach((element, index) => {
		if (new RegExp(/^\d+$/).test(element)) {
			section.innerHTML += `
			<div id='section-circle-${index - indexesOfNonDigits.length}'
				class='section-circle'
				style='transform: translateX(${(index - indexesOfNonDigits.length) * 60}px)'>
				<div>${element}</div>
			</div>
			`;
		} else {
			indexesOfNonDigits.push(index);
		}
	});

	indexesOfNonDigits.forEach((value) => {
		array.splice(value, 1);
	});
};

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

btnSort.onclick = async () => {
	const sortMovements = new Array();

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (array[i] < array[j]) {
				const element = array[i];
				array[i] = array[j];
				array[j] = element;
				sortMovements.push(`${i}->${j}`);
			}
		}
	}

	for (const movePair of sortMovements) {
		const positions = movePair.split('->');
		console.log(movePair);
		await performMove(positions[0], positions[1]);
	}

	for (const index in array) {
		const domElement = document.getElementById(`section-circle-${index}`);
		domElement.style.backgroundColor = 'green';
	}
};
