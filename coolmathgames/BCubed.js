/*
A solver for the game b-cubed (https://www.coolmathgames.com/0-b-cubed)
Note: Level 20 is not completely finished, therefore it does not get past it.
*/


let additionalDelay = 200;

let keypressDelay = 150 + additionalDelay;
let goldBlockDelay = 500 + additionalDelay;
let cyanBlockDelay = 800 + additionalDelay;

function getBCubed() {
    try {
        let bcubed = document.getElementById("html5game").contentWindow.BCubed;
        return bcubed;
    } catch (err) {
        return null;
    }
}

function getBCubedWindow() {
    try {
        let bcubed = document.getElementById("html5game").contentWindow;
        return bcubed;
    } catch (err) {
        return null;
    }
}

let BCubed = getBCubed();
let BCubedWindow = getBCubedWindow();

function pressRight(times) {
    return new Promise((resolve, reject) => {
        for (let i = 1; i < times + 1; i++) {
            setTimeout(() => {
                BCubed.keyboard.keys.onArrowRight("Right");
                if (i === times) resolve();
            }, i * keypressDelay);
        }
    });
}

function pressLeft(times) {
    return new Promise((resolve, reject) => {
        for (let i = 1; i < times + 1; i++) {
            setTimeout(() => {
                BCubed.keyboard.keys.onArrowLeft("Left");
                if (i === times) resolve();
            }, i * keypressDelay);
        }
    });
}

function pressUp(times) {
    return new Promise((resolve, reject) => {
        for (let i = 1; i < times + 1; i++) {
            setTimeout(() => {
                BCubed.keyboard.keys.onArrowUp("Up");
                if (i === times) resolve();
            }, i * keypressDelay);
        }
    });
}

function pressDown(times) {
    return new Promise((resolve, reject) => {
        for (let i = 1; i < times + 1; i++) {
            setTimeout(() => {
                BCubed.keyboard.keys.onArrowDown("Down");
                if (i === times) resolve();
            }, i * keypressDelay);
        }
    });
}

function pressSpace() {
    BCubed.keyboard.keys.onSpacebar();
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let levels = new Map();

levels.set(1, () => {
    return new Promise(async (resolve, reject) => {
        await pressRight(8);
        resolve();
    });
});

levels.set(2, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(2);
        await pressDown(2);
        await pressRight(2);
        await pressUp(1);
        await pressRight(2);
        await pressDown(2);
        await pressLeft(4);
        await pressDown(2);
        await pressRight(2);
        await pressUp(1);
        resolve();
    });
});

levels.set(3, () => {
    return new Promise(async (resolve, reject) => {
        await pressRight(4);
        await pressUp(1);
        await pressLeft(1);
        await pressUp(1);
        await pressRight(2);
        await pressUp(2);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(2);
        await pressDown(1);
        await pressLeft(1);
        await pressDown(1);
        await pressRight(2);
        await pressUp(1);
        resolve();
    });
});

levels.set(4, () => {
    return new Promise(async (resolve, reject) => {
        await pressUp(1);
        await pressLeft(2);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(2);
        await pressRight(8);
        await pressDown(1);
        await pressLeft(1);
        await pressDown(2);
        await pressLeft(2);
        await pressUp(1);
        await pressRight(1);
        await pressUp(1);
        resolve();
    });
});

levels.set(5, () => {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < 5; i++) {
            await pressUp(1);
            await pressRight(1);
        }
        await pressDown(2);
        await pressLeft(1);
        await pressDown(1);
        await pressRight(1);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(2);
        await pressDown(1);
        await pressRight(1);
        resolve();
    });
});

levels.set(6, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(1);
        await pressDown(2);
        await pressRight(3);
        await pressUp(4);
        await pressRight(2);
        await pressDown(2);
        await pressLeft(3);
        resolve();
    });
});

levels.set(7, () => {
    return new Promise(async (resolve, reject) => {
        await pressUp(1);
        await pressLeft(2);
        await pressDown(1);
        await pressRight(1);
        await pressDown(3);
        await pressRight(2);
        await pressUp(1);
        await pressRight(1);
        await pressDown(1);
        await pressRight(2);
        await pressUp(3);
        await pressLeft(3);
        await pressUp(1);
        await pressRight(5);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        resolve();
    });
});

