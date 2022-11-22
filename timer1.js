// Alarm clock which will beep after specified times have passed
// Can input unlimited number of alarms using command line arguments

let intervalArr = process.argv.slice(2).map(x => x * 1000);

const timer = (intervalArr) => {

  for (const interval of intervalArr) {

    if (interval > 0 || typeof interval === 'number')
      setTimeout(() => {
        process.stdout.write('\x07');
      }, interval);
  }
};

timer(intervalArr);

