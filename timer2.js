// interactive timer
const readline = require('readline');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stdin.on('data', (key) => {
  // ctrl + c
  if (key === '\u0003') {
    console.log('Thank you for using me! Ciao!');
    process.exit();
  }

  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (key === 'q') {
    askQ();
  }
});

const askQ = () => {
  rl.question('How long would you like to make the timer? ', (ans) => {
    if (isNaN(+ans) || ans < 0 || !ans) {
      return console.log(`Um... ${ans} would not work.. Press "Q" to try again!`);
    }

    console.log(`Setting timer for ${+ans} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');

      rl.question('Would you like to try it again? (yes/no): ', (ans) => {

        if (ans === "yes") {
          return askQ();
        } else {
          console.log("Alright, if not, feel free to use any commands while the application is still running!");
          console.log("If interested, you can set a timer again with the letter 'q'");
        }

      });

    }, ans * 1000);
  });

};

askQ()



