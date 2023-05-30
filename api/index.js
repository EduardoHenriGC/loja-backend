import express from "express";

import Produtos from "./routes/produto.js";
import Search from "./routes/search.js";
import fav from "./routes/fav.js";
import cart from "./routes/cart.js";
import pedidos from "./routes/package.js";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", Produtos, Search, pedidos, cart, fav);

app.listen(8800);
