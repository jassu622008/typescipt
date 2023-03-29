var prompt = require("prompt-sync");
var random1 = (Math.random() * 10);
var random = random1.toFixed();
while (true) {
    var input = prompt();
    var final_input = input("Enter the Number: ");
    if (final_input == random) {
        console.log("you won");
        break;
    }
    else {
        console.log("try again");
    }
}
