function startPlay(rangeStart, rangeEnd, computerChoice, chances) {
  const userChoice = +prompt("\nGuess The Number 💡 -----From 1 to 10 \n");

  if (chances === 0) {
    return 'Oh no! You have used all your attempts. Better luck next time!💔';
  }

  if (userChoice === computerChoice) {
    const message = "Bravo!🎉 You've nailed it.The number was " + computerChoice;
    return message;
  }

  if (userChoice < computerChoice && userChoice >= 1) {
    console.log(userChoice, "  Too low! Try a higher number");
  }

  if (userChoice > computerChoice && userChoice <= 10) {
    console.log(userChoice, "Too high! Try a smaller number");
  }

  if (userChoice < rangeStart || userChoice > rangeEnd) {
    console.log("Invalid input! Please enter a number.");
  }

  chances = chances - 1;
  console.log("you have", chances, "chances");

  return startPlay(rangeStart, rangeEnd, computerChoice, chances);
}

function play(rangeStart, rangeEnd, maxAttempts) {
  console.log('🙏 Welcome to Guess the Number! \n The secret number is between', rangeStart, 'to', rangeEnd, '\n You have ', maxAttempts, ' attempts to find it.\n');

  const computerChoice = Math.floor((Math.random()) * rangeEnd) / 1;

  if (confirm("start▶")) {
    console.log(startPlay(rangeStart, rangeEnd, computerChoice, maxAttempts));

    if (confirm("\ndo you want to play again 🔁")) {
      return play();
    }
    
    return "thanks for playing 😉";
  }

  return "sorry to see you go 😔";
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log(play(rangeStart, rangeEnd, maxAttempts));
  return 0;
}

startGame(1, 10, 6);
