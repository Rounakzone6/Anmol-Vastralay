import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { timestamps: true });

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
