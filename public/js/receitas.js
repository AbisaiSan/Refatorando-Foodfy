const esconder = document.querySelectorAll('.esconder');
const mostrar = document.querySelectorAll('.ingred-receita');


for(let receita of mostrar) {

  
  
  receita.addEventListener("click", function(){
    
   
    esconder.classList.add('display')

  })
}

//Fechando o modal
const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener("click", function (){
    modalOverlay.classList.remove('active') // remove classe active p/ fechar modal
    modalOverlay.querySelector("img").src = ""
})
