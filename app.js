const express = require ('express')
const app = express()
var handlebars = require('express-handlebars');
app.engine('handlebars',handlebars({defaultLayout:'mainLayout'}))
app.set('view engine', 'handlebars') 
//questao um -- item um e dois -- com view
app.get('/autor/listas', (req,res) =>{
	res.render('autorLista', {autores : [{ nome:"bloch"  },{nome:"hobsbawn" },{nome:"thompson"}]})

})

  
app.listen(3000, () =>{//testando
	console.log('funcionando')
})
