const sayHello = (req, res, next) => {
  console.log("Hello");
  next();
};

const sayWilders = (req, res, next) => {
  console.log("Wilders");
  next();
};

module.exports = { sayHello, sayWilders };
