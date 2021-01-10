class Element {

}

class Text extends Element {

}

class Paragraph extends Text {
    constructor(text) {
        super();
        this.text = text;
    }

    accept(visitor) {
        visitor.visitParagraph(this);
    }
}

class List extends Text {
    constructor(...items) {
        super();
        this.items = items;
    }
    
    accept(visitor) {
        visitor.visitList(this);
    }
}

class ListItem extends Text {
    constructor(text) {
        super();
        this.text = text;
    }

    accept(visitor) {
        visitor.visitListItem(this);
    }
}

module.exports = {
    Paragraph,
    List,
    ListItem
};