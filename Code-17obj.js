var obj1 = {
    firstName : 'Jasvinder',
    lastName : 'Singh',
    age : 23,
    role : 'fresher',
    googleSignIn : true,
};
console.log(obj1.age);
console.log(obj1['lastName']);

obj1.age = 18;
console.log(obj1.age);

// console.log(obj1);

console.table(obj1);