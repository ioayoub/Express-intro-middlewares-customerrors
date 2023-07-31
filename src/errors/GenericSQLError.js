class GenericSQLError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = GenericSQLError;
