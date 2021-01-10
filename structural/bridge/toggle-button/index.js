import ToggleButton from './toggle-button.js';

new ToggleButton({
    element: document.querySelector('.toggle-button'),
    onTextContent: 'Выключить',
    offTextContent: 'Включить',
    client: {
        addClass: (element, className) => element.classList.add(className),
        removeClass: (element, className) => element.classList.remove(className),
        hasClass: (element, className) => element.classList.contains(className),
        setTextContent: (element, text) => element.textContent = text,
        addEventHandler: (element, event, handler) => element.addEventListener(event, handler),
        removeEventHandler: (element, event, handler) => element.removeEventListener(event, handler)
    }
});