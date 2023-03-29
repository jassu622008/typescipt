import * as prompt from 'prompt-sync';
let random1 = (Math.random() * 10);
let random = random1.toFixed();

while (true){
    let input = prompt();
    let final_input = input("Enter the Number: ");
    if(final_input == random){
        console.log("you won");
        break
    }
    else{
        console.log("try again");
    }
}