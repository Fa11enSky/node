//node calc.js sum 1 4 3
//node calc.js sub 4 2 1
//node calc.js mult 4 2 1
//node calc.js div 12 4 3
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));

function calculate(operation, data) {
  switch (operation) {
    case "sum":
      return data.reduce((acc, el) => acc + el);

    case "mult":
      return data.reduce((acc, el) => acc * el);

    case "div":
      return data.reduce((acc, el) => acc / el);

    case "sub":
      return data.reduce((acc, el) => acc - el);

    default:
      return "Unknown operation type";
  }
}

const result = calculate(operator, numbers)
console.log(result)