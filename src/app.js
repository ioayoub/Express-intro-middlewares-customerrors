const express = require("express");
const cors = require("cors");
const app = express();

const port = 8000;

app.use(cors());

const appRoutes = require("./router/app.routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(appRoutes);

app.use(errorHandler);

app.listen(port, (err) => {
  if (err) console.error("something went wrong");

  console.log(`Server is running on port ${port} 🚀`);
});
