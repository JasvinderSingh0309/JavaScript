class Cls{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    #skills = []; // # makes this variable private, and in class it'll always be declared with #

    getInfo() {
        return {nam : this.name, email : this.email};
    }

    newCourse(name) {  // setter
        this.#skills.push(name);
    }

    getAllCourses() { // getter
        return this.#skills;
    }
}// same as in 34th file.

const har = new Cls('Harjeet','Har@singh.@uv');
console.log(har.getInfo());
har.newCourse('English');

// console.log(har.getAllCourses());
// console.log(har.skills); // both have no difference in output, when the skills variable is not private.

console.log(har.getAllCourses());
console.log(har.skills); // UD, as skills is private
//console.log(har.#skills);// this gives as error