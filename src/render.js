import { addElements } from './context/elements.js';
import bubbleSort from './sorts/bubbleSort.js';

// Modules
import exchangeSort from './sorts/exchangeSort.js';
import insertionSort from './sorts/insertionSort.js';
import selectionSort from './sorts/selectionSort.js';

// DOM elements
const elementsInput = document.getElementById('elements-input');
const btnExchangeSort = document.getElementById('btnExchangeSort');
const btnSelectionSort = document.getElementById('btnSelectionSort');
const btnBubbleSort = document.getElementById('btnBubbleSort');
const btnInsertionSort = document.getElementById('btnInsertionSort');

// Event handlers
elementsInput.oninput = () => repopulateArray();

btnExchangeSort.onclick = () => performSort(exchangeSort);
btnSelectionSort.onclick = () => performSort(selectionSort);
btnBubbleSort.onclick = () => performSort(bubbleSort);
btnInsertionSort.onclick = () => performSort(insertionSort);

// Functions
function repopulateArray() {
	addElements(elementsInput.value.split(' '));
}

function performSort(sortCallback) {
	repopulateArray();
	sortCallback();
}
