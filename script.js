var count = document.getElementsByTagName('h1')[0];
var follower = document.getElementsByTagName('p')[0];
// console.log(count);
// console.log(follower);

setInterval( () => {
    if(count.innerText < 2000)
        count.innerText = ++(count.innerText);
} ,10 );

setTimeout( () => {
    follower.innerText = 'Followers on Youtube!';
} , 10000 )