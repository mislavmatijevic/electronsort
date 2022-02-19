import { addElements } from './context/elements.js';

// Modules
import exchangeSort from './sorts/exchangeSort.js';

// DOM elements
const elementsNumber = document.getElementById('elements-input');
const btnExchangeSort = document.getElementById('btnExchangeSort');

// Event handlers
elementsNumber.oninput = () => addElements(elementsNumber.value.split(' '));

btnExchangeSort.onclick = () => exchangeSort();
