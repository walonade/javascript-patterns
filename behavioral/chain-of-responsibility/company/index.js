const Employee = require('./employee');

const request = {
    priority: 'foo'
};

const operator = new Employee('Alan', 'Operator', 'low');
const technician = new Employee('Bob', 'Technician', 'medium');
const specialist = new Employee('Charlie', 'Specialist', 'high');

operator.next = technician;
technician.next = specialist;

operator.handleRequest(request);