// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

//

// //////codewars/////
// function addLength(str) {
// //start-here
//    let arr = [];
//   const words = str.split(" ");//arr
//   console.log(words);
//   for(const word of words){
  
//     arr.push(word.concat(" " + [word.length]));
   
   
   
//   }
//  console.log(arr);
// }


// addLength('you will win');

// function between(a, b) {
//   // your code here
//   let result = [];
//   for (let i = a; i <= b; i += 1){
     
//     result.push(i);
//   }
//   console.log(result);
// }

// between(1, 4);
// between(-2, 2);

var number = function (array) {
  //your awesome code here

  for (let i = 0; i <= array.length; i += 1) {
    let num = 0;
    num += 1;
    const message = `${num}${':'}${''}${i}`;
    console.log(message);
  }
}

number(["a", "b", "c"]);

