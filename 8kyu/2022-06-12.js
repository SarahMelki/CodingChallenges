// 8kyu - Square(n) Sum


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let newArr = []
    for(let i=0; i<numbers.length; i++){
        newArr.push(numbers[i]**2)
    }
    return newArr.reduce((a,i) => a+i, 0)
}


// refactored:

// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }