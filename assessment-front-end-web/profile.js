

function colorfunc(event) {
    event.preventDefault();

    alert('My favorite color is white!')
}
function placefunc(event) {
    event.preventDefault();

    alert('My favorite place is the beach!')
}
function ritualfunc(event) {
    event.preventDefault();

    alert('My favorite ritual is still unknown!')
}

let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.getElementById('ritual');

color.addEventListener('click', colorfunc)
place.addEventListener('click', placefunc)
ritual .addEventListener('click', ritualfunc)