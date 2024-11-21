const size = 50;
const winPosition = 100;

function inThereASnake(position) {
  let priviousPosition = position;

  switch (priviousPosition) {
    case 15:
      position = 3;
      break;
    case 30:
      position = 17;
      break;
    case 45:
      position = 25;
      break;
    case 60:
      position = 35;
      break;
    case 75:
      position = 59;
      break;
    case 90:
      position = 1;
      break;
    default:
      return priviousPosition;
  }

  console.log(" you got snake bite 🐉 at the position: ", priviousPosition);

  return position;
}

function inThereALadder(position) {
  let priviousPosition = position;

  switch (priviousPosition) {
    case 17:
      position = 56;
      break;
    case 34:
      position = 50;
      break;
    case 51:
      position = 66;
      break;
    case 68:
      position = 74;
      break;
    case 85:
      position = 98;
      break;
    default:
      return priviousPosition;
  }

  console.log("You Got A Ladder 🪜 at the position :", priviousPosition);

  return position;
}

function rollDice() {
  const dice = Math.round((Math.random() * 10) % 6) + 1;
  console.log("\n dice value is:", dice);

  return dice;
}

function calculateScore(position) {
  if (confirm(" roll the dice 🎲")) {
    const dice = rollDice();
    let currentPosition = position + dice;

    if (currentPosition > 100) {
      console.log("You exceeded the game bowndary")
      currentPosition = position;
    }

    currentPosition = inThereASnake(currentPosition);
    currentPosition = inThereALadder(currentPosition);

    return currentPosition;
  }
}

function startPlay(firstPersonsPosition, secondPersonPosition, p1, p2) {
  console.log(p1, "your turn 👩🏽");
  console.log(p1, "👩🏽 your privious position is ---", firstPersonsPosition);

  firstPersonsPosition = calculateScore(firstPersonsPosition);

  DrawTheBox(firstPersonsPosition, secondPersonPosition);

  console.log(p1, "\n👩🏽your next position  is ----", firstPersonsPosition);

  if (firstPersonsPosition === winPosition) {
    return " 👩🏽 Congratulation", p1, "you win the game 🥳 ";
  }

  console.log("___________________________________");
  console.logp2, (p2, "  your turn 👨🏻\n");
  console.log(p2, "👨🏻 your privious position is ----", secondPersonPosition);

  secondPersonPosition = calculateScore(secondPersonPosition);

  DrawTheBox(firstPersonsPosition, secondPersonPosition);

  console.log(p2, "\n👨🏻 your next position  is----", secondPersonPosition);

  if (secondPersonPosition === winPosition) {
    return '\n👨🏻 Congratulation', p2, ' win the game 🥳 ';
  }

  console.log("___________________________________");

  return startPlay(firstPersonsPosition, secondPersonPosition, p1, p2);
}

function play() {
  if (confirm("start")) {
    const p1 = prompt("enter the First player name:");
    const p2 = prompt("enter the Second player name:");

    console.log(startPlay(0, 0, p1, p2));

    if (confirm("do you want to play again 🔁 ")) {
      return welcome();
    }

  }
  console.log("thanks for playing 🤟🏼");
  return 0;
}

function drawTheField(number, p1Score, p2Score) {
  let string = "";
  for (let times = 0; times < 10; times++) {
    if (number == p1Score) {
      string += " 🔴 ┃";
      number = number + 1;
      continue;
    }
    if (number == p2Score) {
      string += " 🟢 ┃";
      number = number + 1;
      continue;
    }

    if (number === 100) {
      string += " 🏆 ┃";
    }

    if (number % 15 === 0) {
      string += "🐉  ┃";
    }

    if (number % 17 === 0) {
      string += "🪜  ┃";
    }

    if (number < 100 && !(number % 15 === 0) && !(number % 17 === 0)) {
      string += number >= 10 ? number + "  ┃" : number + "   ┃";
    }

    number = number + 1;
  }

  return "┃" + string;
}

function drawTheFooter(symbol, size) {
  let footer = "┗";
  for (let index = 1; index < size; index++) {
    if (index % 5 === 0) {
      footer += '┻';
      continue;
    }

    footer = footer + symbol;
  }
  return footer += "┛";
}


function drawTheHeader(symbol, size) {
  let header = "┏";

  for (let index = 1; index < size; index++) {
    if (index % 5 === 0) {
      header += '┳';
      continue;
    }

    header = header + symbol;
  }
  return header += "┓";
}

function divideTheField(newString, symbol) {
  for (let index = 1; index < size; index++) {
    if (index % 5 === 0) {
      newString += '╋';
      continue;
    }

    newString += symbol;
  }
  return newString + '┫';
}

function drawTheLine(times, field, p1Score, p2Score, number) {
  if (times === 9) {
    field += drawTheField(number, p1Score, p2Score);
    return field;
  }

  field += drawTheField(number, p1Score, p2Score);
  field += '\n' + divideTheField("┣", "━") + '\n';
  number = number + 10;
  return drawTheLine(times + 1, field, p1Score, p2Score, number);
}

function DrawTheBox(p1Score, p2Score) {
  console.log(drawTheHeader("━", size));
  console.log(drawTheLine(0, '', p1Score, p2Score, 1));
  console.log(drawTheFooter("━", size));

}

function welcome() {
  console.log("🙏 welcome to  SNAKE and LADDER Game.....\n__________________________________________________\n");

  DrawTheBox(0, 0);
}

welcome();

play();
