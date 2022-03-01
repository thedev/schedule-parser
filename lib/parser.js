const parse = (expression) => {
  const args = expression.split(" ");
  const [minute, hour, dom, month, dow, command] = args;
  return {
    expression,
    minute,
    hour,
    dom,
    month,
    dow,
    command,
  };
};

module.exports = { parse };
