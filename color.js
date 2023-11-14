const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

const center = document.querySelector('.center');

// console.log(window.getComputedStyle(red).backgroundColor);

const getColor = (color) => {
    return window.getComputedStyle(color).backgroundColor;
}
// console.log(getColor(pink));

// var color = getColor(pink);
// pink.addEventListener('mouseenter',() => {
//     center.style.backgroundColor = color; 
// });

const colorChanger = (ele,color) => {
    return ele.addEventListener('mouseenter',() => {
    center.style.backgroundColor = color(ele);} )
};

colorChanger(orange,getColor);
colorChanger(red,getColor);
colorChanger(violet,getColor); 
colorChanger(pink,getColor);
colorChanger(cyan,getColor);