const number = 7;
function rulesTheGame() {
  const message = "How To Play \n-------------\nWhat's The Sign?\n2 _ 4 = 8\n✖️,➕,➖,➗ \ncurrect is ✖️ \n\nLook At The Problem And Select the Correct Sign That Finish The Equation.";
  return message;
}

function repeat(string, times) {
  if (times === 0) {
    return '';
  }

  return string + repeat(string, times - 1);
}

function createBorder(leftSymbol, string, rightSymbol) {
  return leftSymbol + string + rightSymbol;
}

function drawTheDivider(number) {
  if (number >= 100) {
    return createBorder(" ", number, " ");
  }

  if (number < 0) {
    return number + " ";
  }

  return number >= 10 ? createBorder(" ", number, "  ") : createBorder(" ", number, "   ");
}

function drawMiddle(n1, n2, n3, n4, token, sign1, sign2) {
  let middle = "";

  for (let index = 1; index <= number; index++) {
    if (index === 2 || index === 4) {
      if (token === 0) {
        middle += createBorder('┃', "  ", '┃')
        continue;
      }

      middle += index === 2 ? createBorder('┃ ', sign1, '┃') : createBorder('┃ ', sign2, '┃')
    }

    switch (index) {
      case 1: middle = middle + drawTheDivider(n1);
        break;
      case 3: middle = middle + drawTheDivider(n2);
        break;
      case 5: middle = middle + drawTheDivider(n3);
        break;
      case 6: middle = middle + " " + "=" + " ";
        break;
      case 7: middle = middle + drawTheDivider(n4);
        break;
    }
  }

  return middle;
}

function drawTheFooter() {
  let footer = "";

  for (let index = 1; index <= number; index++) {
    if (index === 2 || index === 4) {
      const bottomLine = repeat("━", 2);
      footer += createBorder("┗", bottomLine, "┛");
      continue;
    }

    footer = footer + repeat(" ", 5);
  }

  return footer;
}

function drawTheHeader() {
  let header = "";

  for (let index = 1; index <= number; index++) {
    if (index === 2 || index === 4) {
      //console.log("k")
      const topLine = repeat("━", 2);
      header += createBorder("┏", topLine, '┓');
      continue;
    }

    header += repeat(" ", 5);
  }

  return header;
}


function creatBox(n1, n2, n3, n4, token, sign1, sign2) {

  return drawTheHeader() + '\n' + drawMiddle(n1, n2, n3, n4, token, sign1, sign2) + '\n' + drawTheFooter();;
}



function getEquation(option) {
  let equation = "";
  let value = "";

  switch (option) {
    case 1: equation += creatBox(12, 2, 6, 4, 0, "", "");
      value += "012002006004*/";
      break;
    case 2: equation += creatBox(100, 7, 2, 350, 0, "", "");
      value += "100007002350*/";
      break;
    case 3: equation += creatBox(10, 5, 50, 100, 0, "", "");
      value += "010005050100*+";
      break;
    case 4: equation += creatBox(120, 120, 60, 180, 0, "", "");
      value += "120120060180+-";
      break;
    case 5: equation += creatBox(100, 50, 100, -50, 0, "", "");
      value += "100050100-50--";
      break;
    case 6: equation += creatBox(200, 2, 5, 20, 0, "", "");
      value += "200002005020//";
      break;
    case 7: equation += creatBox(70, 2, 3, 420, 0, "", "");
      value += "070002003420**";
      break;
    case 8: equation += creatBox(45, 25, 30, 100, 0, "", "");
      value += "045025030100++";
      break;
    case 9: equation += creatBox(90, 60, 9, 39, 0, "", "");
      value += "090060009039-+";
      break;
    case 10: equation += creatBox(100, 4, 500, 525, 0, "", "");
      value += "100004500525/+";
      break;
  }

  console.log(equation);
  return value;
}

function getRandomNumber(from, to) {
  return from + Math.floor((Math.random()) * (to - from));
}

function getMessage(correct, score, incorrect) {
  const message = "_____________________________________\nYour finalScore is " + score + "\n yor guess " + correct + " currect answer  and " + incorrect + " incurrect Answer";

  return message;
}

function startPlay(score, number, correct) {
  if (number > 10) {
    return getMessage(correct, score, incorrect);
  }

  const randaomNumber = getRandomNumber(1, 10);

  let sign = getEquation(randaomNumber);

  let userSign = prompt("Enter The correct Sign:");

  let n1 = +(sign[0] + sign[1] + sign[2]);
  let n2 = +(sign[3] + sign[4] + sign[5]);
  let n3 = +(sign[6] + sign[7] + sign[8]);
  let n4 = +(sign[9] + sign[10] + sign[11]);

  console.log(creatBox(n1, n2, n3, n4, 1, userSign[0], userSign[1]));

  if (sign[12] + sign[13] === userSign) {
    correct++;
    score += 10;
    console.log(" 👊You guess the right ✅ sign\n your score is📈 ", score);
  } else {
    console.log("🥊 you guess the wrong ❌ sign \n Your score is📈 ", score);
  }

  if (confirm("next")) {
    console.clear();
    return startPlay(score, number + 1, correct);
  }
  const incorrect = number - correct;
  return getMessage(correct, score, incorrect)
}

function play() {
  if (confirm("start The game 👉")) {
    console.clear();
    console.log(startPlay(0, 1, 0));

    if (confirm("do you want to play again🔁")) {
      return play();
    }
    console.log("Thanks for Playing 👍");
  }

  console.log("sorry to see you go 😔");
}

function welCome() {
  console.log("🙏 Welcome to Guess the OPERATOR LOST Game!\n---------------------");

  if (confirm("do you want to view the rules")) {
    console.log(rulesTheGame());
  }

  return play();
}

welCome();
