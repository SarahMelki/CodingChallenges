// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


//function that takes in array of integers
//sort array
//return index zero of array

// function returnsSmallestInt (newArr){
//     let sortedArr = newArr.sort((a,b) => a - b)
//     return sortedArr[0]
// }


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }