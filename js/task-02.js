const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// const ingredientsArray = document.querySelector('#ingredients');

// ingredients.forEach((ingredient) => {

// const ingredientsItem = document.createElement('li');
// ingredientsItem.textContent = ingredient;
// ingredientsItem.classList.add('item');

//   console.dir(ingredientsItem);
//   ingredientsArray.append(ingredientsItem);
//   console.log(ingredientsArray);
// })

const ingredientsArray = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');
 
  return ingredientsItem;

})

document.querySelector('#ingredients').append(...ingredientsArray);

console.log(...ingredientsArray);









