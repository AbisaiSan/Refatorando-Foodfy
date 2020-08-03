const express = require('express')
//Variavel responsavel pelas rotas
const routes = express.Router()
//Chamando arquivo instructors com as funções (CRUD)
//const admin = require('./controllers/admin')

routes.get('/', function(req, res){
  return res.render("admin")
})

/*
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita
*/



//Exportando o arquivo
module.exports = routes
