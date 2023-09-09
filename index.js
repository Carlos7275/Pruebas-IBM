const express = require('express');
const pino = require('pino')();
const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
   res.send('Hola Mundo!');
});
app.get("Saludar/:name", (req, res) => {
   res.send(`Hola ${req.param("name")}`)
})

app.get("/Sumar/:num1/:num2", (req, res) => {
   var total=Number(req.param("num1"))+Number(req.param("num2"));
   res.json({"Message":"El resultado de la suma es : "+total})
})

app.listen(PORT, () => {
   pino.info(`Server listening on port ${PORT}`);
});