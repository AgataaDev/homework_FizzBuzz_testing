const toCheck = {
    fizzBuzz: function (a) {
        if (a % 3 === 0 && a % 5 === 0) {
            return "FizzBuzz";
      } else if (a % 3 === 0) {
            return "Fizz";
        } else if (a % 5 === 0) {
            return "Buzz";    
        } else {
            if(typeof(a) === "string") {
                throw new Error("It's not a number");
            }
            return a;
        }
    }}

module.exports = toCheck;