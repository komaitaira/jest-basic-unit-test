const toFizzBuzz = require('../../modules/fizzbuzz');

const app = () => {
  for (let i = 1; i <= 100; i += 1) {
    console.log(toFizzBuzz(i));
  }
};

module.exports = app;
