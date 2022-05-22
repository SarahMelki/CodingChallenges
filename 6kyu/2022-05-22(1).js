// 6kyu - Who likes it?


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.



//P: array of names
//R: string of display text, if more than 3, diplay first 2 index positions and add remaining count + others
//E: []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


//P: check if array is empty --> return "no one likes this"
//check if array length > 3 --> return a[0],a[1], for i=2 till end, count++ likes this

// function likes(names) {
//     if(names.length === 0){
//         return "no one likes this"
//     } else if(names.length === 1){
//         return `$(names[0]) likes this`
//     } else if(names.length === 2){
//         return `$(names[0]) and $(names[1]) like this`
//     } else if(names.length === 3){
//         return `$(names[0]), $(names[1]) and $(names[2]) like this`
//     } else {
//         let count = 0
//         for(let i=2; i<=names.length; i++){
//             count++
//         }
//         return `$(names[0]), $(names[1]) and $(count) others like this`
//     }
//   }

  //better below:

  function likes(names) {
    if(Array.isArray(names)){
     
     return names.length > 3 ? names.slice(0,2).join(', ') + ' and ' + (names.length - 2) +' others like this'
          : names.length === 3 ? names.slice(0,2).join(', ') + ' and ' + names[2] + ' like this'
          : names.length === 2 ? names.join(' and ') + ' like this'
          : names.length === 1 ? names[0] + ' likes this' : 'no one likes this'
    } 

  }