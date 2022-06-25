// 4kyu - Sum Strings as Numbers


// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// function sumStrings(a,b) { 

//     let sum = Number(a) + Number(b) //works but still gives error if int entered is too big
//     return sum.toString()

//     // return (Number(a) + Number(b)).toString()
// }

function sumStrings(a,b) { 
    return ((BigInt(a)) + BigInt(b)).toString() //use BigInt to makme sure value entered is not bigger than int type max value
  }
  
