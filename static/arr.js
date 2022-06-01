/**
 * @param {number} len
 */
export const createArray = (len) => {
  const arr = new Array(len).fill(0);
  for(let i=0;i<len;++i){
    const tmp = Math.floor(Math.random()*100000000);
    arr[i] = tmp;
  }
  return arr;
}
