const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const rootIngredients = document.querySelector('#ingredients');
const products = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  return list;
});
rootIngredients.append(...products);
console.log(rootIngredients);
