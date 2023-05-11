const fs = require("fs");

let levels = fs.readFileSync("./levels.txt", "utf-8");

levels = levels.split("Enter");

let levelCodes = [];

levels.forEach((level) => {
    let keys = level.split("|");
    let code = "";
    keys.forEach((key) => {
        if (key.length !== 0) {
            switch (key) {
                case "ArrowRight":
                    code += "await pressRight();";
                    break;
                case "ArrowLeft":
                    code += "await pressLeft();";
                    break;
                case "ArrowUp":
                    code += "await pressUp();";
                    break;
                case "ArrowDown":
                    code += "await pressDown();";
                    break;
                case "Period":
                    code = "";
                    break;
                case "Digit1":
                    code += "await sleep(goldBlockDelay);";
                    break;
                case "Digit2":
                    code += "await sleep(cyanBlockDelay);";
                    break;
            }
        }
    });
    levelCodes.push(code);
});

fs.writeFileSync("./levels.json", JSON.stringify(levelCodes), "utf-8");