levels.set(8, () => {
    return new Promise(async (resolve, reject) => {
        await pressDown(5);
        await pressRight(3);
        await pressUp(1);
        await pressLeft(2);
        await pressUp(1);
        await pressRight(2);
        await pressUp(1);
        await pressLeft(2);
        await pressUp(2);
        await pressRight(1);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(3);
        await pressDown(2);
        await pressLeft(2);
        await pressUp(1);
        await pressRight(1);
        resolve();
    });
});

levels.set(9, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(3);
        await pressDown(2);
        await pressRight(2);
        await pressUp(1);
        await pressRight(1);
        await pressDown(3);
        await pressRight(2);
        await pressUp(3);
        await pressLeft(1);
        await pressUp(1);
        await pressRight(3);
        await pressDown(3);
        await pressLeft(1);
        await pressDown(1);
        await pressRight(1);
        await pressDown(1);
        await pressLeft(6);
        await pressUp(2);
        await pressLeft(1);
        await pressDown(2);
        await pressLeft(1);
        resolve();
    });
});

levels.set(10, () => {
    return new Promise(async (resolve, reject) => {
        await pressUp(2);
        await pressRight(2);
        await pressUp(2);
        await pressRight(2);
        await pressUp(2);
        await pressRight(2);
        await pressDown(2);
        await pressLeft(2);
        await pressDown(2);
        await sleep(goldBlockDelay);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(3);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(2);
        await pressLeft(1);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        resolve();
    });
});

levels.set(11, () => {
    return new Promise(async (resolve, reject) => {
        await pressUp(1);
        await pressRight(4);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(2);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(3);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        resolve();
    });
});

levels.set(12, () => {
    return new Promise(async (resolve, reject) => {
        await pressUp(5);
        await pressRight(5);
        await pressDown(5);
        await pressLeft(4);
        await pressUp(1);
        await pressRight(3);
        await pressUp(1);
        await pressLeft(2);
        await pressUp(3);
        await pressRight(1);
        await pressDown(2);
        resolve();
    });
});

levels.set(13, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(4);
        await pressUp(5);
        await pressRight(2);
        await sleep(cyanBlockDelay);
        await pressDown(1);
        await pressRight(3);
        await pressUp(1);
        await pressLeft(2);
        await pressUp(1);
        await pressLeft(1);
        await pressUp(1);
        await pressRight(2);
        await pressDown(1);
        await pressRight(1);
        await pressUp(2);
        resolve();
    });
});

levels.set(14, () => {
    return new Promise(async (resolve, reject) => {
        await pressRight(1);
        await pressDown(1);
        await pressLeft(3);
        await pressUp(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(3);
        await pressDown(1);
        await pressRight(1);
        await pressDown(3);
        await pressLeft(1);
        await pressUp(2);
        await pressLeft(1);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        resolve();
    });
});

levels.set(15, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(1);
        await pressUp(3);
        await pressRight(1);
        await pressDown(2);
        await pressRight(1);
        await pressUp(3);
        await pressLeft(4);
        await pressDown(1);
        await pressRight(1);
        await pressDown(1);
        await pressLeft(1);
        await pressDown(1);
        await pressRight(1);
        await pressDown(1);
        await pressLeft(6);
        await pressUp(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(2);
        await pressDown(1);
        await pressLeft(1);
        resolve();
    });
});

levels.set(16, () => {
    return new Promise(async (resolve, reject) => {
        await pressDown(1);
        await sleep(goldBlockDelay);
        await pressRight(1);
        await sleep(goldBlockDelay);
        await pressRight(2);
        await pressUp(2);
        await pressLeft(4);
        await pressDown(3);
        await pressRight(5);
        await pressUp(2);
        await pressLeft(3);
        await pressUp(1);
        await pressRight(2);
        await pressUp(1);
        await pressLeft(5);
        await pressDown(5);
        await pressRight(7);
        await pressUp(5);
        await pressLeft(1);
        await pressDown(1);
        resolve();
    });
});

levels.set(17, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(3);
        await pressDown(3);
        await pressLeft(1);
        await pressUp(5);
        await pressRight(1);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(2);
        await pressRight(1);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(2);
        await pressRight(5);
        await pressUp(5);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(4);
        await pressRight(1);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(3);
        await pressLeft(3);
        await pressDown(1);
        await pressRight(3);
        await pressDown(2);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(1);
        resolve();
    });
});

