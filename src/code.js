// const name = require('./lib');

// name('Greg');

const lib = require('./lib');

lib.action();
lib.userIds.map((item, i) => {
  console.log(item);
})
