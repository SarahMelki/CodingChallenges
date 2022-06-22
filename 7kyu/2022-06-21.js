// 7kyu - Exes and Ohs


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false





function XO(str) {
    //code here
    //check if string does not include x or o
    // if(str.toLowerCase().indexOf('x') === -1 && str.toLowerCase().indexOf('y') === -1){
    //     return true

    // }
    let xResult = []
    let oResult = []
    for(let i=0; i<str.length; i++){
        if(str.toLowerCase()[i] === 'x'){
            xResult.push(str.toLowerCase()[i])
        }
        else if(str.toLowerCase()[i] === 'o'){
            oResult.push(str.toLowerCase()[i])
        }
    }

    if(xResult.length === oResult.length){
        return true
    }
    else {
        return false
    }
}