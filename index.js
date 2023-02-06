import { dogs } from './data.js';
import { Character } from './Dog.js';

let dog = getNewDog();

function getNewDog() {
  const nextDog = dogs.shift();
  return nextDog ? new Character(nextDog) : [];
}

function render() {
  document.getElementById('img-box').innerHTML = dog.getCharacterHtml();
}

render();

function alert(text, choice) {
  const imgChoice = document.querySelector('.img-choice');
  setTimeout(function () {
    imgChoice.style.display = 'block';
    imgChoice.textContent = text;
    imgChoice.classList.add(choice);
  }, 1000);
}

const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('heart-btn')) {
      alert('like', 'like');
      setTimeout(function () {
        dog = getNewDog();
        render();
      }, 2000);
    } else {
      alert('nope', 'unlike');
      setTimeout(function () {
        dog = getNewDog();
        render();
      }, 2000);
    }
  });
});
