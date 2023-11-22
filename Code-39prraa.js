let ak = () => {return 'This is One.'};

// let dho = () => {
//   setTimeout( () => {return 'This is Two'},3000 );
//   // return 'Jasvinder';
// };

let dho = () => {
  return new Promise( (resolve,reject) => {
    setTimeout(()=> {
      resolve ('This is Two');
    },3000);
  });
};

let teen = () => {return 'This is Three.'};

let callMe = async () => {
  let one = ak();
  console.log(one);
  let two = await dho();
  console.log(two);
  let three = teen();
  console.log(three);
};
callMe();
// problem in 38, is being resolved by the promise.