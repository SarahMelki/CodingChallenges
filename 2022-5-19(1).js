// 7kyu - Vowel Count


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//P: string

//R: vowel count of vowels in string a, e, i, o, u are the vowels, not y

//E: string --> 1 (for i)

//P: declare array containing vowels
// declare function that takes in string
// set count to zero
// 
//loop thru string with for of (make string to lowercase)
// if index of vowel array = any of letter in string
//increment count
//return count


const vowels = ["a", "e", "i", "o", "u"]
function getCount(str) {
    let vowelsCount = 0;
    

    for (let letter of str.toLowerCase()) {  //use for of to iterate/loop through a string 
        if (vowels.includes(letter)) {
            vowelsCount++;
        }
    }
    
    // enter your magic here
    
    return vowelsCount;
  }



