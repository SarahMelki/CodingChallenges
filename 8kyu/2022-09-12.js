// 8kyu - Beginner - Reduce but Grow


// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



function grow(x){
    let current = 1
    for(let i=0; i<x.length; i++){
        current*=x[i]
    }

    return current
}


// refactored"

const grow = (nums) => nums.reduce((product, num) => product * num, 1);


// or


const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };
