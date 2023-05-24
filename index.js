const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

// controllers and routes are the same thing that is done below
// ki path ky hai or kr ky rahe hai
// routes tells kis path m jana hai
// controllers btaega ki us path m jake ky karna hai
app.get("/", (req, res) => {
  res.send("Hello its live");
});

// Now We Have To Tell This File Also That We Are Using Routes
// We Use Middleware in which we first tell URL path then
// provide the routes which is inside the file
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB("mongodb+srv://ayushdhiman1802:apiproject@cluster0.kbpnyld.mongodb.net/?retryWrites=true&w=majority");
    app.listen("5000", () => {
      console.log("Backend is working");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
