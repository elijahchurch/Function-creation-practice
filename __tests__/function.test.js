// import Galaxycalc from "../src/js/galactic";

// describe("Galaxycalc object and its methods", () => {

//     test("it should create a calculator object that contains the user current age", () => {
//         newUser = new Galaxycalc(32);
//         expect(newUser.earthAge).toEqual(32);
//         expect(newUser.mercuryAge).toEqual(0);
//         expect(newUser.venusAge).toEqual(0);
//         expect(newUser.marsAge).toEqual(0);
//         expect(newUser.jupiterAge).toEqual(0);
//         expect(newUser.earthPassage).toEqual("");
//         expect(newUser.mercuryPassage).toEqual("");
//         expect(newUser.venusPassage).toEqual("");
//         expect(newUser.marsPassage).toEqual("");
//         expect(newUser.jupiterPassage).toEqual("");
//     });

import { rgr, addPrefix} from "../src/js/function.js";

describe("functions to practice", () => {

    test("rgr should return '!' when 0 is entered", () => {
        const result = rgr(0);
        expect(result).toEqual("!");
    });

    test("rgr should return an error message if a number wasn't inputed", () => {
        const result = rgr("Jason");
        expect(result).toEqual("Please enter a positive number!");
    });

    test("rgr should return an error message if a number was negative", () => {
        const result = rgr(-4);
        expect(result).toEqual("Please enter a positive number!");
    });

    test("rgr should return one instance of message if input is 1", () => {
        const result = rgr(1);
        expect(result).toEqual(" red green refactor!");
    });

    test("rgr should correctly return 4 messages if input is 4", () => {
        const result = rgr(4);
        expect(result).toEqual(" red green refactor red green refactor red green refactor red green refactor!")
    })

    test("addPrefix will add whatever to the second input", () => {
        const result = addPrefix("Bonkers")("Tonkers");
        expect(result).toEqual("Bonkers Tonkers");
    })


})