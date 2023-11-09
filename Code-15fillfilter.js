// var arr = [3,5,1,8,5,7];

// console.log(arr.fill('j', 2, 5));
// // console.log(arr); // changed

const myNumbers = [12,3,22,41,24,33];

// const result = myNumbers.filter( (n) => n != 24 );
// console.log(result);
// console.log(myNumbers);// unchanged

const result = myNumbers.filter( (n) => n < 24 );
console.log(result);