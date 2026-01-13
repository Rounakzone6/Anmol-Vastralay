import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

const port = process.env.PORT;
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
