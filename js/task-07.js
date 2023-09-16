// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const titleEl = document.querySelector('#text')
const inputEl = document.querySelector('input#font-size-control')

inputEl.addEventListener('input', onSizeControle)

let step = 0;

function onSizeControle(evt) {

    step = evt.currentTarget.value;

    titleEl.style.fontSize=`${step}px`;
    

    
}