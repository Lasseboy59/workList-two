// argument objects - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(12,3, 500));

// this keyword - no longer bound

// const user = {
//     name: 'Lauri',
//     cities: ['Lohja', 'Helsinki', 'Vantaa'],
//     printPlacesLived: function () {
//         const that = this;

//     this.cities.forEach(function(city) {
//         console.log(that.name + ' ' + ' has lived in ' + city);
//     });
//     }
// };

// user.printPlacesLived();


// const user = {
//     name: 'Lauri',
//     cities: ['Lohja', 'Helsinki', 'Vantaa'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' ' + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();

// const user = {
//     name: 'Lauri',
//     cities: ['Lohja', 'Helsinki', 'Vantaa'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' ' + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();

// const user = {
//     name: 'Lauri',
//     cities: ['Lohja', 'Helsinki', 'Vantaa'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' ' + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();


// const user = {
//     name: 'Lauri',
//     cities: ['Lohja', 'Helsinki', 'Vantaa'],
//     printPlacesLived() {
//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         }); 
//         return cityMessages; 
//     }
// };

// console.log(user.printPlacesLived());


const user = {
    name: 'Lauri',
    cities: ['Lohja', 'Helsinki', 'Vantaa'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }
};

console.log(user.printPlacesLived());


// Challenge area

// const multiplier1 = {
    // numbers- array of numbers
    // multiply by - single number
    // multily - return a new aray where the numbers are multiplied
    // [1,2,3] 2 [2,4,6]

//};

// console.log(multiplier1.multiply());

const number = {
    multiplier: 2,
    numArray: [1,2,3],
    multiply() {
        return this.numArray.map((number) => this.multiplier * number); 
    }
};

console.log(number.multiply());