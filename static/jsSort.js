/**
 * @param {number} s
 * @param {number} e
 * @param {Array} arr
 */
export const jsBubbleSort = (s, e, arr) => {
  for(let i=e;i>s+1;--i){
    for(let j=s+1;j<i;++j){
      if(arr[j-1] > arr[j]){
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
