class Cls{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    skills = [];

    getInfo() {
        return {nam : this.name, email : this.email};
    }

    newCourse(name) {
        this.skills.push(name);
    }

    getAllCourses() {
        return this.skills;
    }
}

//let jas = new Cls('Jasvinder','jasvinder4251@gmail.com');

module.exports = Cls;