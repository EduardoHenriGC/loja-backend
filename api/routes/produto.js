import express from "express";
import {
  getProdutos,
  updateProduto,
  getProdutoById,
} from "../controller/produto.js";

const router = express.Router();

router.get("/produtos", getProdutos);
router.get("/produtos/:id", getProdutoById);
router.put("/produtos/:id", updateProduto);

export default router;
