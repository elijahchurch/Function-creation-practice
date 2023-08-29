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

import { rgr } from "../src/js/function.js";

describe("functions to practice", () => {

    test("rgr should return '!' when 0 is entered", () => {
        const result = rgr(0);
        expect(result).toEqual("!");
    });

    test("It should return an error message if a number wasn't inputed", () => {
        const result = rgr("Jason");
        expect(result).toEqual("Please enter a positive number!");
    });

    test("It should return an error message if a number was negative", () => {
        const result = rgr(-4);
        expect(result).toEqual("Please enter a positive number!");
    })


})