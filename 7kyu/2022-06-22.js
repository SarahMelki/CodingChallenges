// 7kyu - Mumbling


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



//function takes in string
//convert string of letters to array
//if array,length === 1 ---> array[0].toUpperCase
//loop through array
//for every index i --> array[0].toUpperCase + array[i].toUpperCase + array[i-1].toLowerCase


 //loop through string
function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
  }


  
//map
//   function accum(s) {
//     return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
//   }


//reduce
// function accum(s) {
//     return [...s.toUpperCase()].reduce((acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index))
//   }


