const lengthOfSky = 25;
const heightOfSky = 10;
const space = "     ";
const start = "    *";
const rocket = "  🚀 ";

function getStartMark(from, to) {
  return  from + Math.floor((Math.random()) * (to -from));
}
function drawTheRocket(){
  const rocketMark =  getStartMark(0, lengthOfSky);
  let sky = "";
  for(let index = 0; index < lengthOfSky; index ++){
    if(rocketMark === index){
      sky += rocket;
      continue;
    }

    sky += space;
  }
}

function drawSky (){
  let sky = "";
  const starMark1 =  getStartMark(0,lengthOfSky);
  const starMark2 =  getStartMark(0, lengthOfSky);
  const starMark3 =  getStartMark(0, lengthOfSky);

  for(let index = 0; index < lengthOfSky; index ++){
    if(index === starMark1 || index === starMark2 || index === starMark3){
      sky += start;
      continue;
    }
    sky += space;
  }

  return sky ;
}

function drawNightSky(){
 let skyWithStar = "";

  for( let times = 1;times <= heightOfSky; times++){
    if(heightOfSky % 2 === times ){
      skyWithStar += drawTheRocket() + '\n';
      continue;
    }
    skyWithStar += drawSky() +'\n';
  
  }

  return skyWithStar; 
}

function wait(){
  for(let index = 0 ;index < 1000000000; index+=2){
 }
 return;
}

function animationDarkSky(){
  for(let count =1; count <10; count++){
    console.clear();

    console.log(drawNightSky());
    wait(1000000);
  }

  return 0;
}

animationDarkSky();
