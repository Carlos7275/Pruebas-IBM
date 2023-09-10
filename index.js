const express = require('express');
const pino = require('pino')();
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
   res.send('Hola Mundo!');
});
app.get("/Saludar/:name", (req, res) => {
   res.send(`Hola ${req.params.name}`)
})

app.get("/Calculadora/:num1/:operacion/:num2", (req, res) => {
   var operacion = String(req.params.operacion);
   const { num1, num2 } = req.params;

   total = 0.0;
   switch (operacion) {
      case "+":
         total = Number(num1) + Number(num2);
         break;
      case "-":
         total = Number(num1) - Number(num2);
         break;
      case "*":
         total = Number(num1) * Number(num2);
         break;
      case "div":
         if (num2 != 0)
            total = Number(num1) / Number(num2);
         else
            res.json({ "Message": "No se puede dividir entre 0" })
         break;
      default:
         res.json({ "Message": "Operación Invalida" });
         break;
   }

   res.json({
      "Number1": num1,
      "Number2": num2,
      "Operation": operacion,
      "Result": total,
   }
   )
})

app.listen(PORT, () => {
   pino.info(`Server en Escucha en el Puerto: ${PORT}`);
});