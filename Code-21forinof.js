// const names = ['Youtube','Facebook','Instagram','Whatsapp','Twitter'];

// for(let n of names) {
//     console.log(n);
// }

const obj = {
    yt : 'Youtube',
    it : 'Instagram',
    fb : 'Facebook',
    wt : 'Whatsapp',
    tw : 'Twitter',
};

for (let key in obj) {
    console.log(obj[key]); // . does not work
}