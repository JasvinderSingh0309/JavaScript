// let minVal = Math.min(3,1,-4,-1,3,7,8,5);
// console.log(minVal);

// let obj = {};
// Object.assign(obj,{a:1,b:3,c:2},{p:6,q:7});
// console.log(obj);

function add1(a,b) {
    return a+b;
}

const arr = [3,9];
// console.log(add1(arr));

// console.log(add1(5,12,3));
// console.log(add1(...arr)); // spread operator

// const b = {...arr}; or []
// console.log(b);

// function flexFunc(...para) {  // rest operator
//     console.log(para);
//     let s=0;
//     for(let e of para) {
//         s += e;
//     }
//     return s;
// }
// console.log(flexFunc(3,4,2,5,7));

function flexFunc(a,b,...para) {  
    console.log(para);
    let s=0;
    for(let e of para) {
        s += e;
    }
    return [ a*b , s ];
}
console.log(flexFunc(3,17,4,77,1));