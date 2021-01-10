class ListIterator {
    constructor(list) {
        this.list = list;
        this.currentIndex = 0;
    }

    next() {
        let result = { value: undefined, done: true };

        if (this.currentIndex < this.list.size) {
            result.value = this.list.get(this.currentIndex);
            result.done = false;
            this.currentIndex += 1;
        }

        return result;
    }
}

class List {
    constructor() {
        this.items = {};
    }

    get size() {
        return Object.keys(this.items).length;
    }

    add(item) {
        this.items[this.size] = item;
    }

    get(index) {
        return this.items[index];
    }

    [Symbol.iterator]() {
        return new ListIterator(this);
    }
}

module.exports = List;