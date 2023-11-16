// function init() {
//     let fName = 'Jasvinder';
//     function displayName() {
//         console.log(fName);
//     }
//     displayName();
// }
// init();
// console.log(fName);

function welcome(name) {
    console.log('Welcome!!');
    function displayName() {
        console.log(`${name}, welcoming you again.`);
    }
    displayName();
}
welcome('Jasvinder Singh');

// function example() {
//     if (true) {
//       var blockVar = 'I am a block variable';
//       console.log(blockVar);
//     }
//     console.log(blockVar); // with let gives error
//   }
// example();