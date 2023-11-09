var obj1 = {
    firstName : 'Jasvinder',
    lastName : 'Singh',
    age : 23,
    role : 'fresher',
    googleSignIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getInfo : function() {
        return `User '${this.firstName} ${this.lastName}' of ${this.age} is a ${this.role} , logged from google - '${this.googleSignIn}' , has enrolled in '${this.courseList.length}' courses.`;
    }
};
console.log(obj1.courseList);
obj1.buyCourse('JavaScript');
obj1.buyCourse('NodeJS');
console.log(obj1.courseList);

console.log(obj1.getCourseCount());

obj1.buyCourse('Java');
console.log(obj1.getCourseCount());

console.log(obj1.getInfo());