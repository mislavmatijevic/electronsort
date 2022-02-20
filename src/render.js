import { addElements } from './context/elements.js';
import bubbleSort from './sorts/bubbleSort.js';

// Modules
import exchangeSort from './sorts/exchangeSort.js';
import insertionSort from './sorts/insertionSort.js';
import selectionSort from './sorts/selectionSort.js';

// DOM elements
const elementsNumber = document.getElementById('elements-input');
const btnExchangeSort = document.getElementById('btnExchangeSort');
const btnSelectionSort = document.getElementById('btnSelectionSort');
const btnBubbleSort = document.getElementById('btnBubbleSort');
const btnInsertionSort = document.getElementById('btnInsertionSort');

// Event handlers
elementsNumber.oninput = () => addElements(elementsNumber.value.split(' '));

btnExchangeSort.onclick = () => exchangeSort();
btnSelectionSort.onclick = () => selectionSort();
btnBubbleSort.onclick = () => bubbleSort();
btnInsertionSort.onclick = () => insertionSort();
