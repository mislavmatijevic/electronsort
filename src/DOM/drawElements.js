const section = document.querySelector('.section-elements');
const statCounter = document.querySelector('.stats__movements-counter');

export default (array) => {
	section.innerHTML = '';
	statCounter.textContent = 0;

	array.forEach((element, index) => {
		section.innerHTML += `
                <div id='section-circle-${index}'
                    class='section-elements__circle'
                    style='transform: translateX(${index * 60}px)'>
                    <div>${element}</div>
                </div>
                `;
	});
};
