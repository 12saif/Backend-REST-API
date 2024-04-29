const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
// const hostname = "localhost";
// const backlog = 10;
// const port = PORT;

app.get("/", (req, res) => {
  res.send("Hii I am Live");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes Connected.........`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
