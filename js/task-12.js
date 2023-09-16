const cars = [
  {
    id: 1,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

// 1. додати в розмітку лішки використовууючи метод мап
//2. реалізувати делегування подій і прописати для нього колбек функцію
//3. створити інстанс за допомогою бібліотеки і передати йому розмітку
//4. викликати метод шоу для відкривкання модального вікна

const container = document.querySelector('.js-container')

const markup = cars.map(({ img, car, id }) => `
<li class="js-target js-card" data-car-id="${id}">
<img class="js-target" src="${img}" alt="${car}" width="200">
<h2 class="js-target">${car}</h2>
</li>
`)

container.insertAdjacentHTML("beforeend", markup.join(""));

container.addEventListener('click', onClick)

function onClick(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  }

  const carId = evt.target.dataset.carId ?? evt.target.closest(".js-card").dataset.carId;
  const currentItem = cars.find(({ id }) => id === Number(carId));

  const instance = basicLightbox.create(`
    <div class="bg">
    <img src="${currentItem.img}" width="300" alt="${currentItem.car}">
    <h2>${currentItem.car}</h2>
    <h3>${currentItem.type}</h3>
    <p>${currentItem.price}</p>
  </div>
`)
  instance.show();
}
