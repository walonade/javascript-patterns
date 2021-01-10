class DOM {
    static createElement(type, props, ...children) {
        const element = document.createElement(type);

        Object.keys(props).forEach(key => element[key] = props[key]);

        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }

            element.appendChild(child);
        });

        return element;
    }
}