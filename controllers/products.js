const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  // strict approach will now find au in audi or iphone in iphone10 instead we use regex
  // const { company } = req.query;
  // const queryObj = {};
  // if (company) {
  //   queryObj.company = company;
  // }
  // BELOW IS NOT STRICT IN FINDING IPHONE IN IPHONE10
  const { company, name, featured, sort, select } = req.query;
  const queryObj = {};

  if (featured) {
    queryObj.featured = featured;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "m" };
  }

  let apires = Product.find(queryObj);
  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let sortFix = sort.split(",").join(" ");
    apires = apires.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apires = apires.select(selectFix);
  }

  const myData = await apires;
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name company");
  console.log(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
