import { TextField, EmailField, PasswordField } from './form-fields.js';

export default class Form {
    static createField(type, props) {
        if (Form.FieldTypes[type]) {
            return new Form.FieldTypes[type](props);
        } else {
            throw new Error(`Invalid field type: ${props.type}`);
        }
    }

    constructor() {
        this.element = document.createElement('form');
    }

    addFields(...fields) {
        for (let field of fields) {
            this.element.appendChild(field);
        }
    }
}

Form.FieldTypes = {
    TEXT: TextField,
    EMAIL: EmailField,
    PASSWORD: PasswordField
};