const winPosition = 13;
const size = 65;
const boxNumber = 13

function drawTheField(number, playerPosition, B1, B2) {
  let string = "";

  for (let times = 0; times < boxNumber; times++) {

    if (number == boxNumber) {
      string += " 🏆 ┃";
      number = number + 1;
      continue;
    }

    if (number == playerPosition) {
      string += playerPosition === B1 || playerPosition === B2 ? " 💣 ┃" : " 💃 ┃";
      playerPosition = boxNumber + 1;
    } else {
      string += " 🟩 ┃";
    }
    number = number + 1;
  }

  return "┃" + string;
}

function repeat(string, times) {
  if (times === 0) {
    return "";
  }

  return string + repeat(string, times - 1);
}

function drawTheFooter() {
  let footer = "┗";

  for (let index = 1; index < boxNumber; index++) {
    footer += repeat("━", 4) + '┻';
  }

  return footer += repeat("━", 4) + "┛";
}

function drawTheHeader() {
  let header = "┏";

  for (let index = 1; index < boxNumber; index++) {
    header += repeat("━", 4) + '┳';
  }

  return header += repeat("━", 4) + "┓"
}

function DrawTheBox(playerPosition, B1, B2) {
  console.log(drawTheHeader());
  console.log(drawTheField(1, playerPosition, B1, B2));
  console.log(drawTheFooter());
}

function PlayTheGame(currentPosition, B1, B2) {
  if (currentPosition === winPosition) {
    return " 🎉you win 😎";
  }

  currentPosition += confirm(" you want to skip") ? 2 : 1;
  console.clear();

  if (currentPosition > boxNumber) {
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

function getBomposition() {
  const bomb1 = Math.floor((Math.random()) * 10) / 1;
  const bomb2 = Math.floor((Math.random()) * 10) / 1;
  if ((bomb1 !== bomb2) && (bomb1 - 1 !== bomb2 || bomb1 - 1 !== bomb2)) {

    return PlayTheGame(0, bomb1, bomb2);
  }
  return getBomposition();
}

function play() {
  const isPlay = (confirm(" Are you Excited to play The BOOM GAME.....🔥"));
  console.clear();


  if (isPlay) {
    DrawTheBox(0, 0, 0);
    console.log(getBomposition());

    if (confirm("\n do you want to play again🔁")) {
      console.clear();
      return play();
    }
    console.log("Thanks For Playing 😉");
  }
  console.log("sorry to see you go 😔");
}

function welcomeMesage() {
  console.log("🙏 welcome to  BOMB Game.....\n");
  console.log("you have" + boxNumber + "steps .\nIf you safely cross all step then you will win the game.\n Othewise if you get BOMB then you have to start from the initial position:");

  DrawTheBox(0, 0, 0);

  play();
}

welcomeMesage();
