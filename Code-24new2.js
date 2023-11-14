var User = function(fName,lName,course) {
    this.fName = fName; // not , but ;
    this.lName = lName;
    this.course = course;
    this.courseCount = function () {
        console.log(this.course);
    };
};

User.prototype.getFirstName = function() { 
    (this.hasOwnProperty('fName'))? console.log(this.fName) : console.log('Property do not exist!!');  
};

var jas = new User('Jasvinder','Singh',3);
jas.getFirstName();

var har = new User('Harjeet','Singh',1);
har.getFirstName();