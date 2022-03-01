const { limitsMap } = require("./data/limits");

const processorMap = {
  minute: (expression) => {
    return resolve(expression, limitsMap["minute"]);
  },
  month: (expression) => {
    return resolve(expression, limitsMap["month"]);
  },
};

const resolve = (expression, data) => {
  return { expression, data };
};

const process = (input) => {
  const processedData = Object.entries(input).map(([key, expression]) => {
    const value = processorMap[key]
      ? processorMap[key](expression)
      : expression;

    return [key, value];
  });
  const result = Object.fromEntries(processedData);
  return result;
};

module.exports = { process };
