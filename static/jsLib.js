
/**
 * @param {number} num
 * @returns {boolean}
 */
export const isPrime = (num) => {
  if(num === 2) {
    return true;
  }
  if(num % 2 === 0 || num === 1) {
    return false;
  }
  for(let i = 3;i < num;++i) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * @param {number} s
 * @param {number} e
 * @param {Array} arr
 */
export const jsBubbleSort = (s, e, arr) => {
  for(let i = e;i > s + 1;--i) {
    for(let j = s + 1;j < i;++j) {
      if(arr[j-1] > arr[j]) {
        const tmp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

/**
 * @param {Array} arr
 */
export const jsBuiltInSort = (arr) => {
  arr.sort((a, b) => a - b);
}

/**
 * @param {Array} arr
 * @param {number} s
 * @param {number} e
 * @param {Array} tmp
 */
const mergeSort = (arr, s, e, tmp) => {
  if (e - s < 2) {
    return;
  }
  const middle = Math.floor((s + e) / 2);
  mergeSort(arr, s, middle, tmp);
  mergeSort(arr, middle, e, tmp);
  let i = s;
  let j = middle;
  let k = s;
  while(i < middle && j < e) {
      if(arr[i] < arr[j]) {
          tmp[k] = arr[i];
          i += 1;
      } else {
          tmp[k] = arr[j];
          j += 1;
      }
      k += 1;
  }
  while(i < middle) {
      tmp[k] = arr[i];
      i += 1;
      k += 1;
  }
  while(j < e) {
      tmp[k] = arr[j];
      j += 1;
      k += 1;
  }
  k = s;
  while(k < e) {
      arr[k] = tmp[k];
      k += 1;
  }
}


/**
 * @param {Array} arr
 */
 export const jsMergeSort = (arr) => {
  const tmp = new Array(arr.length).fill(0);
  mergeSort(arr, 0, arr.length, tmp);
}
