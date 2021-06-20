const isFizz = (num) => num % 3 === 0;
const isBuzz = (num) => num % 5 === 0;
const outOfRange = (num) => {
  if (!(typeof num === 'number')) return true;
  if (Math.round(num) !== num) return true;
  if (num < 1) return true;
};

const toFizzBuzz = (num) => {
  if (outOfRange(num)) throw new RangeError('引数が不正です。1以上の整数のみ引数に指定可能です。');
  if (isFizz(num) && isBuzz(num)) return 'FizzBuzz';
  if (isFizz(num)) return 'Fizz';
  if (isBuzz(num)) return 'Buzz';
  return num;
};

module.exports = toFizzBuzz;
