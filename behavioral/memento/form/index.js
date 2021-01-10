const form = new Form(document.querySelector('form'));

const state = localStorage.getItem('form');

if (state) {
    form.setMemento(new FormMemento(JSON.parse(state)));
}

const states = [];

form.onChange = field => {
    const memento = form.createMemento();
    states.push(memento);
    localStorage.setItem('form', JSON.stringify(memento.state));

    console.log(states);
};