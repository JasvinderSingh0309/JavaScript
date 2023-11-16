const jas = {
    fName:'Jasvinder',
    lName:'Singh',
    age:23,
    courseCount:3,
    getInfo:function() {
        console.log(`
            First-name is : ${this.fName}.
            Last-name is : ${this.lName}.
            Age : ${this.age}.
            Studying ${this.courseCount} courses.
        `);
    },
};

// jas.getInfo();

const bal = {
    fName:'Balbeer',
    lName:'Singh',
    age:26,
    courseCount:2,
};

// bal.getInfo();

jas.getInfo.bind(bal)();

// jas.getInfo.call(bal);