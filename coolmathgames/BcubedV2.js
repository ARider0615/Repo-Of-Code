let additionalDelay = 0;

let keypressDelay = 150 + additionalDelay;
let goldBlockDelay = 500 + additionalDelay;
let cyanBlockDelay = 800 + additionalDelay;
let levelDelay = 2500;
let stopped = false;

const utils = {
    get gameWindow() {
        return document.getElementById("html5game").contentWindow;
    },
    get BCubed() {
        return this.gameWindow.BCubed;
    },
};

function acceptingInputOverride() {
    if (utils.BCubed.level) {
        Object.defineProperties(utils.BCubed.level, {
            acceptingInput: {
                get: function () {
                    return true;
                },
            },
        });
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function pressArrowKey(name) {
    return new Promise(async (resolve) => {
        await sleep(keypressDelay);
        utils.BCubed.keyboard.keys[`onArrow${name}`](name);
        resolve();
    });
}

function pressRight() {
    return new Promise(async (resolve) => {
        await pressArrowKey("Right");
        resolve();
    });
}

function pressLeft() {
    return new Promise(async (resolve) => {
        await pressArrowKey("Left");
        resolve();
    });
}

function pressUp() {
    return new Promise(async (resolve) => {
        await pressArrowKey("Up");
        resolve();
    });
}

function pressDown() {
    return new Promise(async (resolve) => {
        await pressArrowKey("Down");
        resolve();
    });
}

function nextLevel() {
    return new Promise(async (resolve) => {
        await sleep(levelDelay);
        utils.BCubed.keyboard.keys.onSpacebar();
        resolve();
    });
}

const LEVELS = [
    "await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();",
    "await pressLeft();await pressLeft();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();",
    "await pressRight();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressUp();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressLeft();await pressDown();await pressLeft();await pressDown();await pressRight();await pressRight();await pressUp();",
    "await pressUp();await pressLeft();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressUp();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressDown();await pressLeft();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();",
    "await pressUp();await pressRight();await pressUp();await pressRight();await pressUp();await pressRight();await pressUp();await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressLeft();await pressDown();await pressRight();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressLeft();await pressDown();await pressRight();",
    "await pressLeft();await pressDown();await pressDown();await pressRight();await pressRight();await pressRight();await pressUp();await pressUp();await pressUp();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();",
    "await pressUp();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressRight();await pressDown();await pressRight();await pressRight();await pressUp();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressUp();",
    "await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();",
    "await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressUp();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressDown();await pressLeft();await pressDown();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressLeft();",
    "await pressUp();await pressUp();await pressRight();await pressRight();await pressUp();await pressUp();await pressRight();await pressRight();await pressUp();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressDown();await sleep(goldBlockDelay);await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressLeft();await pressUp();",
    "await pressUp();await pressRight();await pressRight();await pressRight();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();",
    "await pressUp();await pressUp();await pressUp();await pressUp();await pressUp();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressRight();await pressDown();await pressDown();",
    "await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressUp();await pressUp();await pressRight();await pressRight();await sleep(cyanBlockDelay);await pressDown();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressDown();await pressRight();await pressUp();await pressUp();",
    "await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressRight();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressUp();await pressLeft();await pressUp();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();",
    "await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressRight();await pressRight();await pressDown();await pressLeft();await pressDown();await pressRight();await pressRight();await pressUp();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();await pressRight();await pressRight();await pressDown();await pressLeft();",
    "await pressDown();await sleep(goldBlockDelay);await pressRight();await sleep(goldBlockDelay);await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressUp();await pressRight();await pressUp();await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressDown();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressUp();await pressLeft();await pressUp();await pressRight();await pressUp();await pressUp();await pressLeft();await pressDown();",
    "await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressUp();await pressUp();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressLeft();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressUp();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();",
    "await pressRight();await pressRight();await pressUp();await pressUp();await pressRight();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressRight();await pressUp();await pressUp();await pressUp();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressLeft();",
    "await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressUp();await pressDown();await pressLeft();await sleep(cyanBlockDelay);await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();",
    "await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressUp();await pressUp();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressUp();await pressUp();await pressUp();await pressUp();await pressDown();await pressLeft();await pressDown();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressUp();await pressUp();await pressUp();await sleep(goldBlockDelay);await pressLeft();await pressDown();await pressLeft();await pressUp();await pressUp();await pressRight();await pressRight();await pressUp();await pressRight();await pressDown();await sleep(cyanBlockDelay);await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressRight();await pressDown();",
    "await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressLeft();await pressUp();await pressRight();await pressLeft();await pressUp();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();",
    "await pressUp();await sleep(goldBlockDelay);await pressLeft();await pressLeft();await pressRight();await pressDown();await pressLeft();await pressRight();await pressDown();await pressLeft();await pressDown();await pressDown();await pressDown();await pressDown();await pressDown();await pressRight();await pressUp();await sleep(cyanBlockDelay);await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();await pressRight();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressDown();await pressLeft();await pressDown();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();",
    "await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressLeft();await pressDown();await pressDown();await pressRight();await pressRight();await pressUp();await pressUp();await pressUp();await pressDown();await pressRight();await pressDown();await pressRight();await pressDown();await pressDown();await pressDown();await pressLeft();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressLeft();await pressUp();",
    "await pressLeft();await pressUp();await pressRight();await pressUp();await pressUp();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressRight();await pressDown();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressUp();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressLeft();await pressRight();await pressDown();await pressRight();await pressUp();",
    "await pressDown();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await pressLeft();await sleep(cyanBlockDelay);await pressLeft();await pressLeft();await pressUp();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressDown();await sleep(cyanBlockDelay);await pressLeft();await pressLeft();await pressLeft();await sleep(cyanBlockDelay);await pressUp();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressRight();await pressRight();await sleep(cyanBlockDelay);await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressRight();await pressUp();await pressUp();await pressRight();await pressUp();await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();",
    "await pressRight();await pressRight();await pressRight();await pressRight();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressDown();await pressDown();await pressDown();await pressRight();await sleep(cyanBlockDelay);await pressRight();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressRight();await sleep(goldBlockDelay);await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressDown();await sleep(cyanBlockDelay);await pressLeft();await pressDown();await pressRight();await pressDown();await pressLeft();await pressDown();await pressRight();await pressRight();await pressRight();",
    "await pressUp();await pressUp();await pressUp();await sleep(goldBlockDelay);await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressLeft();await pressDown();await pressLeft();await pressDown();await pressLeft();await pressDown();await pressDown();await pressRight();await pressDown();await pressRight();await pressDown();await pressRight();await pressRight();await pressRight();await pressRight();await pressUp();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressUp();await pressLeft();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressDown();await pressRight();await pressRight();await pressUp();await pressUp();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressDown();await pressRight();",
    "await pressRight();await pressRight();await pressUp();await pressUp();await pressLeft();await pressUp();await pressRight();await pressRight();await pressDown();await pressDown();await pressDown();await sleep(cyanBlockDelay);await pressLeft();await pressDown();await sleep(cyanBlockDelay);await pressLeft();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressRight();await sleep(cyanBlockDelay);await pressRight();await pressUp();await sleep(cyanBlockDelay);await pressUp();await pressUp();await pressUp();await pressLeft();",
    "await pressUp();await pressUp();await pressUp();await pressRight();await sleep(cyanBlockDelay);await pressRight();await pressRight();await pressRight();await pressRight();await pressUp();await pressLeft();await sleep(cyanBlockDelay);await pressDown();await pressDown();await pressDown();await pressRight();await pressRight();await pressDown();await pressLeft();await sleep(cyanBlockDelay);await pressRight();await pressDown();await pressLeft();await pressDown();await pressRight();await pressDown();await pressLeft();await pressDown();await pressDown();await sleep(cyanBlockDelay);await pressDown();await pressRight();await pressRight();await pressDown();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await sleep(cyanBlockDelay);await pressDown();await pressDown();await pressDown();await sleep(cyanBlockDelay);await pressDown();await pressDown();await pressRight();await pressUp();await pressUp();await pressUp();await pressLeft();await sleep(cyanBlockDelay);await pressLeft();await pressDown();await pressDown();await pressRight();await pressUp();",
    "await pressDown();await pressRight();await pressUp();await pressDown();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressLeft();await pressUp();await pressDown();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressDown();await pressRight();await pressRight();await pressRight();await pressDown();await pressRight();await pressUp();await pressUp();await pressUp();await pressLeft();await pressUp();await pressUp();await pressUp();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressLeft();await pressRight();await pressUp();await pressUp();await pressLeft();await pressDown();await pressDown();await pressLeft();await pressLeft();await pressUp();await pressRight();await pressUp();await pressLeft();await pressUp();await pressUp();await pressRight();await pressDown();await pressRight();await pressUp();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressLeft();await pressLeft();await pressDown();await pressDown();await pressRight();await pressUp();await pressRight();await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressRight();await pressDown();await pressLeft();await pressLeft();await pressDown();await pressRight();await pressRight();await pressDown();await pressDown();await pressLeft();await pressUp();await pressLeft();await pressDown();await pressLeft();await pressLeft();await pressLeft();",
];

async function start() {
    stopped = false;
    try {
        for (let i = 0; i < LEVELS.length; i++) {
            if (stopped) return;
            let level = LEVELS[i];
            console.log(`Level${i}`);
            acceptingInputOverride();
            await new Function(
                `return new Promise(async (resolve) => { ${level} resolve(); })`
            )();
            console.log("Pressing next...");
            await nextLevel();
        }
    } catch (err) {
        console.error(err);
    }
}

if (!window.hasAddedKeyListener) {
    window.hasAddedKeyListener = true;
    utils.gameWindow.addEventListener("keydown", keyPressed);
    //alert("added listener");
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
