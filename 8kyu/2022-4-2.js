// 8kyu - Convert a Boolean to a String



// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.



//P: function takes in boolean, either false or true, no other parameters are valid

//R: string representation of boolean

//E: true --> "true" | false --> "false"

//P: create function that takes boolean, either true or false
//check if parameter is actually a boolean
// convert boolean to string


function booleanToString(b){
    if(b === true || b === false){
        return b.toString()
    }
  }
