import { db } from "../db.js";


export const getSearch = (req, res) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM produto WHERE nome LIKE '%${searchTerm}%'`;
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing SQL query', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(results);
    });
   
}