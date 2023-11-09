var isEven = (element) => {
    // if(element%2 === 0) {
    //     return true;
    // }
    // return false;

    return element%2 === 0;
};

//console.log(isEven(11));

// var result = [0,2,6,4].every(isEven);// call back function, i.e passing the reference
// console.log(result);

var result = [12,2,6,4].every((a) => a%2 === 0 );// again a call back
console.log(result);