// function declarations are scanned and made available.
// variable declarations are scanned and made 'undefined'.  ( * )   ,check these rules for let and const, see chatgpt


// tipper('5');
// function tipper(a) {
//     var bill = +a;
//     console.log(bill + 5);
// }

console.log(bigTipper); // *
var bigTipper = function (a) { //here bigTipper is actually a variable therefore*
    var bill = +a;
    console.log(bill + 15);
}
bigTipper(20);// see more examples in chatgpt

console.log(name1);
var name1 = 'Jasvinder';

function displayName() {
    var name1 = 'MR.Singh';
    console.log(name1);
}
displayName();

console.log(name1);