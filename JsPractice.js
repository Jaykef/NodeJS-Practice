let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
// 1. using for...of loop
let sumSalaries = (salaries) => {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
console.log(sumSalaries(salaries))

// 2. Using reduce()
function sumSalaries2(salaries) {
    return Object.values(salaries).reduce((a,b) => a + b, 0)
}
console.log(sumSalaries2(salaries))

let user = {
    name: "John",
    age: 30
}
function count(user) {
    return Object.keys(user).length;
}
console.log(count(user))

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
  }
  console.log(topSalary(salaries))

function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
       return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
