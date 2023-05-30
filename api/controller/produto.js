import { db } from "../db.js";

export const getProdutos = (_, res) => {
  const q = "SELECT * FROM produto";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getProdutoById = (req, res) => {
  const itemId = req.params.id;
  const q = "SELECT * FROM produto WHERE id = ? LIMIT 1";

  db.query(q, [itemId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.status(200).json(result[0]);
  });
};

export const updateProduto = (req, res) => {
  const itemId = req.params.id;
  const { nome, preco } = req.body;

  const q = "UPDATE produto SET nome = ?, preco = ? WHERE id = ?;";
  db.query(q, [nome, preco, itemId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro interno do servidor");
    } else {
      console.log(`Atualizados ${result.affectedRows} itens no carrinho`);
      res
        .status(200)
        .send(`Atualizados ${result.affectedRows} itens no carrinho`);
    }
  });
};
