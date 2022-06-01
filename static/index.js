import initWasm, {bubble, built_in, merge, is_prime, get_combi} from './wasm/wasm_sort.js';
import {isPrime, jsBubbleSort, jsBuiltInSort, jsMergeSort, jsGetCombi} from './jsLib.js';
import {createArray} from './arr.js';

/**
 * @param {Function} callback
 * @returns {number} time measured in milliseconds.
 */
const measurePerformance = (callback) => {
  const start = performance.now();
  callback();
  return (performance.now() - start) / 1000;
}
const INT32_MAX = 2147483647;
const INT32_MIN = -2147483648;

/**
 * @param {number} num
 */
const checkSafeInteger = (num) => {
  return INT32_MIN <= num && num <= INT32_MAX;
}

async function run() {
  await initWasm();
  const idIsPrime = 'is-prime';
  const idGetCombi = 'get-combinations';
  const idBubbleSort = 'bubble-sort';
  const idBuiltinSort = 'built-in-sort';
  const idMergeSort = 'merge-sort';

  /**
   * @type {Array}
   */
  let array = undefined;

  document.querySelector(`#${idIsPrime} #js-run`).onclick = () => {
    const number = Number(document.querySelector(`#${idIsPrime} #number`).value);
    if(!checkSafeInteger(number)) {
      return alert('The number is not in the safe integer range!');
    }
    let result;
    const resultTime = measurePerformance(() => {result = isPrime(number)});
    document.querySelector(`#${idIsPrime} #js-time`).innerText = `${result} Time: ${resultTime}s`;
  }

  document.querySelector(`#${idIsPrime} #rust-run`).onclick = () => {
    const number = Number(document.querySelector(`#${idIsPrime} #number`).value);
    if(!checkSafeInteger(number)) {
      return alert('The number is not in the safe integer range!');
    }
    let result;
    const resultTime = measurePerformance(() => {result = is_prime(number)});
    document.querySelector(`#${idIsPrime} #rust-time`).innerText = `${result} Time: ${resultTime}s`;
  }

  document.querySelector(`#${idGetCombi} #js-run`).onclick = () => {
    const n = Number(document.querySelector(`#${idGetCombi} #n`).value);
    const r = Number(document.querySelector(`#${idGetCombi} #r`).value);
    let result;
    const resultTime = measurePerformance(() => {result = jsGetCombi(r, n)});
    document.querySelector(`#${idGetCombi} #js-time`).innerText = `${result} Time: ${resultTime}s`;
  }

  document.querySelector(`#${idGetCombi} #rust-run`).onclick = () => {
    const n = Number(document.querySelector(`#${idGetCombi} #n`).value);
    const r = Number(document.querySelector(`#${idGetCombi} #r`).value);
    let result;
    const resultTime = measurePerformance(() => {result = get_combi(r, n)});
    document.querySelector(`#${idGetCombi} #rust-time`).innerText = `${result} Time: ${resultTime}s`;
  }

  document.querySelector('#create-array #create').onclick = () => {
    const length = Number(document.querySelector(`#create-array #length`).value);
    array = createArray(length);
    document.querySelector('#create-array #output').innerText = `Created an array of ${length} length.`;
  }

  document.querySelector(`#${idBubbleSort} #js-run`).onclick = () => {
    if (!array) {
      return alert('Create an array first!');
    }
    const arr = array.slice();
    const resultTime = measurePerformance(() => jsBubbleSort(0, arr.length, arr));
    document.querySelector(`#${idBubbleSort} #js-time`).innerText = `Time: ${resultTime}s`;
  }

  document.querySelector(`#${idBubbleSort} #rust-run`).onclick = () => {
    if (!array) {
      return alert('Create an array first!');
    }
    const arr = array.slice();
    const resultTime = measurePerformance(() => bubble(arr));
    document.querySelector(`#${idBubbleSort} #rust-time`).innerText = `Time: ${resultTime}s`;
  }

  document.querySelector(`#${idBuiltinSort} #js-run`).onclick = () => {
    if (!array) {
      return alert('Create an array first!');
    }
    const arr = array.slice();
    const resultTime = measurePerformance(() => jsBuiltInSort(arr));
    document.querySelector(`#${idBuiltinSort} #js-time`).innerText = `Time: ${resultTime}s`;
  }

  document.querySelector(`#${idBuiltinSort} #rust-run`).onclick = () => {
    if (!array) {
      return alert('Create an array first!');
    }
    const arr = array.slice();
    const resultTime = measurePerformance(() => built_in(arr));
    document.querySelector(`#${idBuiltinSort} #rust-time`).innerText = `Time: ${resultTime}s`;
  }

  document.querySelector(`#${idMergeSort} #js-run`).onclick = () => {
    if (!array) {
      return alert('Create an array first!');
    }
    const arr = array.slice();
    const resultTime = measurePerformance(() => jsMergeSort(arr));
    document.querySelector(`#${idMergeSort} #js-time`).innerText = `Time: ${resultTime}s`;
  }

  document.querySelector(`#${idMergeSort} #rust-run`).onclick = () => {
    if (!array) {
      return alert('Create an array first!');
    }
    const arr = array.slice();
    const resultTime = measurePerformance(() => merge(arr));
    document.querySelector(`#${idMergeSort} #rust-time`).innerText = `Time: ${resultTime}s`;
  }
}

run();
