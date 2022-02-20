import localization from './localization.js';

const inputSectionLabel = document.querySelector('.input-section__label');
const btnExchangeSort = document.getElementById('btnExchangeSort');
const btnSelectionSort = document.getElementById('btnSelectionSort');
const btnBubbleSort = document.getElementById('btnBubbleSort');
const btnInsertionSort = document.getElementById('btnInsertionSort');

export default (lang) => {
	console.log(localization);
	inputSectionLabel.textContent = localization[lang].inputSectionLabel;
	btnExchangeSort.textContent = localization[lang].btnExchangeSort;
	btnSelectionSort.textContent = localization[lang].btnSelectionSort;
	btnBubbleSort.textContent = localization[lang].btnBubbleSort;
	btnInsertionSort.textContent = localization[lang].btnInsertionSort;
};
