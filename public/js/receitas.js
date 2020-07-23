
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const recipeId = card.getAttribute('id')
        window.location.href = `/recipe/${recipeId}` 
    })
}


/*Esconder e mostrar*/
const recipeWrapers = document.querySelectorAll('.recipe-wraper')

for (let wraper of recipeWrapers) {
    const button = wraper.querySelector('.button')
    
    button.addEventListener('click', function () {
        wraper.classList.add('sumir') 
        wraper.querySelector('.show').classList.toggle('sumir')
        if (button.innerHTML == 'ESCONDER') {
            button.innerHTML = 'MOSTRAR'
        } else {
            button.innerHTML = 'ESCONDER'
        }
    })
}

