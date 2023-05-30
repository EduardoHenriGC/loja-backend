import express from "express";
import { addItemFav, getFav, DeleteItemFav } from "../controller/fav.js";

const router = express.Router();

router.get("/fav", getFav);
router.post("/fav", addItemFav);
router.delete("/fav:id", DeleteItemFav);

export default router;
