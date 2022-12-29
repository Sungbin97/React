class Human {
    /* ES6
    constructor(){
        this.gender = 'male';
    }

    printGender(){
        console.log(this.gender);
    }
    */
    // ES7
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    /* ES6
    constructor(){
        super();
        this.name = 'Max';
        this.gender = 'female';
    }

    printMyName(){
        console.log(this.name);
    }
    */
   // ES7
    name = 'Max';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();