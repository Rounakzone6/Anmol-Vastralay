import express from "express";
import authAdmin from "../middleware/adminAuth.js";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.js";

const productRouter = new express.Router();

productRouter.post("/add", authAdmin, addProduct);
productRouter.put("/edit", authAdmin, editProduct);
productRouter.delete("/delete", authAdmin, deleteProduct);

export default productRouter;
