import counter from './Counter.js';
const display = document.getElementById('display-JS04');
document.getElementById('btn1-JS04').addEventListener('click', onIncrement);
document.getElementById('btn2-JS04').addEventListener('click', onDecrement);
display.innerText = 0;


function onIncrement() {
    counter.increment();
    display.innerText = counter?.count;
}

function onDecrement() {
    counter.decrement();
    display.innerText = counter?.count;
}
