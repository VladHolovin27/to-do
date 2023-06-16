// З 1 по 8 строчку ми шукаємо елементи на сайті, які створили в html
const counter = document.querySelector('.counter');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const recetButton = document.querySelector('.recet');
const tenButton = document.querySelector('.ten');
const fiftyButton = document.querySelector('.fifty');
const handredButton = document.querySelector('.handred');

// в 11 строчці створюємо змінну
let counterValue;
// в 13 строчці ми створюємо змінну, і в цій змінній ми дістаємо елемент з локал стореджу 
let value = localStorage.getItem('counterValue');
// В цій функції(з 15 по 20 строчку), ми перевіряємо, якщо value - пустий, то каунтерВелью = 0, інакше дорінює якомусь число
if(value == null) {
  counterValue = 0;
}
else {
    counterValue = Number(value);
}
// тут ми кажемо, що текст каунтерВелью = велью
counterValue.textContent = value; 
// в цій функції  ми записуємо в локал сторадж інформацію
function updateLocalStorage() {
    localStorage.setItem('counterValue', String(counterValue));
}
// В цих функціях(з 28 по  57 строчку), ми записуємо дії кнопок(що вони будуть робити),і записуємо це в Локал Сторадж
function plus() {
    counterValue++;
    counter.textContent = counterValue;
    updateLocalStorage()
}
function minus() {
    counterValue--;
    counter.textContent = counterValue;
    updateLocalStorage()
}
function recet() {
    counterValue = 0;
    counter.textContent = counterValue;
    updateLocalStorage();
}
function ten() {
    counterValue += 10;
    counter.textContent = counterValue;
    updateLocalStorage();
}
function fifty() {
    counterValue += 50;
    counter.textContent = counterValue;
    updateLocalStorage();
}
function handred() {
    counterValue += 100;
    counter.textContent = counterValue;
    updateLocalStorage();
}

// ми прив'язуємо до всіх кнопок по черзі слухач подій, в який передаємо івент який треба використати, та колбек функцію
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
recetButton.addEventListener('click', recet);
tenButton.addEventListener('click', ten);
fiftyButton.addEventListener('click', fifty);
handredButton.addEventListener('click', handred);