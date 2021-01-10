import FormBuilder from './form-builder.js';

const formBuilder = new FormBuilder();

formBuilder
    .addField({ type: 'text', name: 'username' })
    .addField({ type: 'email', name: 'email' })
    .addField({ type: 'password', name: 'password' });

const form = formBuilder.getForm();