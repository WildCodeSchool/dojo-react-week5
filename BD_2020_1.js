const findKeys = require('./findKeys');
const findKey = (object, value) => findKeys(object, value)[0];

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
  return `${findKey(colorMap, mostLikedTimes)} ${findKey(colorMap, secondMostLikedTimes)}`;
};

module.exports = battleDevEx1;
