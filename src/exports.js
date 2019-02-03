// 1st option for exporting modules
module.exports.adder = (a, b) => `The sum of the 2 numbers is ${a + b}`;

module.exports.pi = 3.1415;

// 2nd option for exporting modules
const adder = (a, b) => `The sum of the 2 numbers is ${a + b}`;

const pi = 3.1415;

module.exports = {
  adder,
  pi
};

// 3rd option for exporting modules
const adder = (a, b) => `The sum of the 2 numbers is ${a + b}`;

const pi = 3.1415;

module.exports.adder = adder;
module.exports.pi = pi;
