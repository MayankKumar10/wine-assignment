function calculateMean(data, property) {
  if (data.length === 0) return 0;
  const sum = data.reduce((acc, value) => Number(acc) + Number(value), 0);
  return sum / data.length;
}

function calculateMedian(data, property) {
  let result = null;

  if (data.length === 0) return 0;

  const sortedData = data.map(Number).sort((a, b) => Number(a) - Number(b));
  const middle = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    const median = Number(
      (Number(sortedData[middle - 1]) + Number(sortedData[middle])) / 2
    ).toFixed(4);
    result = isNaN(median) ? 0 : median;
  } else {
    const median = Number(sortedData[middle]);
    result = isNaN(median) ? 0 : median.toFixed(4);
  }
  return Number(result);
}

function calculateMode(data, property) {
  console.log(`data util ${property}`, data);

  if (data.length === 0) return 0;
  const frequencyMap = new Map();

  data.forEach((value) => {
    frequencyMap.set(Number(value), (frequencyMap.get(value) || 0) + 1);
  });

  let mode;
  let maxFrequency = 0;

  frequencyMap.forEach((frequency, value) => {
    if (Number(frequency) > Number(maxFrequency)) {
      maxFrequency = frequency;
      mode = value;
    }
  });

  return mode;
}

const calculateGamma = (item) => {
  if (item.Ash && item.Mg && item.Hue) {
    const gammaArray = item.Ash.map((ash, index) => {
      const hue = item.Hue[index];
      const mg = item.Mg[index];
      const result = ((ash * hue) / mg).toFixed(4);
      console.log(`Gamma calculation for index ${index}: ${result}`);
      return result;
    });
    return gammaArray;
  }
  return [];
};

export { calculateMean, calculateMedian, calculateMode, calculateGamma };
