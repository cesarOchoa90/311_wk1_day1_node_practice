// * isEven
//   * Return a boolean that represents whether a given number is even
//   * Hint: Modulus

// * Sum
//   * Return a value that represents the sum of an array of numbers
//   * Hint: Reduce

// * ComboSum
//   * Determine if any combination of numbers in an array equals a given sum. Return a boolean
//   * Hint: Loop in loop OR indexOf for diff

const isEven = (num) => {
  // write code for numbers.isEven
  if ( num % 2 == 0){
    return true
  } else  {
        return false
      } 


}

const sum = (arr) => {
  // write code for numbers.sum
  const sumArr = arr.reduce((a, b) =>{
    return a + b;
  }, 0);
 return sumArr
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  // the first foor loop starts at 0, and second one
  // adds +1 to compare with the one before
  for (let i = 0; i < arr.length ;i++){
    for( let a = i + 1; a < arr.length; a++){
      // we do this if statement to return a boolean
      // and also we put arr which is what we comparing and add i and a in brackets
      //for the comparison of the value at those indexes
      if (arr[i] + arr[a] == sum){
        return true
      }  else{
        return false
      }

    }
  }


}

module.exports = {
  isEven,
  sum,
  comboSum
}