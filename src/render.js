import { addElements } from './context/elements.js';

// Modules
import exchangeSort from './sorts/exchangeSort.js';
import selectionSort from './sorts/selectionSort.js';

// DOM elements
const elementsNumber = document.getElementById('elements-input');
const btnExchangeSort = document.getElementById('btnExchangeSort');
const btnSelectionSort = document.getElementById('btnSelectionSort');

// Event handlers
elementsNumber.oninput = () => addElements(elementsNumber.value.split(' '));

btnExchangeSort.onclick = () => exchangeSort();
btnSelectionSort.onclick = () => selectionSort();
