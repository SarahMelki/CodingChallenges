// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software 
//for scanning in the text of old novels to your database. 
//At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places 
//in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
// Your program will take in a string and clean out all numeric characters, 
// and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


//function takes string
//clean out numeric characters from string
// return string with spacing and special chars
// return cleaned string



const stringClean = s => s.replace( /\d/g, "" ) 

//let cleanStr = str => str.replace(/^[0-9\s]*|[+*\r\n]/g, '')

// This regex detects either ^[0-9\s]* or [+*\r\n] (and these sequences will be replaced with the empty string).
// ^[0-9\s]* replaces any number of consecutive digit or whitespace characters at the beginning of the string.
// ^[+*\r\n] removes any "+", "*", or newline characters (including \r, which could be significant in windows environments) which occur anywhere in the string.

