const argv = process.argv.slice(2).sort((a, b) => a - b);
let timer = argv[0] * 1000;

if (!argv.length){
  console.log ("Please input a number");
  return;
}
const numbers = argv.filter((item) => {
  return !isNaN(Number(item)) && item >= 0;
})
for (let i = 0; i < argv.length; i++) {
  console.log(timer);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer);
  timer += (argv[i + 1] - argv[i]) * 1000;
};

