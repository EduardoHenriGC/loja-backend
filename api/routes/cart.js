import express from "express";
import { addItemCart, getCart, DeleteItemCart } from "../controller/cart.js";

const router = express.Router();

router.get("/cart", getCart);
router.post("/cart", addItemCart);
router.delete("/cart:id", DeleteItemCart);

export default router;
