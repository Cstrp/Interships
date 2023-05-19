const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Args are not passed.');
} else if (args.length === 1) {
  console.log(args[0]);
} else {
  let longestSubStr = '';
  const shortestArgs = args.reduce((a, b) => (a.length <= b.length ? a : b));

  for (let i = 0; i < shortestArgs.length; i++) {
    for (let j = i + 1; j <= shortestArgs.length; j++) {
      const subStr = shortestArgs.slice(i, j);

      if (args.every((arg) => arg.includes(subStr))) {
        longestSubStr = subStr;
      }
    }
  }

  console.log(longestSubStr);
}
