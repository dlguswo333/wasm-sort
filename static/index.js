import initWasm, {bubble, built_in, merge} from './wasm/wasm_sort.js';
import {jsBubbleSort, jsBuiltInSort, jsMergeSort} from './jsLib.js';
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

async function run() {
  await initWasm();
  const idBubbleSort = 'bubble-sort';
  const idBuiltinSort = 'built-in-sort';
  const idMergeSort = 'merge-sort';

  /**
   * @type {Array}
   */
  let array = undefined;

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
