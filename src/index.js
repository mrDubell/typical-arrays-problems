// exports.min = function min (array) {
//   if (!array || array === undefined){
//     return 0;
//   }
//   return array.sort((a,b) => a - b)[0];
// }

// exports.max = function max (array) {
//   if (!array || array === undefined){
//     return 0;
//   }
//   return array.sort((a,b) => a - b)[array.length - 1];
// }

// exports.avg = function avg (array) {
//   if (!array || array === undefined){
//     return 0;
//   }
//   let count = 0;
//     for(let i = 0; i < array.length; i++){
//       count += array[i];
//     }
//   return count / (array.length);
// }

exports.min = function min (array) {
  return (!array || array.length === 0) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
    return (!array || array.length === 0) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) {
        return 0;
    }
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}