const elementsNumber = document.getElementById('elements-input');
const section = document.querySelector('.section');
const btnSort = document.getElementById('btnSort');

var array;

elementsNumber.onchange = () => {
	array = elementsNumber.value.split(' ');

	section.innerHTML = '';

	array.forEach((element, index) => {
		section.innerHTML += `
		<div id='section-circle-${index}' class='section-circle' style='transform: translateX(${index * 60}px)'>
			<div>${element}</div>
		</div>
        `;
	});
};

btnSort.onclick = () => {
	const sortMovements = [];

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

	sortMovements.forEach((movement) => {
		const positions = movement.split('->');
		const firstElement = document.getElementById(`section-circle-${positions[1]}`);
		const secondElement = document.getElementById(`section-circle-${positions[0]}`);

		firstElement.id = `section-circle-${positions[0]}`;
		secondElement.id = `section-circle-${positions[1]}`;

		let newFirstElementPosition = positions[0] * 60;
		let newSecondElementPosition = positions[1] * 60;

		firstElement.style.transform = `translateX(${newFirstElementPosition}px)`;
		secondElement.style.transform = `translateX(${newSecondElementPosition}px)`;
	});
};
