const generateChessboardHummanReadable = () => {
  const output = [];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  for (let rowNumber = 0; rowNumber < 8; rowNumber = rowNumber + 1) {
    const currentLetter = letters[rowNumber];
    const row = [];
    for (let colNumber = 1; colNumber < 9; colNumber = colNumber + 1) {
      row.push(`${currentLetter} - ${colNumber}`);
    }
    output.push(row);
  }
  return output;
};

const getRange = (fromIncluded, toExcluded, step = 1) => {
  const result = [];
  for (let i = fromIncluded; i < toExcluded; i = i + step) {
    result.push(i);
  }
  return result;
};

const generateChessboard = () => 'a b c d e f g h'.split(' ').map(letter => getRange(1, 9).map(number => `${letter} - ${number}`));

module.exports = generateChessboard;
