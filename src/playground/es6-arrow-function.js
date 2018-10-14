const square = function (x) {
    return x * x ;
};

function squareA(x) {
    return x * x ;
};

console.log(squareA(6));

console.log(square(8));


// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(5));

// Challenge - Use arrow functions
// getFistName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using the shorthand syntax

const fullName = 'Lauri Kyttälä';
let firstName;


const nameArrow = (fullName) => {
    return fullName.split(' ')[0];
}

console.log('-> ', nameArrow('Mike Holly'));

const nameArrow2 = (fullName) => fullName.split(' ')[0];

console.log('-> ', nameArrow2('Kate Sallinger'));