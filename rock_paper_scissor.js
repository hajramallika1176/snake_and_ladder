function rules() {
  return addString("1️⃣ for 🪨", "2️⃣ for 📃", "3️⃣ for ✂️");
}

function addEmoji(choice) {
  let string = "";

  switch (choice) {
    case 1:
      return string += '┃🪨┃';
    case 2:
      return string += '┃📃┃';
    case 3:
      return string += '┃✂️ ┃';
  }
}

function repeat(string, times) {
  if (times === 0) {
    return "";
  }

  return string + repeat(string, times - 1);
}

function drawBorder(leftPart, string, rightPart) {
  return leftPart + string + rightPart;
}

function drawFooter(length) {
  let footer = "┗";
  footer += repeat("━", length) + "┛";

  return footer;
}

function drawHeader(length) {
  let header = "┏";
  header += repeat("━", length) + "┓";

  return header;
}

function middleMessage() {
  let string = " ROCK   PAPER  SCISSORS ";

  return drawBorder("┃", string, "┃")
}

function addString(string1, string2, string3) {
  return string1 + '\n' + string2 + '\n' + string3;
}

function drawEmojiBox(choice) {
  return addString(drawHeader(2), addEmoji(choice), drawFooter(2));
}

function delay(delaySpeed) {
  for (let i = 0; i < delaySpeed; i++) { };
}

function animate(inputChoice) {
  const string = "123";
  let times = 1;
  let index = 0;

  while (times < 10) {
    console.clear();
    console.log(drawEmojiBox(+string[index]));
    delay(400000000);

    index = index < 2 ? index + 1 : 0;
    times++;
  }

  console.clear();
  console.log("computer choice ⤵️");
  console.log(drawEmojiBox(inputChoice));
}

function RPSBox() {
  return addString(drawHeader(24), middleMessage(), drawFooter(24));
}

function getRandomNumber(from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

function isUserWin(userChoice, computerChoice) {
  const condition1 = userChoice === 1 && computerChoice === 3;
  const condition2 = userChoice === 2 && computerChoice === 1;
  const condition3 = userChoice === 3 && computerChoice === 2;

  return condition1 || condition2 || condition3;
}

function startPlay(count, playerScore, computScore) {
  if (count === 5) {
    if (playerScore === computScore) {
      return "It's a tie 🤝";
    }

    return playerScore > computScore ? " \n You are the winner 🎉🥳" : " \nYou lost the game 🤪";
  }

  console.log(rules());
  let userChoice = +prompt("\nplease enter your choice :");
  const computerChoice = getRandomNumber(1, 3);

  animate(computerChoice);

  console.log("your choice is ⤵️");
  console.log(drawEmojiBox(userChoice));

  if (userChoice === computerChoice) {
    console.log("It's a draw 🀄");
  }

  else if (isUserWin(userChoice, computerChoice)) {
    console.log("You won 🥳");
    playerScore++;

  } else {
    console.log("computer won 💻🤖");
    computScore++;
  }

  console.log("\nyour score is: " + playerScore + '|' + "computer  score is: " + computScore);


  if (confirm("\ntry again")) {
    return startPlay(count + 1, playerScore, computScore)
  }
  return "thanks for playing 🤗"
}

function welcome() {
  let welComeMessage = "🙏 Welcome To :"
  console.log(welComeMessage);
  console.log(RPSBox());
  if (confirm("Do you want to play ?")) {
    console.log(startPlay(0, 0, 0));

    if (confirm("\ndo you want to play again 🔁")) {
      return welcome();
    }

    return "thanks for playing ";
  }

  return "sorry to see you go 😔";
}

welcome();




