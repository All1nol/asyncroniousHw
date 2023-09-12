/**
 *
 * @param data: {Array}
 * @returns number
 */
 module.exports.callback1 = function(data) {
    let summarize1= 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];  
      summarize1 += element;
    }
    return summarize1;
};

/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback2 = function(data) {
  let summarize2= 1;
  for (let index = 0; index < data.length; index++) {
    const element2 = data[index];
    summarize2 *=element2;
  }
  return summarize2;
};

/**
 *
 * @param s: {string}
 * @returns number
 */
module.exports.w = function(s, callback) {
  const blocks = s.split(" ");
  const blockLength = blocks.map(block => block.length);
  return callback(blockLength);
};

/**
 *
 * @param data: {Array | Object}
 * @returns {Function}
 */
// module.exports.mocker = function mocker(data) {
//   new Promise(function(resolve){
//     setTimeout(() => resolve("done!"),1000);
//   });
//   const getUsers = mocker([{id: 1, name: 'User1'}]);
// getUsers().then((users) => { // Will fire after 1 second.
//   console.log(users); // result: [{id: 1, name: 'User1'}];
// });
// };

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
module.exports.summarize1 = function summarize1() {
  return Promise.all(arguments)
    .then((results) => results.reduce((sum, value) => sum + value, 0));
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
 module.exports.summarize2 = async function summarize2() {
  // const args = Array.from(arguments);
  const results = await Promise.all(arguments);
  return results.reduce((sum, value) => sum + value, 0);
  
};

/*
const promise1 = Promise.resolve(4);
const promise2 = new Promise((resolve) => resolve(2));
summarize2(promise1, promise2).then((sum) => {console.log(sum);}); // result: 6
*/