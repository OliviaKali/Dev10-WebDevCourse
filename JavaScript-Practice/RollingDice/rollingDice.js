// for (var i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * 6) + 1);
//   }

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
for (var i = 0; i < 100; i++) {
    console.log(rollDice());
}

//To roll a dice that is 4-side, 6-sided, 8-sided, etc.
// function rollDice(numSides) {
//     return Math.floor(Math.random() * numSides) + 1;
//   }