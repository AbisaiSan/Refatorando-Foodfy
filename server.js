const express = require('express')

const nunjucks = require('nunjucks')

const server = express()

const receita = require('./public/js/data')

//Configurando o express para arquivos estáticos
server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express:server,
  noCache:true,
})

//Criando as rotas
//Aqui está fazendo a requisação e a resposta

server.get("/", function(req, res){

  return res.render("home", {items:receita})
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/receitas", function(req, res){ 
  return res.render("receitas",  {items:receita})
})
server.get("/recipe", function(req, res){ 
  return res.render("recipe", {items:receita})
})


/*Recipe

server.get("/recipe/:index", function (req, res) {
  const recipes = [...]; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  console.log(receipts[recipeIndex]);
})
*/
server.listen(5000,function(){
  console.log('Server is running')
})