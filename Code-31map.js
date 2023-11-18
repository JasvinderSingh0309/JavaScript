var map = new Map();

// console.log(map);

map.set(0,'shunya');
map.set(1,'ak');
map.set(2,'do');
map.set(3,'teen');

console.log(map);

// for(let k of map.keys()) {
//     console.log(`Key : ${k}`);
// }
// for(let v of map.values()) {
//     console.log(`values : ${v}`);
// }

// for(let [k,v] of map) {
//     console.log(`Key : ${k} & Value : ${v}`);
// }

// map.delete(1);
// console.log(map);

// map.forEach( (value,key) => { // gives v & k
//     console.log(`Key : ${key} & Value : ${value}`);
// });

// console.log(map.get(0));

// map.clear();
// console.log(map);

console.log(map.has(2));