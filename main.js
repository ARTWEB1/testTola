document.getElementById('open-modal-btn').addEventListener('click', function() {
    document.getElementById('my-modul').classList.add('open')
})


document.getElementById('open__header__popup').addEventListener('click', function() {
    document.getElementById('my-modul').classList.add('open')
})


document.getElementById('close-my-modal-btn').addEventListener('click', function() {
    document.getElementById('my-modul').classList.remove('open')
})



document.getElementById('burgerr').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('openn')
} )



document.querySelectorAll('.button__menu').forEach(button => {
    button.addEventListener('click', function() {
        button.parentElement.classList.toggle('menu__item_open')
    })
})



document.getElementById('form__add').addEventListener('submit', function(e) {
    e.preventDefault()

     const $nameInput  =  document.querySelector('.name__input')
     const $numberInput = document.querySelector('.number__input')

     if($nameInput.value.trim() === "") {
        alert('Ввидите имя')
        return
     }

     if($numberInput.value.trim() === "") {
        alert('Ввидити номер')
        return
     }
})