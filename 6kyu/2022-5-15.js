// 6kyu - Odd-heavy Array

// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.


//P: array of integers

//R: true if array odd-heavy, false if not

//E: Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]

//P: //function takes array of integers
//if array with odd element greater than all even elements => odd-heavy
//else not odd heavy (false)

//NEEDS MORE SOLVING, NOT ALL TESTS PASSED!

function isOddHeavy(arr){

    if(arr.length === 0){
        return
    }else if(arr.length === 1 && arr[0]%2 === 0){
        return
    }


    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            for(let j=0; j < arr.length; j++){
                if(arr[j] % 2 === 0){
                    if(arr[i] < arr[j]){
                        return false
                    } else {
                        return "oddHeavy"
                    }
                }
            }
        } 
    }
  }

