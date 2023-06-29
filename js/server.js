const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors());

app.get('https://02e8-2803-c180-2101-3112-d1f3-7b96-9cd2-3ee.ngrok-free.app/producto', async (req, res) => {
  try {
    const url = 'https://02e8-2803-c180-2101-3112-d1f3-7b96-9cd2-3ee.ngrok-free.app/producto';
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    res.json(data);
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

const port = 3000; // Puerto en el que escuchará el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});