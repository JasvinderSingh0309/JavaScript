var user = ['Tad','Tbd','Tcd','Tdd','Ted','Tfd'];

// console.log(user.slice(1,3));
// console.log(user); // unchanged.

// console.log(user.slice(2));
// console.log(user);

const result = user.splice(1,...,'Hi','Bye');
console.log(result);
console.log(user);// changed