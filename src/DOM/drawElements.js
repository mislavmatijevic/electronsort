const section = document.querySelector('.section');

export default (array) => {
	section.innerHTML = '';

	array.forEach((element, index) => {
		section.innerHTML += `
                <div id='section-circle-${index}'
                    class='section-circle'
                    style='transform: translateX(${index * 60}px)'>
                    <div>${element}</div>
                </div>
                `;
	});
};
