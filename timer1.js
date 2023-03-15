const input = process.argv.slice(2).sort((a, b) => a - b);

const timer1 = function(input) {
  if (!input.length) {
    console.log("Please input a number");
    return;
  }
  const timeDelay = input.filter((item) => {
    return !isNaN(Number(item)) && item >= 0;
  });
  if (!timeDelay.length) {
    console.log("Input provided is not a number or is less than zero");
  }
  for (let i = 0; i < timeDelay.length; i++) {
    const timer = Number(timeDelay[i]) * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(timer);
    }, timer);
  }
};

