const NotFoundError = require("../errors/NotFoundError");
const GenericSQLError = require("../errors/GenericSQLError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).send("Not Found");
  }

  if (err instanceof GenericSQLError) {
    console.log(err);
    return res.status(400).send("Your SQL is broken");
  }

  return res.status(500).send("Something is broken");
};

module.exports = errorHandler;
