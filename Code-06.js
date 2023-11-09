// undefined     , not 'undefined'
// null
// 0
// '' (empty string)
// NaN     , all these are falsy values

var a = '';
if(a) console.log('truthy value');

console.log((+'2') + 2);
console.log('2' + 2);
console.log(Number('2') + 2);

//coercion
var b = '2';
if(b == 2) console.log('truthy value');