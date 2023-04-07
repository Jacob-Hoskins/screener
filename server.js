const mongoose = require("mongoose");
const allStocks = require("./request");
const startSearch = require("./start");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection succesful");
  });

// allStocks.allStocks();

const server = app.listen(3000, () => {
  console.log("Server Running");
  setTimeout(() => {
    startSearch.startingPoint();
  }, 1000);
});
