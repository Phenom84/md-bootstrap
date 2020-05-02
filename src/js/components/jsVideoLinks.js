import jsVideoLinksTemplate from '../templates/jsVideoLinks.hbs';

const jsVideoLinksContainer = document.getElementById('jsVideoLinks');

/* logic with nav links */
const jsVideoLinks = [
  {
    url: 'https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLY13awKbPfZlWYXuIb8iQBurD3JlI9X9o&index=2&t=9s',
    label: 'Урок 1. JavaScript. Что такое prototype. JavaScript Prototype',
  },
  {
    url: 'https://www.youtube.com/watch?v=UGapN-hrekw&list=PLY13awKbPfZlWYXuIb8iQBurD3JlI9X9o&index=2',
    label: 'Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply',
  },
  {
    url: 'https://www.youtube.com/watch?v=pahO5XjnfLA&list=PLY13awKbPfZlWYXuIb8iQBurD3JlI9X9o&index=3',
    label: 'Урок 3. JavaScript. Что такое замыкания. Как они работают (+ примеры)',
  },
  {
    url: 'https://www.youtube.com/watch?v=1idOY3C1gYU&list=PLY13awKbPfZlWYXuIb8iQBurD3JlI9X9o&index=5',
    label: 'Урок 5. JavaScript. Promise. Что это, как работает (+ пример)',
  },
  {
    url: 'https://www.youtube.com/watch?v=cS6nTVNzOPw&list=PLY13awKbPfZlWYXuIb8iQBurD3JlI9X9o&index=6',
    label: 'Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters',
  },
  {
    url: 'https://www.youtube.com/watch?v=uLY9GXGMXaA&list=PLY13awKbPfZlWYXuIb8iQBurD3JlI9X9o&index=7',
    label: 'Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)',
  },
  {
    url: 'https://www.youtube.com/watch?v=SHiUyM_fFME',
    label: 'Урок 8. JavaScript. Как работает Async, Await. Работа с сервером c fetch',
  },
  {
    url: 'https://www.youtube.com/watch?v=np08WdS9OXg',
    label: 'Урок 9. JavaScript. Proxy. Объекты, функции, классы. Часть 1',
  },
  {
    url: 'https://www.youtube.com/watch?v=mSbyhHfxs04',
    label: 'Урок 10. JavaScript. Proxy. Примеры. Часть 2',
  },
  {
    url: 'https://www.youtube.com/watch?v=7wtbNNiOh30',
    label: 'Урок 11. JavaScript. Генераторы. Symbol iterator, for of',
  },
  {
    url: 'https://www.youtube.com/watch?v=nEabP9CYCAQ',
    label: 'Урок 12. JavaScript. Методы массивов (forEach, map, filter, reduce, find, findIndex)',
  },
  {
    url: 'https://www.youtube.com/watch?v=mbcP3Oc0PjU',
    label: 'Урок 13. JavaScript. Все о Map, Set, WeakMap, WeakSet с примерами',
  },
  {
    url: 'https://www.youtube.com/watch?v=eKCD9djJQKc&t=16s',
    label: 'Урок 14. JavaScript. Запросы на сервер. Fetch, XMLHttpRequest (XHR), Ajax',
  },
  {
    url: 'https://www.youtube.com/watch?v=SGeQ-U0G7dE',
    label: 'Урок 15. JavaScript. Все о Spread и Rest',
  },
  {
    url: 'https://www.youtube.com/watch?v=wWYokY0Pt2M',
    label: 'Урок 16. JavaScript. Все о Деструктуризации в JS',
  },
  {
    url: 'https://www.youtube.com/watch?v=3-bZ7gLVSzo',
    label: 'Урок 17. JavaScript. Все о LocalStorage',
  },
  {
    url: 'https://www.youtube.com/watch?v=YJVj4XNASDk',
    label: 'JavaScript Паттерны. Шаблоны проектирования. 17 Примеров',
  },
  {
    url: 'https://www.youtube.com/watch?v=ReE8k-SHnbM',
    label: 'JavaScript. 18 способов сократить JS код',
  },
  {
    url: 'https://www.youtube.com/watch?v=20UsCQzUOIE',
    label: 'JavaScript. Дебаг (Debug) на Примере. Chrome DevTools',
  },
  {
    url: 'https://www.youtube.com/watch?v=fJqYa3BuwaU',
    label: 'JavaScript. Как создать свой bind (4 способа + call, apply)',
  },
  {
    url: 'https://www.youtube.com/watch?v=xq13wiqvcTc&t=165s',
    label: 'JavaScript. SOLID Принципы (Смотри чтобы стать Senior!)',
  },
  {
    url: 'https://www.youtube.com/watch?v=XlC5rwbAYOQ',
    label: 'JS Challenge 1: Реализовать плагин select',
  },
  {
    url: 'https://www.youtube.com/watch?v=8gxn9q6oDfM',
    label: 'JS Challenge 2: Формат данных + Розыгрыш курсов и консультации',
  },
  {
    url: 'https://www.youtube.com/watch?v=vmMcu3TXbeA',
    label: 'JS Challenge 2: Решение',
  },
  {
    url: '',
    label: '',
  },
];

if (jsVideoLinksContainer) {
  jsVideoLinksContainer.innerHTML = jsVideoLinksTemplate({ jsVideoLinks });
}
