import { TextField, EmailField, PasswordField } from './form-fields.js';

export default class FormFieldFactory {
    static createField(type, props) {
        if (Form.FieldTypes[type]) {
            return new Form.FieldTypes[type](props);
        } else {
            throw new Error(`Invalid field type: ${type}`);
        }
    }
}

FormFieldFactory.FieldTypes = {
    TEXT: TextField,
    EMAIL: EmailField,
    PASSWORD: PasswordField
};