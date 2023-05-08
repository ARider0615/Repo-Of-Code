let additionalDelay = 200;

let keypressDelay = 150 + additionalDelay;
let goldBlockDelay = 500 + additionalDelay;
let cyanBlockDelay = 800 + additionalDelay;
let levelDelay = 2500;

const LEVELS = [
    "await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);",
    "await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);",
    "await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);",
    "await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);",
    "await pressUp(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);",
    "await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);",
    "await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);",
    "await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);",
    "await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);",
    "await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await sleep(goldBlockDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);",
    "await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);",
    "await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressRight(keypressDelay);await pressUp(keypressDelay);await pressLeft(keypressDelay);await pressLeft(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressUp(keypressDelay);await pressRight(keypressDelay);await pressDown(keypressDelay);await pressDown(keypressDelay);",
    "",
];

const utils = {
    get gameWindow() {
        return document.getElementById("html5game").contentWindow;
    },
    get BCubed() {
        return this.gameWindow.BCubed;
    },
};

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function pressArrowKey(name) {
    return utils.BCubed.keyboard.keys[`onArrow${name}`](name);
}

function pressRight(delay) {
    return new Promise(async (resolve, reject) => {
        await sleep(delay);
        pressArrowKey("Right");
    });
}

function pressLeft(delay) {
    return new Promise(async (resolve, reject) => {
        await sleep(delay);
        pressArrowKey("Left");
    });
}

function pressUp(delay) {
    return new Promise(async (resolve, reject) => {
        await sleep(delay);
        pressArrowKey("Up");
    });
}

function pressDown(delay) {
    return new Promise(async (resolve, reject) => {
        await sleep(delay);
        pressArrowKey("Down");
    });
}

function start() {
    LEVELS.forEach(async (level) => {
        // new AsyncFunction()
        // let res = eval(level);
        // alert(res);
    });
}

if (!window.hasAddedKeyListener) {
    window.hasAddedKeyListener = true;
    utils.gameWindow.addEventListener("keydown", keyPressed);
    alert("added listener");
}

/*
function copy(string) {
    navigator.clipboard
      .writeText(string)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
}
*/

window.keylog = "";
function keyPressed(e) {
    window.keylog += e.code + "|";
}
