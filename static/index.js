import {bubbleSort} from './jsSort.js';
import {initArray} from './arr.js';
import initWasm, {greet} from './wasm/wasm_sort.js';

async function run() {
  await initWasm();

  document.getElementById("js-bubble").onclick = () => {
    const arr= initArray(20000);
    const startTime = performance.now();
    bubbleSort(0, arr.length, arr);
    console.log('js bubble', arr.length, (performance.now()-startTime)/1000);
  };

  document.getElementById("rust-bubble").onclick = () => {
    const arr= initArray(20000);
    const startTime = performance.now();
    greet(arr);
    console.log('js bubble', arr.length, (performance.now()-startTime)/1000);
  };

}
run();
