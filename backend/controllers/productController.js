import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const { name } = req.body;
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const { name } = req.body;
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { name } = req.body;
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, editProduct, deleteProduct };
