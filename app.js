const express = require ('express')
const app = express()
//const projetoRouter = require('./autorLista')
var handlebars = require('express-handlebars');
app.engine('handlebars',handlebars({defaultLayout:'mainLayout'}))
app.set('view engine', 'handlebars') 
//autor = [{ nome:"habitantes: 29"  },{nome:"habitantes: 39" },{nome:"habitantes: 1000000"}]
//questao um -- item um e dois -- com view
app.get('/autor/lista', (req,res) =>{
	
	res.render('autorLista', {autores : [{ nome:"bloch"  },{nome:"hobsbawn" },{nome:"thompson"}]})

})

  
app.listen(3000, () =>{//testando
	console.log('funcionando')
})