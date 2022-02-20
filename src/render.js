import { addElements } from './context/elements.js';
import bubbleSort from './sorts/bubbleSort.js';

// Sorts
import exchangeSort from './sorts/exchangeSort.js';
import insertionSort from './sorts/insertionSort.js';
import selectionSort from './sorts/selectionSort.js';

// Localization
import localize from './lang/localize.js';
var currentLang = 'en';
localize(currentLang); // Let default be English

// DOM elements
const elementsInput = document.getElementById('elements-input');
const btnExchangeSort = document.getElementById('btnExchangeSort');
const btnSelectionSort = document.getElementById('btnSelectionSort');
const btnBubbleSort = document.getElementById('btnBubbleSort');
const btnInsertionSort = document.getElementById('btnInsertionSort');
const btnLanguageSelection = document.getElementById('language-selection');

// Event handlers
elementsInput.oninput = () => repopulateArray();

btnLanguageSelection.onclick = () => changeLanguage();

btnExchangeSort.onclick = () => performSort(exchangeSort);
btnSelectionSort.onclick = () => performSort(selectionSort);
btnBubbleSort.onclick = () => performSort(bubbleSort);
btnInsertionSort.onclick = () => performSort(insertionSort);

// Functions
function repopulateArray() {
	addElements(elementsInput.value.split(' '));
}

function changeLanguage() {
	if (currentLang === 'en') {
		currentLang = 'hr';
		btnLanguageSelection.textContent = '🇺🇸';
	} else if (currentLang === 'hr') {
		currentLang = 'en';
		btnLanguageSelection.textContent = '🇭🇷';
	}
	localize(currentLang);
}

function performSort(sortCallback) {
	repopulateArray();
	sortCallback();
}
