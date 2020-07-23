const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const recipeId = card.getAttribute('card')
        window.location.href = `/recipe/${recipeId}` 
    })
}