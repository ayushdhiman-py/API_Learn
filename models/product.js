const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: [true, "price must be provided"] },
  featured: { type: Boolean, default: true },
  rating: { type: Number, deafult: 5 },
  createdAt: { type: Date, default: Date.now() },
  // gini chuni comapnies hi ho so we use enum
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "nokia", "mi"],
      message: `{VALUE} not supported`,
    },
  },
});

module.exports = mongoose.model("Product", ProductSchema);
