const fs = require("fs");

let levels = `ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|Enter|ArrowLeft|ArrowLeft|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowLeft|ArrowLeft|ArrowLeft|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|Enter|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowUp|ArrowLeft|ArrowUp|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowLeft|ArrowDown|ArrowLeft|ArrowUp|ArrowLeft|ArrowLeft|ArrowDown|ArrowLeft|ArrowDown|ArrowRight|ArrowRight|ArrowUp|Enter|ArrowUp|ArrowLeft|ArrowLeft|ArrowDown|ArrowLeft|ArrowUp|ArrowUp|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowDown|ArrowLeft|ArrowDown|ArrowDown|ArrowLeft|ArrowLeft|ArrowUp|ArrowRight|ArrowUp|Enter|ArrowUp|ArrowRight|ArrowUp|ArrowRight|ArrowUp|ArrowRight|ArrowUp|ArrowRight|ArrowUp|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowDown|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowUp|ArrowLeft|ArrowLeft|ArrowDown|ArrowRight|Enter|ArrowLeft|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowUp|ArrowUp|ArrowRight|ArrowDown|Period|ArrowLeft|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowUp|ArrowUp|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowLeft|ArrowLeft|Enter|ArrowLeft|ArrowLeft|ArrowLeft|Period|ArrowUp|ArrowLeft|ArrowLeft|ArrowDown|ArrowRight|ArrowDown|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowRight|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowUp|ArrowLeft|ArrowLeft|ArrowLeft|ArrowUp|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowUp|Enter|ArrowDown|ArrowDown|ArrowDown|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowRight|ArrowUp|ArrowLeft|ArrowLeft|ArrowUp|ArrowRight|ArrowRight|ArrowUp|ArrowLeft|ArrowLeft|ArrowUp|ArrowUp|ArrowRight|ArrowDown|ArrowRight|ArrowUp|ArrowRight|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowLeft|ArrowDown|Enter|ArrowLeft|ArrowLeft|ArrowLeft|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowRight|ArrowUp|Period|ArrowLeft|ArrowLeft|ArrowLeft|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowRight|ArrowDown|ArrowDown|ArrowDown|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowUp|ArrowLeft|ArrowUp|ArrowRight|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowDown|ArrowLeft|ArrowDown|ArrowRight|ArrowDown|ArrowLeft|ArrowLeft|ArrowLeft|ArrowLeft|ArrowLeft|ArrowLeft|ArrowUp|ArrowUp|ArrowLeft|ArrowDown|ArrowDown|ArrowLeft|Enter|ArrowUp|ArrowUp|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowRight|ArrowRight|ArrowUp|ArrowUp|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowLeft|ArrowDown|ArrowDown|Digit1|ArrowRight|ArrowUp|ArrowRight|ArrowDown|ArrowDown|ArrowDown|ArrowLeft|ArrowUp|ArrowLeft|ArrowDown|ArrowLeft|ArrowUp|ArrowUp|ArrowLeft|ArrowDown|ArrowDown|ArrowLeft|ArrowUp|Enter|ArrowUp|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowDown|ArrowRight|ArrowUp|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowLeft|ArrowUp|ArrowLeft|ArrowDown|ArrowLeft|ArrowLeft|ArrowLeft|ArrowUp|ArrowLeft|ArrowDown|ArrowLeft|Enter|ArrowUp|ArrowUp|ArrowUp|ArrowUp|ArrowUp|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowRight|ArrowDown|ArrowDown|ArrowDown|ArrowDown|ArrowDown|ArrowLeft|ArrowLeft|ArrowLeft|ArrowLeft|ArrowUp|ArrowRight|ArrowRight|ArrowRight|ArrowUp|ArrowLeft|ArrowLeft|ArrowUp|ArrowUp|ArrowUp|ArrowRight|ArrowDown|ArrowDown|Enter|`;

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
            }
        }
    });
    levelCodes.push(code);
});

fs.writeFileSync("./levels.json", JSON.stringify(levelCodes), "utf-8");
