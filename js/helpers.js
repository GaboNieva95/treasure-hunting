const getRandomNumber = size => 
  Math.floor(Math.random() * size);


const getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Estas que ardes!!!";
  
  } else if (distance < 40) {
    return "Muy caliente";

  } else if (distance < 60) {
    return "Caliente";

  } else if (distance < 100) {
    return "Calido";

  } else if (distance < 140) {
    return "Fresquito";

  } else if (distance < 180) {
    return "Frio";

  } else if (distance < 240) {
    return "Muy frio";

  } else if (distance < 360) {
    return "Esta comenzando a nevar?";

  } else {
    return "Te estas congelando del frio!!!";
  }

}