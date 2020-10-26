const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

//   Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на 
// случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета 
// фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение 
// темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию 
// randomIntegerFromInterval.



const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stoptBtn: document.querySelector('[data-action="stop"]'),
}

// использовать функцию для рандомного выбора цвета
let isActive = false;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

refs.startBtn.addEventListener('click', changeBodyColor);
refs.stoptBtn.addEventListener('click', stopChangeBodyColor);

let intervalId = null;

function changeBodyColor (e) {
    if (isActive) {
        return;
    }
    isActive = true;
    intervalId = setInterval(() => {
        document.body.style.background = colors[randomIntegerFromInterval(0, 5)]; //random!
    }, 1000);
    refs.startBtn.setAttribute('disabled', 'disabled');
}

console.log(changeBodyColor);

function stopChangeBodyColor(e) {
    //если активна старт функция, то эта должна останавливать цвет
  refs.startBtn.removeAttribute('disabled')
  if (intervalId) {
      clearInterval(intervalId)
  }
    isActive = false;
}