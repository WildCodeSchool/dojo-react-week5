const filter = (inputArray, filterFunction) => {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (filterFunction(inputArray[i])) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
};

module.exports = filter;
