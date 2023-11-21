class Cls{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    #skills = [];

    getInfo() {
        return {nam : this.name, email : this.email};
    }

    newCourse(name) { 
        this.#skills.push(name);
    }

    getAllCourses() { 
        return this.#skills;
    }

    logIn() {
        return 'You are logged In';
    }

}// same as in 36th file.

class SubCls extends Cls{ // SubCls inherits all properties from Cls
    constructor (name,email){
        super(name,email);
    }

    locate() {
        return 'You are in Sub-Class';
    }
}

const har = new Cls('Harjeet','Har@singh.com');

// const bal = new SubCls(); 
// console.log(bal.getInfo());
// console.log(bal.logIn());
// console.log(bal.locate());

const bal = new SubCls('Balbeer','bal@singh.com'); 
// console.log(bal.getInfo());
// console.log(bal.logIn());

// console.log(bal.logIn()); // NotFunc when logIn is static