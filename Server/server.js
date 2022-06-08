const express = require ('express');
const router = express.Router();

var app = express();

router.get('/', function(req,res){
    res.send('hola desde get');
})

// app.use('/', function(req, res){
//     res.send('estoy aprendiendo')
// })

app.listen(3000);
console.log('la aplicación está escuchando en el puerto 3000');
