const section = document.querySelector('.section-elements');

export default (array) => {
	section.innerHTML = '';

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
