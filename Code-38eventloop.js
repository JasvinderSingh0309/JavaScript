// see event loop in mdn

// (() => {
//     console.log('Start');
//     setTimeout( () => console.log('Timeout 1.') );
//     console.log('Middle');
//     setTimeout( () => console.log('Timeout 2.') );
//     console.log('End!!');
// })();

let ak = () => console.log('This is One.');
let dho = () => {
    setTimeout( () => console.log('Timeout Message!!'),3000 );
    console.log('This is Two.');
}
let teen = () => console.log('This is Three.');

// ak();
// teen();
// dho();

ak();
dho();
teen();