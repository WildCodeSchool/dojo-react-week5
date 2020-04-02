const values = (object) => {
  const output = [];
  for (const key in object) {
    output.push(object[key]);
  }
  return output;
};

module.exports = values;