levels.set(18, () => {
    return new Promise(async (resolve, reject) => {
        await pressRight(2);
        await pressUp(2);
        await pressRight(1);
        await pressUp(2);
        await pressLeft(4);
        await pressDown(3);
        await pressRight(2);
        await pressUp(1);
        await pressLeft(1);
        await pressUp(1);
        await pressRight(3);
        await pressDown(2);
        await pressRight(1);
        await pressUp(4);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(4);
        await pressDown(2);
        await pressRight(2);
        await pressUp(1);
        await pressLeft(1);
        resolve();
    });
});

levels.set(19, () => {
    return new Promise(async (resolve, reject) => {
        await pressLeft(1);
        await pressUp(2);
        await pressRight(1);
        await pressDown(1);
        await pressRight(1);
        await pressUp(1);
        await pressRight(2);
        await pressDown(3);
        await pressLeft(1);
        await pressUp(1);
        await pressLeft(1);
        await pressDown(3);
        await pressLeft(1);
        await pressDown(2);
        await pressRight(3);
        await pressUp(2);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(3);
        await sleep(cyanBlockDelay);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(2);
        await pressLeft(2);
        await pressDown(1);
        await pressLeft(2);
        await pressUp(1);
        await pressRight(1);
        await pressUp(1);
        await pressLeft(1);
        await pressUp(1);
        await pressRight(2);
        resolve();
    });
});

levels.set(20, () => {
    return new Promise(async (resolve, reject) => {
        await pressDown(5);
        await pressLeft(1);
        await pressUp(5);
        await pressLeft(1);
        await pressDown(5);
        await pressLeft(1);
        await pressUp(5);
        await pressDown(1);
        await pressLeft(1);
        await pressDown(4);
        await pressLeft(1);
        await pressUp(4);
        await pressLeft(1);
        await pressDown(1);
        await pressLeft(1);
        await pressUp(2);
        await pressRight(2);
        await pressUp(1);
        await pressRight(1);
        await pressDown(1);
        await pressRight(2);
        await pressDown(1);
        await pressLeft(2);
        await pressDown(2);
        await pressRight(1);
        await pressUp(1);
        await pressRight(1);
        await pressDown(1);
        await pressLeft(1);
        await pressDown(1);
        resolve();
    });
});

levels.set(21, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(22, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(23, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(24, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(25, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(26, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(27, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(28, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(29, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

levels.set(30, () => {
    return new Promise(async (resolve, reject) => {
        resolve();
    });
});

async function start() {
    try {
        for (let i = 0; i < levels.size; i++) {
            let level = levels.get(i + 1);
            console.log(`Level${i + 1}`);

            await level();
            await sleep(2500);

            pressSpace();
        }
    } catch (err) {
        console.error(err);
    }
}

// start();

function parseKeys(log) {
    let replace1 = /([A-Z])\w+:\w*/g;
    let lines = log.split("\n");
    let parsed = [];
    lines.forEach((line) => {
        line = line.replace(replace1, "");

        let hasNumber = Number(line[0]);

        if (!hasNumber) {
            line = "1" + line;
        }

        parsed.push(line);
    });
    return parsed;
}

function parseLevelFromKeyPresses(log) {
    let presses = parseKeys(log);
    let levelCode = "";
    let count = 0;
    presses.forEach((press) => {
        count++;
        press = press.trim();
        let times = press[0];
        press = press.replace(times, "").trim();

        levelCode += `console.log(${count});` + "\n";

        if (press.startsWith("// ")) {
            press = press.replace("// ", "");
            press = press.split(" ");
            if (press[0].toLowerCase() === "sleep" && Number(press[1])) {
                let sleepDelay = Number(press[1]);

                levelCode += `await sleep(${sleepDelay});` + "\n";
            }
        }

        if (press === "ArrowRight") {
            levelCode += `await pressRight(${times});` + "\n";
        }
        if (press === "ArrowLeft") {
            levelCode += `await pressLeft(${times});` + "\n";
        }
        if (press === "ArrowUp") {
            levelCode += `await pressUp(${times});` + "\n";
        }
        if (press === "ArrowDown") {
            levelCode += `await pressDown(${times});` + "\n";
        }
    });
    return levelCode;
}

if (!window.hasAddedKeyListener) {
    BCubedWindow.addEventListener("keydown", keyPressed);
}

function keyPressed(e) {
    console.log(e.code);
}

if (!window.hasAddedKeyListener) window.hasAddedKeyListener = true;

console.clear();

let parsedLevel = parseLevelFromKeyPresses(``);

console.log(parsedLevel);
