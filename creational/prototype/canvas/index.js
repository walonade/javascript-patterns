import Rect from './rect.js';

const canvas = document.getElementById('tutorial');
const context = canvas.getContext('2d');

context.fillStyle = 'rgb(200, 0, 0)';
context.fillRect(10, 10, 50, 50);

context.fillStyle = 'rgba(0, 0, 200, 0.5)';
context.fillRect(30, 30, 50, 50);

const rectPrototype = new Rect(100, 100, 'rgba(0,0,0)', context);

canvas.addEventListener('click', event => {
    const { clientX: x, clientY: y } = event;

    rectPrototype.clone().render(x, y);
});