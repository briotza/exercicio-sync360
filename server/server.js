const express = require('express');
const userRoutes = require("./routes/users"); // Usando require em vez de import
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", userRoutes);

const port = 8800; 
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
