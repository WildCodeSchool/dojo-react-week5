const map = (inputArray, mapper) => {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    outputArray[i] = mapper(inputArray[i]);
  }
  return outputArray;
};

module.exports = map;
