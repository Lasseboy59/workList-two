
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi. I am ${this.name}! `;
    }
    getDescriotion() {
        return `${this.name} is ${this.age} year(s) old. `;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescriotion() {
        let description = super.getDescriotion();

        if(this.hasMajor()) {
            description = description + ` Their major is ${this.major}.  `;
        }

        return description;
    }
}


class Student2 extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    getDescriotion() {
        let description = super.getDescriotion();

        if(this.major) {
            description = description + ` Their major is ${this.major}.  `;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation; 
    }

    getGreetings() {
        let greetings = super.getGreetings();

        if(this.homeLocation) {
            greetings = greetings + ` I am visiting from ${this.homeLocation}.`
        }

        return greetings;
    }
}

const me = new Student2('Lauri', 51, null  );
// const me = new Student('Lauri', 51, 'Computer Science');
console.log(me.getDescriotion());

/*
const me = new Traveller('Lauri', 51, 'Lohja');
console.log(me.getGreetings());


// const other = new Traveller();
const other = new Traveller('undefined','undefined','Nowhere');
console.log(other.getGreetings());
*/