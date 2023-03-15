const argv = process.argv.slice(2).sort((a, b) => a - b);
if (!argv.includes("number")) {
  return "No numbers present";
};
let timer = argv[0] * 1000;

for (let i = 0; i < argv.length; i++) {
  console.log(timer);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer);
  timer += (argv[i + 1] - argv[i]) * 1000;
}

