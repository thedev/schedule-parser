const { range } = require("../util/range");

const limitsMap = {
  minute: [...range(0, 60)],
  month: [...range(0, 12)],
};
exports.limitsMap = limitsMap;
