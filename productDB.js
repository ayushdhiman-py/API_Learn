const connectDB = require("./db/connect");
const Product = require("./models/product");
const data = require("./products.json");

const start = async () => {
  try {
    await connectDB("mongodb+srv://ayushdhiman1802:apiproject@cluster0.kbpnyld.mongodb.net/?retryWrites=true&w=majority");
    await Product.create(data);
    await Product.deleteMany()
    console.log("Success");
  } catch (e) {
    console.log(e);
  }
};
start();
