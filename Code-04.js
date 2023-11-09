// function parseSumOfTwoNumbers(str) {

//     return sum ;
// }
// console.log(parseSumOfTwoNumbers('5 + 3'));

var loggedIn = true;
/*
if(loggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}
*/

// Conditional or Ternary operator
console.log( (loggedIn)? 'Log out' : 'Log in' );

function checkEligibility(age) {
    return (age >= 18)? 'Can Vote' : 'Cannot Vote';
}
console.log(checkEligibility(19));