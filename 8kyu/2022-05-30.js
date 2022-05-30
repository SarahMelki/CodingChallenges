// 8kyu - String repeat


// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"




//function takes number n and string
//returns a string containing the string param repeated n number of times
//repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//


// function repeatStr (n, s) {
//     var str="";
//     for(var i=0; i < n; i++)
//       str+=s;
//       return str;
//     }


  function repeatStr (n, s) {
    return s.repeat(n);
  }


  //or

  // const repeatStr = (n,s) => s.repeat(n) 
