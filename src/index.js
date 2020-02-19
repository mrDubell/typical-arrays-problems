
exports.min = function min (array) {
  return array.sort((a,b) => a - b)[0];
}

exports.max = function max (array) {
  return array.sort((a,b) => a - b)[array.length - 1];
}

exports.avg = function avg (array) {
  let count = 0;
    for(let i = 0; i < array.length; i++){
      count += array[i];
    }
return count / (array.length);
}
