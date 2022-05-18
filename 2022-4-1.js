// 8kyu - What is between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


//P: takes two integers a, b. a < b

//R: array with all integers between a and b, including a and b

//E: a = 1
// b = 4
// --> [1, 2, 3, 4]

//P: function takes integers a and b
// let arr = new empty array
// for i = a, i<=b, i++
// push i into arr



function between(a, b) {
    let arr = []
    for (i = a; i <= b; i++){
        arr.push(i)
    }
    return arr
  }