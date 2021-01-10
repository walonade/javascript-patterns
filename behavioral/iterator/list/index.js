const List = require('./list');

const list = new List();

list.add(1);
list.add(2);
list.add(3);

for (let item of list) {
    console.log(item);
}