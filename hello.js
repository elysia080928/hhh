const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("请输入一句话：", (message) => {
    console.log("你刚才说：" + message);
    rl.close();
});