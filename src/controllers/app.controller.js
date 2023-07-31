const GenericSQLError = require("../errors/GenericSQLError");
const NotFoundError = require("../errors/NotFoundError");

const main = (req, res, next) => {
  try {
    throw new GenericSQLError("KC LA REKETTE");

    console.log("Ok From Controller");
    res.send("Hello From Controller");
  } catch (err) {
    return next(err);
  }
};

const alterUser = (req, res, next) => {
  try {
    const toto = true;

    if (!toto) throw new NotFoundError("Test Error");

    //reste du traitement
    //...
  } catch (err) {
    console.log("Error catched");
    next(err);
  }
};

module.exports = { main, alterUser };
