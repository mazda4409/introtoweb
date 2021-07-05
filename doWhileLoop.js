do {
    userInput = prompt("Give me a number between 1 and 10.");
    if (userInput <= 0 || userInput > 10) {
        alert("The number must be between 1 and 10");
    }
} while (userInput > 10 || userInput <= 0);
