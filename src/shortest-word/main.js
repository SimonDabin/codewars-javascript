// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

/**
 * @param {string} str input string
 * @return {number} length of the shortest word
 */
function findShort(str) {
  return str.split(' ').reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  }).length;
}

export default findShort;
