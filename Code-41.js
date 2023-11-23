const student = {
  Name:{
    Fname:'Jasvinder',
    lname:'Singh',
  },
  age:23,
};
console.log(student);
student.age = 17;
console.log(student);
Object.freeze(student);
// student.age = 55;
// console.log(student);
student.Name.Fname = 'Not Jasvinder';
console.log(student);