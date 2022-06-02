// 5kyu - The Hashtag Generator


// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false



//P: function takes in string
//R: returns string with hashtag + Capital leter of first string element + rest of this element + Capital leter of first string element + rest of this element...


// function generateHashtag (str) {

//     //if string is empty return false
//     if(str === ''){
//         return false
//     }
//     //str to array
//     let newArr = str.split(' ')
//     let newNewArr = []
//     for(let i=0; i<newArr.length; i++){
//         newNewArr.push(+newArr[i].charAt(0).toUpper+newArr[i].slice(1))
//     }
//     if (newNewArr.join('').length > 140){
//         return false
//     }

//     return '#' + newNewArr.join('')

// }



function generateHashtag(string) {
    if (string.trim() === '') return false;
  
    const stringWithCamelCase = string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  
    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;
  
    return stringWithHashtag.length > 140 ? false : stringWithHashtag;
  }