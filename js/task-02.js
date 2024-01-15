/*
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsElements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
  return element;
});

ingredientsRef.append(...ingredientsElements);