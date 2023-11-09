function returnSum( a , b ) {
  return a + b;
}
console.log(returnSum( 31 , 69 ));// call
var assign = returnSum;// reference
console.log(assign(25,88));

// undefined in two places

function display() {
  return 'Hello';
}
display();// nothing in output

function display() {
  return 'Hello';
}
console.log(display());

//read MDN doc