const modalOverlay = document.querySelector('.modaloverlay');
const cards = document.querySelectorAll('.card');


for(let card of cards) {

  //Setando o atributo a variavel
  const imgId = card.getAttribute('id');
  const title = card.querySelector('.nome-prato').innerText // atribui o texto que contém 
  const author = card.querySelector('.chef').innerText
  
  card.addEventListener("click", function(){

    modalOverlay.classList.add('active') 



    modalOverlay.querySelector("img").src = `/assets/${imgId}.png`

    modalOverlay.querySelector('.descricao-receita').innerHTML = `${title}`
    modalOverlay.querySelector('.chef-modal').innerHTML = `${author}`
    console.log('teste')
  })
}

//Fechando o modal
const closeModal = document.querySelector('.close-modal')

closeModal.addEventListener("click", function (){
    modalOverlay.classList.remove('active') // remove classe active p/ fechar modal
    modalOverlay.querySelector("img").src = ""
})
