const toCheck = require("./fizzbuzz");

describe("FizzBuzz", () => {
    it("should return Fizz if the number is 3", () => {
        expect(toCheck.fizzBuzz(3)).toBe("Fizz");
    });
    it("should return Buzz if the number is 5",() => {
        expect(toCheck.fizzBuzz(5)).toBe("Buzz");
    });
    it("should return FizzBuzz if the number is 15", () => {
        expect(toCheck.fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return 1 if the number is 1", () => {
        expect(toCheck.fizzBuzz(1)).toBe(1);
    });
    it("should return It's not a number if the number is a", () => {
        expect(()=> toCheck.fizzBuzz("a")).toThrow("It's not a number");
    })
    
})