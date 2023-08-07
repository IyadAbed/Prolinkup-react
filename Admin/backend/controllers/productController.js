const Project = require("../models/productModel");
// const User = require("../models/quotesModel");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      ratings,
      quantity,
      pages,
      author,
      img,
    } = req.body;

    const newProduct = await Project({
      name: name,
      description: description,
      price: price,
      category: category,
      ratings: ratings,
      quantity: quantity,
      pages: pages,
      author: author,
      img: img,
    });

    newProduct.save();

    res.status(200).json("product added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, ratings, quantity } = req.body;
    const productID = req.params.id;

    const update = await Project.findOneAndUpdate(
      { _id: productID },
      {
        name: name,
        description: description,
        price: price,
        category: category,
        ratings: ratings,
        quantity: quantity,
        pages: pages,
        author: author,
        img: img,
      }
    );

    res.status(201).json("product updated successfully ");
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

const showProducts = async (req, res) => {
  try {
    const products = await Project.find().populate({
      path: "owner",
      model: "User",
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
};
const showOneProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ _id: productId, is_delete: false });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  showProducts,
  showOneProduct,
};

//////////delete request from user profile
// app.put("/request/:id", (req, res) => {
//   const projectid = req.params.id;
//   try {
//     const delete = await Project.findOneAndUpdate({})
//   } catch (error) {
    
//   }
// });
