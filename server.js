const express = require('express')

const nunjucks = require('nunjucks')

//Chamando a routes
const routes = require('./routes')

const server = express()


//Configurando o express para arquivos estáticos
server.use(express.static('public'))

server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express:server,
  noCache:true,
})


server.listen(3000,function(){
  console.log('Server is running')
})