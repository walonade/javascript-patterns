class ElementHtmlVisitor {
    constructor() {
        this.result = '';
    }

    visitParagraph(p) {
        this.result += `<p>${p.text}</p>`;
    }

    visitList(list) {
        this.result += '<ul>';

        for (let item of list.items) {
            item.accept(this);
        }

        this.result += '</ul>';
    }

    visitListItem(item) {
        this.result += `<li>${item.text}</li>`;
    }
}

class ElementPugVisitor {
    constructor() {
        this.result = '';
    }

    visitParagraph(p) {
        this.result += `p ${p.text}\r\n`;
    }

    visitList(list) {
        this.result += 'ul\r\n';

        for (let item of list.items) {
            item.accept(this);
        }
    }

    visitListItem(item) {
        this.result += `  li ${item.text}\r\n`;
    }
}

module.exports = {
    ElementHtmlVisitor,
    ElementPugVisitor
};