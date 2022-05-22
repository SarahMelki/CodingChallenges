// 7kyu - Chain me

// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;



//function chain(input, fs) {
    // implement the "chain" function
//    }


    //P: value, array of functions
    //R: chain(function(input), functionEnd) ???





    // const chain = (input, fs) => fs.reduce((prev, cur) => cur(prev), input)




    //or using
    //recursion:

    function chain(inp, [fn, ...fns]) {
        if (fns.length == 0) return fn(inp)
        return chain(fn(inp), fns)
      }
