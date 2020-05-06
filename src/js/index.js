import 'jquery';
import 'bootstrap';

import './components/header';
import './components/footer';
import './components/calculator';
import './components/jsVideoLinks';
import './calculator/iCalculator';

const bodyId = document.body.id;
let color;
switch (bodyId) {
  case 'html': color = '#f1672c';// rgb(241, 103 , 44)
    break;
  case 'css': color = '#30a9dc';// rgb(48, 169 , 220)
    break;
  case 'js': color = '#f1bf26';// rgb(241, 191 , 38)
    break;
  case 'react': color = '#00d8d2';// rgb(0, 216 , 210)
    break;
  case 'ts': color = '#1e579e';// rgb(30, 87 , 158)
    break;
  default: color = '#787878';// rgb(100, 100 , 100)
    break;
}

function changePageDecorColor() {
  if (this.type === 'color') {
    document.querySelector('body').style.setProperty('--borderColor', this.value);
  }
}

document.querySelector('body').style.setProperty('--borderColor', color);
document.querySelector('.colorPicker input').setAttribute('value', color);
document.querySelector('.colorPicker input').addEventListener('change', changePageDecorColor);

function readMoreHandler(target) {
  const button = target;
  const parrentId = button.closest('.readMoreWrapper').id;
  if (parrentId === 'n1' && sessionStorage.getItem(parrentId) === 'expanded') {
    document.querySelector('.right').style.animationDelay = '3.7s';
    document.querySelector('.left').style.animationDelay = '3.7s';
  } else if (parrentId === 'n1') {
    document.querySelector('.right').style.animationDelay = null;
    document.querySelector('.left').style.animationDelay = null;
  }
  button.innerHTML = (button.innerHTML === 'Read more') ? 'Read less' : 'Read more';
  const text = document.querySelector(`#${parrentId} .more`);
  if (text) {
    text.classList.toggle('hide');
  }
  const dots = document.querySelector(`#${parrentId} .dots`);
  if (dots) {
    dots.classList.toggle('hide');
  }
  const key = parrentId;
  sessionStorage.setItem(key, ((button.innerHTML === 'Read more') ? 'colapsed' : 'expanded'));
}

// Построение страницы с учетом SessionStorage------------------------------------------------------
const buttons = Array.prototype.slice.call(document.querySelectorAll('.readMore'));
buttons.forEach((button) => {
  const parrentId = button.closest('.readMoreWrapper').id;
  const storageValue = sessionStorage.getItem(parrentId);
  if (storageValue === 'expanded') {
    readMoreHandler(button);
  }
});
// Конец блока построения страницы с учетом SessionStorage------------------------------------------

// Прослушка всех click на странице-----------------------------------------------------------------
const contentWrapper = document.querySelector('.blurWrapper');

if (contentWrapper) {
  contentWrapper.addEventListener('click', (event) => {
    const calculator = document.getElementById('calculator');
    if ((calculator && event.target.classList.contains('calculatorIcon')) || calculator.style.opacity === '1') {
      calculator.style.opacity = (calculator.style.opacity === '1') ? 0 : 1;
      calculator.style.zIndex = (calculator.style.zIndex === '1033') ? 0 : 1033;
      contentWrapper.classList.toggle('blur');
    }
    if (event.target.classList.contains('readMore')) {
      readMoreHandler(event.target);
    }
    if (event.target.classList.contains('_close')) {
      document.querySelector('.pop_up').classList.toggle('disapear');
    }
  });
}
// Конец блока прослушки click----------------------------------------------------------------------
