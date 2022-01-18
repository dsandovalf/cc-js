const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num

const squareNums = array => array.map(toSquare);

console.log(squareNums(numbers));