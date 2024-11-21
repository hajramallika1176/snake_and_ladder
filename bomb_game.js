console.log("🙏 welcome to  BOMB Game.....\n");
console.log("you have 11 steps .\nIf you safely cross all step then you will win the game.\n Othewise if you get BOMB then you have to start from the initial position:");
const winPosition = 11;
const size = 55;

function PlayTheGame(currentPosition, B1, B2) {
  if (currentPosition === winPosition) {
    return " you win 😎";
  }
  currentPosition += confirm(" you want to skip") ? 2 : 1;

  if (currentPosition > 11) {
    console.log("you cross the game bowndary.... go back");

    currentPosition -= 2;
  }

  if (currentPosition === B1 | currentPosition === B2) {
    console.log('you got BOOM 💣 ... at the', currentPosition, 'position go back to 0')
    DrawTheBox(currentPosition, B1, B2);
    return PlayTheGame(0, B1, B2);
  }

  console.log("you are safe 🙆 ---- move forward");
  DrawTheBox(currentPosition, B1, B2);

  return PlayTheGame(currentPosition, B1, B2);
}


function drawTheField(number, playerPosition, B1, B2) {
  let string = "";

  for (let times = 0; times < 11; times++) {

    if (number == 11) {
      string += " 🏆 ┃";
      number = number + 1;
      continue;
    }

    if (number == playerPosition) {
      string += playerPosition === B1 || playerPosition === B2 ? " 💣 ┃" : " 💃 ┃";
      playerPosition = 12;
    } else {
      string += " 🟩 ┃";
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

function DrawTheBox(playerPosition, B1, B2) {
  console.log(drawTheHeader("━", size));
  console.log(drawTheField(1, playerPosition, B1, B2));
  console.log(drawTheFooter("━", size));
}


function play() {
  DrawTheBox(0, 0, 0);
  const isPlay = (confirm(" Are you Excited to play The BOOM GAME.....🔥"));
  const bombPosition1 = Math.floor((Math.random()) * 10) / 1;
  const bombPosition2 = Math.floor((Math.random()) * 10) / 1;

  if (isPlay) {
    console.log(PlayTheGame(0, bombPosition1, bombPosition2));

    if (confirm("\n do you want to play again🔁")) {
      return play();
    }
    console.log("Thanks For Playing 😉");
  }
  console.log("sorry to see you go 😔");
}

play();

