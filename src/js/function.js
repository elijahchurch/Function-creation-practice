export function rgr(number)  {
    if(isNaN(number) || number <0) {
        return "Please enter a positive number!"
    }
    else if (number === 0) {
        return "!";    
    }
    else {
        return " red green refactor" + rgr(number -1);
    }
}

export function addPrefix(prefix) {
    return function(name) {
        return `${prefix} ${name}`;
    }
}
const addSir = addPrefix("Sir");
const addMr = addPrefix("Mr.");
const addMrs = addPrefix("Mrs.");
const addDr = addPrefix("Dr.")