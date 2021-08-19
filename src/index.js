
exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0) {
    return 0;
  }
    let minNumber = Math.min.apply(null, array)
    for ( i = 0; i< array.length; i++) {
      if ( array[i] < minNumber) {
        minNumber = array[i]
      } 
    }
   return minNumber
  }

exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0) {
    return 0;
  }  
  let maxNumber = Math.max.apply(null, array)
  for ( i = 0; i< array.length; i++) {
    if ( array[i] > maxNumber) {
      maxNumber = array[i]
    } 
  }
 return maxNumber
}

exports.avg = function avg (array) {
  if (arguments.length == 0 || array.length == 0) {
    return 0;
  } 
  let sum = array.reduce(function(a, b) {return a+b})

  for ( i = 0; i< array.length; i++) {
   let length = array.length;  
   return result = sum / length;
  }
}
