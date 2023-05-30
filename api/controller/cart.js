import { db } from "../db.js";

export const getCart = (req, res) => {
  const cartUser = req.query.q;
  const q = `SELECT cart.id as id , nome, preco, imgurl FROM produto INNER JOIN cart ON cart.produtoId = produto.id WHERE email = ?`;
  db.query(q, [cartUser], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    res.status(200).json(result);
  });
};

export const addItemCart = (req, res) => {
  const q = "INSERT INTO cart(`email`, `produtoId`) VALUES(?)";

  const values = [req.body.email, req.body.produtoId];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("item adicionado aos carrinho.");
  });
};

export const DeleteItemCart = (req, res) => {
  const itemId = req.params.id;

  const q = "DELETE FROM cart WHERE id = ?";

  db.query(q, itemId, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      console.log(`Deleted ${result.affectedRows} rows from cart`);
      res.status(200).send(`Deleted ${result.affectedRows} rows from cart`);
    }
  });
};
