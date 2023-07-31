export const roll = (function () {
  const dice = {
    d2: [1, 2],
    d4: [1, 2, 3, 4],
    d6: [1, 2, 3, 4, 5, 6],
    d8: [1, 2, 3, 4, 5, 6, 7, 8],
    d10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    d12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    d20: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  };

  function shuffle(array: number[]) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function getRoll(diceSize: keyof typeof dice) {
    if (!dice[diceSize]) return 0;
    shuffle(dice[diceSize]);
    return dice[diceSize][0];
  }

  function d2() {
    return getRoll("d2");
  }

  function d4() {
    return getRoll("d4");
  }

  function d6() {
    return getRoll("d6");
  }

  function d8() {
    return getRoll("d8");
  }

  function d10() {
    return getRoll("d10");
  }

  function d12() {
    return getRoll("d12");
  }

  function d20() {
    return getRoll("d20");
  }

  return { d2, d4, d6, d8, d10, d12, d20 };
})();
