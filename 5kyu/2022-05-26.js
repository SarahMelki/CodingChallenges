// 5kyu - Simple Pig Latin


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
    let array = str.split(" ")
    console.log(array)
    let newArr = []
    let newStr = ""
    for (let i = 0; i < array.length; i++){
        newStr = array[i].slice(1) + array[i].charAt(0) + "ay"
        newArr.push(newStr)
      } return newArr.join(" ")
  }


//   The only problem with the above implementation is that it will not skip characters such as !,? etc… Let’s use a very simple RegEx to determine if our character is a letter.

// We can implement a simple check like the following:

// word.match(/[A-z]/i)

// This will ensure that only characters from a-z will be taken into account

function pigIt(str) {
    const arr = str.split(' ')
    return arr
      .map((word) => {
        return word.match(/[A-z]/i)
          ? `${word.substr(1)}${word.substr(0, 1)}ay`
          : word
      })
      .join(' ')
  }



  //still trying to figure out how to do it without the regex method