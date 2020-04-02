const findKeys = (object, value) => {
  const result = [];
  for (const key in object) {
    if (object[key] === value) {
      result.push(key);
    }
  }
  return result;
};

module.exports = findKeys;
