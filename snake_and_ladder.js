const size = 50;
const numberofBox = 10;
const winPosition = 100;

function drawBorder(leftSymbol, string, rightSymbol) {
  return leftSymbol + string + rightSymbol;
}

function repeat(string, times) {
  if (times === 0) {
    return "";
  }

  return string + repeat(string, times - 1);
}

function drawTheFooter() {
  let footer = "";

  for (let index = 1; index < numberofBox; index++) {
    footer += repeat("━", 4) + '┻';
  }
  footer += repeat("━", 4);

  return drawBorder("┗", footer, "┛");
}

function drawTheHeader() {
  let header = "";

  for (let index = 1; index < numberofBox; index++) {
    header += repeat("━", 4) + '┳';

  }
  header += repeat("━", 4);

  return drawBorder("┏", header, "┓");
}

function drawLine() {
  let line = '';

  for (let index = 1; index < numberofBox; index++) {
    line += repeat("━", 4) + '╋';
  }
  line += repeat("━", 4);

  return drawBorder('┣', line, '┫');
}

function DrawMiddle(number, p1Psition, p2Position) {
  let string = "";
  for (let times = 0; times < 10; times++) {
    if (number == p1Psition || number == p2Position) {
      string += number == p1Psition ? " 🔴 ┃" : " 🟢 ┃"
      number = number + 1;
      continue;
    }

    if (number % 15 === 0 || number % 17 === 0) {
      string += number % 15 === 0 ? "🐉  ┃" : "🪜  ┃";
      number = number + 1;
      continue;
    }
    if (number === winPosition) {
      string += " 🏆 ┃";
      number = number + 1;
      continue;
    }

    if (number <= 100) {
      string += number >= 10 ? number + "  ┃" : number + "   ┃";

    }
    number = number + 1;
  }

  return "┃" + string;
}

function drawMiddleFild(p1Psition, p2Position) {
  let string = "";
  let boardNumber = 1;
  let times = 1;

  while (times < 10) {
    string += DrawMiddle(boardNumber, p1Psition, p2Position) +
      '\n' + drawLine() + '\n';
    times++;
    boardNumber += 10;
  }
  string += DrawMiddle(boardNumber, p1Psition, p2Position);

  return string;
}

function add3String(string1, string2, string3) {
  return string1 + '\n' + string2 + '\n' + string3;
}

function DrawTheBox(p1Psition, p2Position) {
  console.log(add3String(drawTheHeader(), drawMiddleFild(p1Psition, p2Position), drawTheFooter()));
}

function isThereASnake(position) {
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

function isThereALadder(position) {
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
    console.clear();
    const dice = rollDice();
    let currentPosition = position + dice;

    if (currentPosition > 100) {
      console.log("You exceeded the game bowndary 100");
      currentPosition = position;
    }

    currentPosition = isThereASnake(currentPosition);
    currentPosition = isThereALadder(currentPosition);

    return currentPosition;
  }

  return position;
}

function startPlay(firstPersonsPosition, secondPersonPosition, p1, p2) {
  console.log(p1, "your turn 👩🏽");
  console.log(p1, "👩🏽 your privious position is ---", firstPersonsPosition);

  firstPersonsPosition = calculateScore(firstPersonsPosition);
  DrawTheBox(firstPersonsPosition, secondPersonPosition);

  console.log(p1, "👩🏽your next position  is ----", firstPersonsPosition);

  if (firstPersonsPosition === winPosition) {
    return " 👩🏽 Congratulation " + p1 + " you win the game 🥳 ";
  }

  console.log("___________________________________");
  console.log(p2, "  your turn 👨🏻\n");
  console.log(p2, "👨🏻 your privious position is ----", secondPersonPosition);

  secondPersonPosition = calculateScore(secondPersonPosition);
  DrawTheBox(firstPersonsPosition, secondPersonPosition);

  console.log(p2, "👨🏻 your next position  is----", secondPersonPosition);

  if (secondPersonPosition === winPosition) {
    return '\n👨🏻 Congratulation ' + p2 + ' you win the game 🥳 ';
  }

  console.log("___________________________________");


  return startPlay(firstPersonsPosition, secondPersonPosition, p1, p2);
}

function getPlayersName() {
  if (confirm("start")) {
    const p1 = prompt("enter the First player name:");
    const p2 = prompt("enter the Second player name:");
    console.clear();
    console.log('\n', p1, ' your token is 🔴\n', p2, ' your token is 🟢\n');

    console.log(startPlay(0, 0, p1, p2));


    if (confirm("do you want to play again 🔁 ")) {
      return welcome();
    }

  }
  console.log("thanks for playing 🤟🏼");

  return 0;
}

function welcome() {
  console.log("🙏 welcome to  SNAKE and LADDER Game.....\n__________________________________________________\n");

  DrawTheBox(0, 0);
  getPlayersName();
}

welcome();
