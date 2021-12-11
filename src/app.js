const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 3003;

app.use('/', mainRoutes);


app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));