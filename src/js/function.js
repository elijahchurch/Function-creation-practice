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
