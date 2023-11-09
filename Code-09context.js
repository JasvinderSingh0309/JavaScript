displayMessage();
function displayMessage() {
    console.log('Hello');
}

var n = 'Jasvinder Singh';
if( n === n )console.log('True value');

// var n = 'Jasvinder Singh';
// if( n === window.n )console.log('True value'); // but it does work in browser

global.n = 'Jasvinder Singh';
if( n === global.n )console.log('True value again');// global context in node