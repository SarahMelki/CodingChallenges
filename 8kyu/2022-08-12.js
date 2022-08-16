// 8kyu - Fake Binary


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let newBinaryStr = []
    let newArr = x.split('')
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] < 5){
            newBinaryStr.push(0)
        } else if(newArr[i] >= 5){
            newBinaryStr.push(1)
        }
    }
    return newBinaryStr.join('')
}



// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }