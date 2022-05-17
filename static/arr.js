/**
 * @param {number} len
 */
export const initArray = (len) => {
  const arr = [];
  for(let i=0;i<len;++i){
    const tmp = Math.random()*1000000 | 0;
    arr.push(tmp);
  }
  return arr;
}
