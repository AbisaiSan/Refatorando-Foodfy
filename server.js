const express = require('express')

const nunjucks = require('nunjucks')

const server = express()

const receitas = require('./public/js/data')

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

  return res.render("home", {items:receitas})
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/receitas", function(req, res){ 
  return res.render("receitas",  {items:receitas})
})


server.get("/recipe", function(req, res){ 
  return res.render("recipe",  {items:receitas})
})



server.get("/recipe/:id", function (req, res) {
  
  const recipeId = req.params.id

  console.log(recipeId);

  return res.render("recipe", {item : recipeId} )
})


server.listen(5000,function(){
  console.log('Server is running')
})