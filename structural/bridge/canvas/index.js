import Canvas from './canvas.js';
import Rect from './rect.js';

const canvas = new Canvas(document.querySelector('#canvas'));
const rect = new Rect(100, 100);

canvas.drawRect(rect);