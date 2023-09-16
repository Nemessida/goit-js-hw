// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesEl.length);


categoriesEl.forEach(
    (element, ind)=> {
        const elementTitle = element.firstElementChild.textContent;
        const elementNumber = element.lastElementChild
       
        console.log('Category:', elementTitle);
        console.log('Elements:',elementNumber.children.length);
    
    }
)


// const arrayOfCategories = document
//   .querySelector('#categories')
//   .querySelectorAll('.item');

// console.log('Number Of Categories:', arrayOfCategories.length);

// arrayOfCategories.forEach(listItem => {
//   console.log('Category:', listItem.firstElementChild.textContent);
//   console.log(
//     'Elements:',
//     listItem.firstElementChild.nextElementSibling.querySelectorAll('li').length,
//   );
// });

