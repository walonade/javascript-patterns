export default class Canvas {
    constructor(element) {
        this.element = element;
        this.context = element.getContext('2d');
    }
    
    drawRect(x, y, rect) {
        this.context.fillRect(x, y, rect.width, rect.height);
    }
}