/**
 * @param {number} len
 */
export const createArray = (len) => {
  const arr = [];
  for(let i=0;i<len;++i){
    const tmp = Math.random()*10000000 | 0;
    arr.push(tmp);
  }
  return arr;
}
