// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

{/* <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}

const input = document.querySelector('input#name-input')
const clientName = document.querySelector('span#name-output')
input.addEventListener('input', onInputChange)


    
function onInputChange(event) {
    
        clientName.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonimus';
   
    console.log(clientName.textContent);
}