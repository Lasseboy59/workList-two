console.log('person.js is running');
 
const isAdult = (age) => age >= 18;

/* export const canDrink = (age) => {
    if(age >= 21 ){
        return true;
    } else {
        return false;
    }
}; */

const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export { canDrink, isAdult, isSenior as default };

