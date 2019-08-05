const KEYBOARD_LEFT = { a: 65, arrowLeft: 37 }
const KEYBOARD_RIGHT = { d: 68, arrowRight: 39 }
const KEYBOARD_DOWN = { s: 83, arrowDown: 40 }
const KEYBOARD_UP = { w: 87, space: 32, arrowUp: 38 }

let pressedKeys = { left: false, right: false, up: false, down: false }

window.addEventListener('keydown', event => handleKeys(event, true))
window.addEventListener('keyup', event => handleKeys(event, false))

function handleKeys(event, value) {
    const pressedKeysCopy = { ...pressedKeys }
    const keys = [
        ...Object.keys(KEYBOARD_LEFT),
        ...Object.keys(KEYBOARD_RIGHT),
        ...Object.keys(KEYBOARD_DOWN),
        ...Object.keys(KEYBOARD_UP)]

    for (let key of keys) {
        switch (event.keyCode) {
            case KEYBOARD_LEFT[key]: pressedKeysCopy.left = value;
                break;
            case KEYBOARD_RIGHT[key]: pressedKeysCopy.right = value;
                break;
            case KEYBOARD_UP[key]: pressedKeysCopy.up = value;
                break;
            case KEYBOARD_DOWN[key]: pressedKeysCopy.down = value;
                break;
        }

        pressedKeys = pressedKeysCopy
        // console.log(pressedKeysCopy, pressedKeys)
    }
}

function getInput() {
    return pressedKeys;
}

export default { getInput }