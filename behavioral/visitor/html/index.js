const { Paragraph, List, ListItem } = require('./element');
const {ElementHtmlVisitor, ElementPugVisitor} = require('./visitor');

const p = new Paragraph('RGB');
const red = new ListItem('Red');
const green = new ListItem('Green');
const blue = new ListItem('Blue');
const ul = new List(red, green, blue);

class Document {
    constructor(...elements) {
        this.elements = elements;
    }

    accept(visitor) {
        for (let element of this.elements) {
            element.accept(visitor);
        }
    }
}

const document = new Document(p, ul);

const visitor = new ElementPugVisitor();

document.accept(visitor);

console.log(visitor.result);