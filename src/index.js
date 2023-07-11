/**
 *
 * @param data: {Array}
 * @returns number
 */
 module.exports.callback1 = function(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
};

/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback2 = function(data) {
    let product = 1;
    for (let i = 0; i < data.length; i++) {
      product *= data[i];
    }
    return product;
};

/**
 *
 * @param s: {string}
 * @returns number
 */
module.exports.w = function(s, callback) {
    const words = s.split(" ");
  const lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }
  return callback(lengths);
};

/**
 *
 * @param data: {Array | Object}
 * @returns {Function}
 */
module.exports.mocker = function mocker(data) {
    // Your implementation here
    throw new Error('Task not implemented');
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
module.exports.summarize1 = function summarize1() {
    const promises = Array.prototype.slice.call(arguments);
    const resolvedPromises = Promise.all(promises);
    return resolvedPromises.then(function(values) {
      let sum = 0;
      for (let i = 0; i < values.length; i++) {
        sum += values[i];
      }
      return sum;
    });
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
 module.exports.summarize2 = async function summarize2() {
    const promises = Array.prototype.slice.call(arguments);
    const resolvedPromises = Promise.all(promises);
    return resolvedPromises.then(function(values) {
      let sum = 0;
      for (let i = 0; i < values.length; i++) {
        sum += values[i];
      }
      return sum;
    });
};
