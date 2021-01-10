class Text {
    constructor(content) {
        this.content = content;
    }

    toString() {
        return this.content.toString();
    }
}

class CapsTextDecorator {
    constructor(component) {
        super();
        this.component = component;
    }

    toString() {
        return this.component.toString().toUpperCase();
    }
}

class HeaderTextDecorator {
    constructor(component) {
        super();
        this.component = component;
    }

    toString() {
        const length = this.component.toString().length;

        return ''.padStart(length, '=') + '\r\n' + this.component.toString() + '\r\n' + ''.padEnd(length, '=');
    }
}

const text = new Text('Decorator');

capsText = new CapsTextDecorator(text);
headerCapsText = new HeaderTextDecorator(capsText);

console.log(headerCapsText.toString());