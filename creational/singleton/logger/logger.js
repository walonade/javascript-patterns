const path = require('path');
const fs = require('fs');

class Logger {
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
        }

        return Logger.instance;
    }

    read() {
        return fs.readFileSync('log.txt', 'utf-8');
    }

    write(content) {
        fs.appendFileSync('log.txt', content);
    }
}

module.exports = Logger;