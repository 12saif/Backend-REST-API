const express = require("express");
const app = express();
const connectDB = require("./db/connect");


const products_routers = require("./routes/productsRoutes");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hii I am Live");
});

// middleware or to set router
app.use("/api/products", products_routers);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected.........`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
