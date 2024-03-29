// 8kyu - Exclamation marks series #1: Remove an exclamation mark from the end of a string


// DESCRIPTION:
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"



function remove (string) {
    if(string[string.length-1] === '!'){
        return string.slice(0, string.length-1)
    } else {
        return string
    }
  }

//   function remove(s){
//     return s[s.length-1] == '!' ? s.slice(0, s.length-1) : s;
//   }
