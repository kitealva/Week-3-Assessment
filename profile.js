let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

let favColor = (evt) =>{
    evt.preventDefault()

    alert('My favorite color is blue!')
}

let favPlace = (evt) =>{
    evt.preventDefault()

    alert('My favorite place is Alaska!')
}

let favRitual = (evt) =>{
    evt.preventDefault()

    alert('My favorite ritual is Runescape in my bed!')
}

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)