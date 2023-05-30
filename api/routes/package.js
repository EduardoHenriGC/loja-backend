import express from "express";
import { addItemPackage, getPackage } from "../controller/package.js";

const router = express.Router();

router.get("/pedidos", getPackage);
router.post("/pedidos", addItemPackage);

export default router;
