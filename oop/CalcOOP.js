class CalcOOP {
    constructor(operator,numbers) {
        this.operator = operator;
        this.numbers = numbers;
}
  calculate(operation, data) {
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
  init() {return this.calculate(this.operator,this.numbers)}
}

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));

module.exports = new CalcOOP(operator, numbers);
