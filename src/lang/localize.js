import localization from './localization.js';

const DOMelements = {
	inputSectionLabel: document.querySelector('.input-section__label'),
	btnExchangeSort: document.getElementById('btnExchangeSort'),
	btnSelectionSort: document.getElementById('btnSelectionSort'),
	btnBubbleSort: document.getElementById('btnBubbleSort'),
	btnInsertionSort: document.getElementById('btnInsertionSort'),
	statsMovementsCounterLabel: document.getElementById('stats__movements-counter-label'),
};

export default (lang) => {
	for (const [key, value] of Object.entries(DOMelements)) {
		value.textContent = localization[lang][key];
	}
};
