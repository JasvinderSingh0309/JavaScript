// function init() {
//     let fName = 'Jasvinder';
//     function displayName() {
//         console.log(fName);
//     }
//     return displayName;
// }

// let a = init();
// a();


// function add(x) {
//     return function (y) {
//         console.log(x+y);
//     }
// }

// // let value = add(7);
// // value(76);

// add(17)(28);//curring

function secretMessage(passcode) {
    return function(message) {
      if (passcode === '123') {
        console.log(`Secret Message: ${message}`);
      } else {
        console.log('Access denied!');
      }
    };
  }
  
  const revealMessage = secretMessage('12');
  revealMessage('Hello World'); 
  revealMessage('Unauthorized Access');