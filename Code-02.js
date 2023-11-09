/*const uid = 'JSingh321';
uid = 'HSingh654';
console.log(uid);
//as userid is unique, so const*/

const uid = 'JSingh321';
var fullName = 'Jasvinder Singh';
var e_mail = 'jasvinder4251@gmail.com';
var password = 'Sin1234';
var gender = 'Male';
var phNo = 1234567890;
var isLoggedInThroughGoogle = false;

console.log('Full Name is: '+ fullName +' How are you doing?');

/*
console.log(uid);
console.log('Full Name is:' , fullName); // + or , to separate OR,
console.log(e_mail);
console.log(password);
console.log(gender);
console.log(phNo);
console.log(isLoggedInThroughGoogle);
*/

//Interpolation :- 1.
console.log(`
    User is : ${fullName}
    with id : ${uid}
    with ${e_mail} as E-mail
    is ${gender} has a contact number ${phNo}
    ${isLoggedInThroughGoogle} for logged from Google.
`);

// 2.
let greetings = 'Hello ' + fullName + ', Welcome!!';
console.log(greetings);

// 3.
function display(name) {
    return `Hello ${name}`;
}
console.log(display('Jasvinder Singh'));