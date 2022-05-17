import {bubbleSort, builtIn} from './jsSort.js';
import {initArray} from './arr.js';
import initWasm, {bubble, built_in} from './wasm/wasm_sort.js';

async function run() {
  await initWasm();
  const bigLen = 10000000;
  const smallLen = 20000;

  document.getElementById("js-bubble").onclick = () => {
    const arr = initArray(smallLen);
    const startTime = performance.now();
    bubbleSort(0, arr.length, arr);
    console.log('js bubble', arr.length, (performance.now()-startTime)/1000);
  };

  document.getElementById("rust-bubble").onclick = () => {
    const arr = initArray(smallLen);
    const startTime = performance.now();
    bubble(arr);
    console.log('rust bubble', arr.length, (performance.now()-startTime)/1000);
  };

  document.getElementById("js-built-in").onclick = () => {
    const arr = initArray(bigLen);
    const startTime = performance.now();
    builtIn(arr);
    console.log('js built-in', arr.length, (performance.now()-startTime)/1000);
  };

  document.getElementById("rust-built-in").onclick = () => {
    const arr = initArray(bigLen);
    const startTime = performance.now();
    built_in(arr);
    console.log('rust built-in', arr.length, (performance.now()-startTime)/1000);
  };

}
run();
