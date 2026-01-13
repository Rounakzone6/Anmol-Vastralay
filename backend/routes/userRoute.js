import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";
import { adminLogin } from "../controllers/adminController.js";

const userRouter = new express.Router();

userRouter.post("/admin/login", adminLogin);

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

export default userRouter;
