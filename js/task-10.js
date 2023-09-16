function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// 

const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const inputControls = document.querySelector('input')
const divBoxes = document.querySelector('#boxes')


btnCreate.addEventListener('click', onCreate)
btnDestroy.addEventListener('click', onDestroy)

// function onCreate(event, createBoxes) {

// //   divBoxes.append(divArray);

  
// console.log(event);

// }


let sizeBox = 30;


inputControls.addEventListener('input', onNumber)

  function onNumber(evt) {

    const amount = evt.currentTarget.value;
  
    return amount;
  }

  
function createBoxes(amount) {
  let divArray = [];

 

      for (let i = 0; i < amount; i += 1) {
        const createBox = document.createElement('div');
        createBox.style.backgroundColor = getRandomHexColor;
        createBox.style.height = '${sizeBox}px';
        createBox.style.width = '${sizeBox}px';
        divArray.push(createBox);
        return divArray;
      }
    }




// function createBoxes(amount) {


//   let divArray = []

//   for (let i = 0; i < amount; i+=1) {
//     const createBox = document.createElement('div');
//     createBox.style.backgroundColor = getRandomHexColor;
//     createBox.style.height = '${sizeBox}px';
//     createBox.style.width = '${sizeBox}px';
//     divArray.push(createBox);
//     return divArray;
//   }

  
// }

function onDestroy (){

}

