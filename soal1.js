const getWeights = (s) => {
  let weights = {};
  let currentWeight = 0;
  let currentChar = null;
  for (let char of s) {
    if (char === currentChar) {
      currentWeight += char.charCodeAt(0) - 96;
    } else {
      currentWeight = char.charCodeAt(0) - 96;
      currentChar = char;
    }
    weights[char] = Math.max(weights[char] || 0, currentWeight);
  }
  return weights;
};

const checkQueries = (s, queries) => {
  const weights = getWeights(s);
  const result = [];
  for (let q of queries) {
    if (Object.values(weights).includes(q)) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }

  return result;
};

const s = "abbcccd";
const queries = [1, 3, 9, 8];
const output = checkQueries(s, queries);
console.log(output);
