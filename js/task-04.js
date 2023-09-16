// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.





const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const btnValue = document.querySelector('#value')

btnDecrement.addEventListener('click', onBtnClickDecrement)
btnIncrement.addEventListener('click', onBtnClickIncrement)

let counterValue = 0;

function onBtnClickDecrement() {
    btnValue.textContent = counterValue -= 1;
}

function  onBtnClickIncrement() {
    btnValue.textContent = counterValue +=1;
}
