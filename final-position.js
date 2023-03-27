// CHALLENGE

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  // Your code in here ...
  let xPos = 0;
  let yPos = 0;
  for (const move of moves) {
    if (move === 'north') {
      yPos += 1;
    } else if (move === 'south') {
      yPos -= 1;
    } else if (move === 'west') {
      xPos -= 1;
    } else if (move === 'east') {
      xPos += 1;
    }
  }
  return [xPos, yPos];
}

finalPosition(moves);