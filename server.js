const express = require('express')

const nunjucks = require('nunjucks')

const server = express()

// const receitas = require('./js/...')

//Configurando o express para arquivos estáticos
server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express:server,
  noCache:true
})

//Criando as rotas
//Aqui está fazendo a requisação e a resposta

server.get("/", function(req, res){

  return res.render("index")
})

server.get("/sobre", function(req, res) {
  return res.render("sobre")
})

server.get("/receitas", function(req, res){ 
  return res.render("receitas")
})
server.listen(5000,function(){
  console.log('Server is running')
})