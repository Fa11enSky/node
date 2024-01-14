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

module.exports = calculate;