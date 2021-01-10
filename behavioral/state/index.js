const OFF = 0;
const LOW = 1;
const MEDIUM = 2;
const HIGH = 3;

let state = OFF;

function updateState() {
    if (state === OFF) {
        state = LOW;
    } else if (state === LOW) {
        state = MEDIUM;
    } else if (state === MEDIUM) {
        state = HIGH;
    } else if (state === HIGH) {
        state = OFF;
    }
}