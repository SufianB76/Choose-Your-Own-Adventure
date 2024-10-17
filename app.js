const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

console.log("\nHello, welcome to the treasure game.");
console.log("In this game, you will traverse the lands to find treasure.");
console.log("You are given 5 health points; every mistake takes away a health point.");
console.log("There are secret stashes on every level, make sure to get them.");
console.log("The money you accumulate adds up and counts as your score.");
console.log("Good Luck!\n");

let money = 0;
let lives = 5;
let score = 0;  // Declare score

const decision = prompt("Would you like to start your journey? ").toLowerCase();

if (decision === "yes") {
    console.log("Let the treasure hunt begin.");
    console.log("There are two pathways: left or right.");
    
    let decision2 = prompt("Which one do you take? ").toLowerCase();
    
    if (decision2 === "left") {
        console.log("You fall in a river with crocs. You barely make it out alive.");
        lives--;
        console.log(`You now have ${lives} lives left.`);
    } 
    else if (decision2 === "right") {
        console.log("You chose the right path.");
        
        let decision3 = prompt("Would you like to look behind the tree or under the rock? ").toLowerCase();
        
        if (decision3 === "tree") {
            console.log("You look behind the tree, a snake jumps at you and bites you.");
            console.log("You lose a health point, but the snake wasn't poisonous.");
            lives--;
            console.log(`You now have ${lives} lives left.`);
        } 
        else if (decision3 === "rock") {
            console.log("You found 1000 gold coins, wow!");
            money = 1000;
            console.log(`You now have ${money} coins.`);
            
            let decision4 = prompt("Would you like to travel to the end with the money or not? (type 'end' or 'no') ").toLowerCase();
            
            if (decision4 === "end") {
                money = 0;  // Reset money
                console.log(`You now have ${money} coins.`);
                console.log("Congrats! You have reached the treasure island. You are now rich!");
                money = 999999;  // Set final reward
                score = money;
                console.log(`Your score is ${score}.`);
            } else {
                lives = 0;  // Set lives to 0
                console.log("Greed has killed you.");
                console.log("Game Over!");
            }
        } 
        else {
            console.log("Please type 'tree' or 'rock'.");
        }
    } 
    else {
        console.log("Please type 'left' or 'right'.");
    }
} 
else {
    console.log("Please enter 'yes' to start the game.");
}
