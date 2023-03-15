const argv = process.argv.slice(2).sort((a, b) => a - b);
let timer = argv[0] * 1000;

if (!argv.length) {
  console.log("Please input a number");
  return;
}
const numbers = argv.filter((item) => {
  return !isNaN(Number(item)) && item >= 0;
});
if (!numbers.length) {
  console.log("Input provided is not a number or is less than zero");
}
for (let i = 0; i < numbers.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(timer);
  }, timer);
  timer += (numbers[i + 1] - numbers[i]) * 1000;
};

