let person = new Person('Brendan', 'Eich');

let input = document.getElementById('firstname');

let binder = new Binder();

let proxiedPerson = binder.bindTo(person, 'firstname', input, 'value');

person.firstname = 'Douglas';