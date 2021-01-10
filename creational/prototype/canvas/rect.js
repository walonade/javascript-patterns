export default class Rect {
    constructor(width, height, fillStyle, context) {
        this.width = width;
        this.height = height;
        this.fillStyle = fillStyle;
        this.context = context;
    }

    render(x, y) {
        this.context.fillStyle = this.fillStyle;
        this.context.fillRect(x, y, this.width, this.height);
    }

    clone() {
        const prototype = Object.getPrototypeOf(this);
        const cloned = Object.create(prototype);

        cloned.width = this.width;
        cloned.height = this.height;
        cloned.fillStyle = this.fillStyle;
        cloned.context = this.context;
        
        return cloned;
    }
}