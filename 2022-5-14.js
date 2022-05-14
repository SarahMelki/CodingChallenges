// 8 kyu - Array plus array

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.




  //PREP

  //P: arrays, with integer numbers
  //R: number
  //E: [2,3,4], [3,4,5] --> 21

  //P: function that takes in 2 arrays
  //concat array 1 with array 2
  //reduce concat array to final number

  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a,b)=> a+b)
  }