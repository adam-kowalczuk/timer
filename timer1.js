const input = process.argv.slice(2).sort((a, b) => a - b);

function timer1(input) {
  if (!input.length) {
    console.log("Please input a number");
    return;
  }
  const timeCounts = input.filter((item) => {
    return !isNaN(Number(item)) && item >= 0;
  });
  if (!timeCounts.length) {
    console.log("Input provided is not a number or is less than zero");
    return;
  }
  for (let i = 0; i < timeCounts.length; i++) {
    const delay = Number(timeCounts[i]) * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("beep");
    }, delay);
  }
};

console.log(timer1(input));

