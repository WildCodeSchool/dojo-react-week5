const battleDevEx1 = (input) => {
  const [_, ...useFulInput] = input; // eslint-disable-line
  const colorMap = {};

  useFulInput.forEach(color => {
    if (colorMap[color]) {
      colorMap[color]++;
    } else {
      colorMap[color] = 1;
    }
  });

  const [mostLikedTimes, secondMostLikedTimes] = Object.values(colorMap).sort().reverse();

  function findKey (object, value) {
    for (const prop in object) {
      if (object[prop] === value) {
        return prop;
      }
    }
    return null;
  }

  return `${findKey(colorMap, mostLikedTimes)} ${findKey(colorMap, secondMostLikedTimes)}`;
};

module.exports = battleDevEx1;
