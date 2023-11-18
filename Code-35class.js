// import Cls from "./Code-34class";
let user = require('./Code-34class.js');

let jas = new user('Jasvinder','jasvindersingh4251@gmail.com');

console.log(jas.getInfo());

jas.newCourse('HTML'); 
jas.newCourse('CSS'); 

console.log(jas.getAllCourses());
// console.log(jas.skills); // same as above

let course = jas.getAllCourses();
course.forEach( e => console.log(e) );
console.log(course.length);