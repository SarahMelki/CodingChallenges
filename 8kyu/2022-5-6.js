
// Area of a Square

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph - showing inner curve from one corner of the red square diagonally to the other 

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


function squareArea(A) {
    return +Math.pow((4 * A) / (Math.PI * 2), 2).toFixed(2);
}
