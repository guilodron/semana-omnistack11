const cors = require('cors')
const express = require('express');
const routes = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

// GET: Buscar uma informacao no backend
// POST: Criar uma informacao no backend
// PUT: Alterar uma informacao no backend
// DELETE: Deleta uma informacao



app.listen(3333, ()=>{
    console.log('iniciando...');
});