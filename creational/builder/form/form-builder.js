import { TextField, EmailField, PasswordField } from './form-fields.js';

export default class FormBuilder {
    constructor(method = 'GET', action) {
        this.fields = [];
        this.method = method;
        this.action = action;
    }

    addField(props) {
        let field;

        switch (options.type) {
            case 'text':
                field = new TextField(props);
                break;
            case 'email':
                field = new EmailField(props);
                break;
            case 'password':
                field = new PasswordField(props);
                break;
            default:
                throw new Error(`Invalid field type: ${type}`);
        }

        this.fields.push(field);

        return this;
    }

    getForm() {
        for (let field of this.fields) {
            this.formElement.appendChild(field.element);
        }

        return this.element;
    }
}