const express = require('express');
const pino = require('pino')();
const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
   res.send('Hola Mundo!');
});
app.get("Saludar/:name", (req, res) => {
   res.send(`Hola ${req.params.name}`)
})

app.get("/Calculadora/:num1/:operacion/:num2", (req, res) => {
   var operacion = String(req.params.operacion);
   total = 0.0;
   switch (operacion) {
      case "+":
         total = Number(req.params.num1) + Number(req.params.num2);
         break;
      case "-":
         total = Number(req.params.num1) - Number(req.params.num2);
         break;
      case "*":
         total = Number(req.params.num1) * Number(req.params.num2);
         break;
      case "/":
         total = Number(req.params.num1) / Number(req.params.num2);
         break;
      default:
         res.json({ "Message": "Operación Invalida" });
         break;
   }

   res.json({ 
      "Operation": operacion,
      "Result": total, 
      }
   )
})


app.listen(PORT, () => {
   pino.info(`Server en Escucha en el Puerto: ${PORT}`);
});