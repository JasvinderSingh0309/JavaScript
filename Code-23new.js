var User = function(fName,lName,course) {
    this.fName = fName; // not , but ;
    this.lName = lName;
    this.course = course;
    this.courseCount = function () {
        console.log(this.course);
    };
};

User.prototype.getFirstName = function() { 
    console.log(this.fName);
};

var jas = new User('Jasvinder','Singh',3);
// console.log(jas);
// jas.courseCount(); 
jas.getFirstName();

var har = new User('Harjeet','Singh',2);
// console.log(har); 
// har.courseCount(); 
har.getFirstName();