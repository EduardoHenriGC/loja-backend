import { db } from "../db.js";

export const getFav = (req, res) => {
  const favUser = req.query.q;
  const q = `SELECT favoritos.id as id,nome, preco, imgurl FROM produto INNER JOIN favoritos ON favoritos.produtoId = produto.id WHERE email = ?`;
  db.query(q, [favUser], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    res.status(200).json(result);
  });
};

export const addItemFav = (req, res) => {
  const q = "INSERT INTO favoritos(email, produtoId) VALUES(?)";

  const values = [req.body.email, req.body.produtoId];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("item adicionado aos favoritos.");
  });
};

export const DeleteItemFav = (req, res) => {
  const itemId = req.params.id;

  const q = "DELETE FROM favoritos WHERE id = ?";

  db.query(q, [itemId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      console.log(`Deleted ${result.affectedRows} rows from cart`);
      res.status(200).send(`Deleted ${result.affectedRows} rows from cart`);
    }
  });
};
