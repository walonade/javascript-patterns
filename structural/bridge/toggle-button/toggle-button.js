class ToggleButton {
    constructor({ element, onTextContent, offTextContent, client }) {
        this.element = element;
        this.onTextContent = onTextContent;
        this.offTextContent = offTextContent;
        this.client = client;
        this.toggle = this.toggle.bind(this);

        this.init();
    }

    get toggled() {
        return this.client.hasClass(this.element, 'toggle-button--toggled');
    }

    set toggled(value) {
        this.toggle(value);
    }

    init() {
        this.client.addEventHanlder(this.element, 'click', this.toggle);
    }

    destroy() {
        this.client.removeEventHandler(this.element, 'click', this.toggle);
    }

    toggle(isToggled = false) {
        let textContent;

        if (isToggled) {
            textContent = this.onTextContent;
            this.client.addClass(this.element, 'toggle-button--toggled');
        } else {
            textContent = this.offTextContent;
            this.client.removeClass(this.element, 'toggle-button--toggled');
        }

        this.client.setTextContent(this.element, textContent);
    }
}