import { db } from "../db.js";

export const getPackage = (req, res) => {
  const pedidoItem = req.query.q;
  const q = "SELECT * FROM pedidos WHERE email = ? ";

  db.query(q, [pedidoItem], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addItemPackage = (req, res) => {
  const q =
    "INSERT INTO pedidos(listItem, email, valor, dataCompra, tipoImovel, cep, telefone, nmrCasa, nmRua) VALUES(?)";

  const values = [
    req.body.listItem,
    req.body.email,
    req.body.valor,
    req.body.dataCompra,
    req.body.tipoImovel,
    req.body.cep,
    req.body.telefone,
    req.body.nmrCasa,
    req.body.nmRua,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    // Adiciona a query para deletar um item em outra tabela
    const deleteQuery = "DELETE FROM cart WHERE email = ?";
    const deleteValues = [req.body.email];

    db.query(deleteQuery, deleteValues, (err) => {
      if (err) return res.json(err);
      return res
        .status(200)
        .json("item adicionado aos pedidos e removido da outra tabela.");
    });
  });
};
