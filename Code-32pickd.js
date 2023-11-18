// Both sides must have the same type of value, to make the destructuring work correctly

// const data = ['jasvinder',23,'student',true];

// let [name,age,role,adult] = data;
// console.log(name); // nam is ND

const obj = {
    Name:'Jasvinder',
    age:23,
    role:'student',
    adult:true,
};

// let {Name,Age,role,adult} = obj;// same as key else UD
// console.log(role); // rolle is ND
// console.log(Age);

function display({Name,age,role,adult}) {
    console.log(`${Name} of age ${age} is a ${role}, can vote:- ${adult}.`);
}
// display(obj); when no {} in display para
display(obj);
