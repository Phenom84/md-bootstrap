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

const pageBody = document.querySelector('body');
pageBody.style.setProperty('--borderColor', color);
document.querySelector('input').setAttribute('value', color);

function changePageDecorColor() {
  if (this.type === 'color') {
    pageBody.style.setProperty('--borderColor', this.value);
  }
}

const inputs = [].slice.call(document.querySelectorAll('input'));
inputs.forEach((input) => input.addEventListener('change', changePageDecorColor));

const contentWrapper = document.querySelector('.blurWrapper');
const calculator = document.getElementById('calculator');
if (contentWrapper) {
  contentWrapper.addEventListener('click', (event) => {
    if ((calculator && event.target.classList.contains('calculatorIcon')) || calculator.style.opacity === '1') {
      calculator.style.opacity = (calculator.style.opacity === '1') ? 0 : 1;
      calculator.style.zIndex = (calculator.style.zIndex === '1033') ? 0 : 1033;
      contentWrapper.classList.toggle('blur');
    }
    if (event.target.classList.contains('readMore')) {
      document.getElementById('more').classList.toggle('hide');
      document.getElementById('dots').classList.toggle('hide');
      const buttonText = event.target;
      buttonText.innerHTML = (buttonText.innerHTML === 'Read more') ? 'Read less' : 'Read more';
      sessionStorage.setItem('pop_up', ((buttonText.innerHTML === 'Read more') ? 'colapsed' : 'expanded'));
    }
    if (event.target.classList.contains('_close')) {
      document.querySelector('.pop_up').classList.toggle('disapear');
    }
  });
}

if (sessionStorage.getItem('pop_up') === 'expanded') {
  document.getElementById('more').classList.toggle('hide');
  document.getElementById('dots').classList.toggle('hide');
  document.querySelector('.pop_up > .readMore').innerHTML = 'Read less';
  document.querySelector('.right').style.animationDelay = '3s';
}
