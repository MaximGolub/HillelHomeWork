const listArr = [
  {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
  },
  {
    title: 'Lorem ipsum dolor 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
  },
  {
    title: 'Lorem ipsum dolor 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
  },
  {
    title: 'Lorem ipsum dolor 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
  },
  {
    title: 'Lorem ipsum dolor 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
  },
  {
    title: 'Lorem ipsum dolor 5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
  }
]

/* Часть 1. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li (то есть создать еще 
2 элемента для свойства title и ы свойства text). Поместить все созданные li внутри этой ul, затем вставьте эту ul в конец body.

Для каждого созданного li добавить класс list-item */

let createUl = document.createElement("ul");
document.body.append(createUl);

function createElementLi() {
  let createLi = document.createElement("li");
  createUl.appendChild(createLi);
  createLi.setAttribute('class', 'list-item');
  return createLi;
}

for (let i = 0; i < listArr.length; i++) {
  createElementLi().textContent = listArr[i].title;
  createElementLi().textContent = listArr[i].text;
}

/* Часть 2. После это найти все элементы li и перебрать их в цикле.

Сделать функцию которая будет возвращать рандомный цвет, и для каждого li применить этот рандомный цвет текста. (Это все сделать с помощью js) */

function randomColor() {
  let color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  return color;
}

let elements = document.querySelectorAll('ul > li');

for (let elem of elements) {
  elem.setAttribute('style', `color: ${randomColor()}`);
}