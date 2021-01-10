class FormMemento {
    constructor(state) {
        this.state = state;
    }
}

class Form {
    constructor(element) {
        this.element = element;
        this.state = new Map();
        this.onChange = Function.prototype;
        this.handleChange = this.handleChange.bind(this);
        
        for (let field of element.elements) {
            if (field.tagName === 'INPUT') {
                field.addEventListener('change', this.handleChange);
                this.state.set(field.name, field.value);
            }
        }
    }

    handleChange(event) {
        const field = event.target;

        this.state.set(field.name, field.value);

        this.onChange(event.target);
    }

    createMemento() {
        return new FormMemento(Array.from(this.state));
    }

    setMemento(memento) {
        this.state = new Map(memento.state);

        for (let field of this.element.elements) {
            if (field.tagName === 'INPUT') {
                field.value = this.state.get(field.name);
            }
        }
    }
}

Form.Memento = FormMemento;