const productCollection = require("../../models/productSchema");
const mongoose = require("mongoose");
const productcontroller = async (req, res) => {
  try {
    const { id, category, subcategory, name } = req.params;
    let products;
    // && mongoose.Types.ObjectId(id)
    if (id) {
      products = await productCollection.find({ _id: id });
    } else if (category) {
      const searchcategory = category.toLowerCase();
      if (req.path.includes("/lowtohigh")) {
        products = await productCollection
          .find({
            category: { $regex: new RegExp(searchcategory, "i") },
          })
          .sort({ new_price: 1 });
      } else if (req.path.includes("/hightolow")) {
        products = await productCollection
          .find({
            category: { $regex: new RegExp(searchcategory, "i") },
          })
          .sort({ new_price: -1 });
      } else {
        products = await productCollection.find({
          category: { $regex: new RegExp(searchcategory, "i") },
        });
      }
    } else if (subcategory) {
      const searchsubcategory = subcategory.toLowerCase();
      products = await productCollection.find({
        sub_category: { $regex: new RegExp(searchsubcategory, "i") },
      });
    } else if (name) {
      const searchname = name.toLowerCase();
      products = await productCollection.find({
        name: { $regex: new RegExp(searchname, "i") },
      });
    } else if (req.path.includes("/random")) {
      products = await productCollection.aggregate([{ $sample: { size: 5 } }]);
    } else if (req.path.includes("/top-rated")) {
      products = await productCollection.find().sort({ rating: -1 }).limit(5);
    } else if (req.path.includes("/lowtohigh")) {
      products = await productCollection.find().sort({ new_price: 1 });
    } else {
      products = await productCollection.find();
    }
    if (!products || products.length == 0)
      return res.status(404).json({ message: "Products not found" });
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = productcontroller;
